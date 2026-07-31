// custom code for displaying garden search results from Lunr
function displayResults (qterms, results, pageData) {
  const searchResultsSummary = document.getElementById('search-results-summary')
  const searchResultsList = document.getElementById('search-results-list')
  if (results.length) {
    searchResultsSummary.innerHTML = results.length + ' result' + (results.length == 1 ? '' : 's') + ' found for <em>' + q + '</em>:'
    let resultList = ''
    // Iterate and build result list elements
    for (const n in results) {
      const item = pageData[results[n].ref]
      resultList += '<article class="list__item post">'

      // breadcrumbs
      resultList += '<div class="smallcrumbs">' + item.smallcrumbs + '</div>'

      // linked title
      resultList += '<h3 class="list__title post__title"><a href="' + item.url + '">' +
       item.title + '</a>' + (item.draft ? ' <span class="draft">draft</span>' : '') + '</h3>'

      // normalize diacritics for better snippet matching
      let content = item.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

      // find text around first instance of first query term
      let q1 = qterms[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      // find singular even when query is plural
      // TODO: can we use lunr's stemming?
      q1 = q1.replace(/es$/, '(?:es)?')
      q1 = q1.replace(/s$/, 's?')
      let re = new RegExp(`^.*?(.{0,140})(${q1})(.{0,140}).*?$`, 'is')
      // extract and highlight first term
      let snippet = content.replace(re, '$1<em>$2</em>$3')
      // highlight any other terms found within the snippet
      if (qterms.length > 1) {
        for (let i = 1 ; i < qterms.length; i++) {
          let qi = qterms[i]
          let re2 = new RegExp(`(${qi})`, 'i')
          snippet = snippet.replace(re2, '<em>$1</em>')
        }
      }
      snippet = '...' + snippet.replace(/^\w+|\w+$/g, '') + '...'
      resultList += snippet

      resultList += '</article>'
    }
    searchResultsList.innerHTML = resultList
  } else {
    searchResultsSummary.innerHTML = 'No results found for <b>' + q + '</b>'
    searchResultsList.innerHTML = ''
  }
}

// Get the query parameter(s)
const params = new URLSearchParams(window.location.search)
let q = params.get('q')

// Perform a search if there is a query
if (q) {

  // Retain the search input in the form when displaying results
  window.setTimeout((function(){document.getElementById('search-input').setAttribute('value', q)}), 500)

  // also split tokens on slash
  lunr.tokenizer.separator = /[\s\-\/]+/

  // build a lunr search index from all the page data
  const searchIndex = lunr(function () {
    this.ref('id')
    this.field('title', {
      boost: 10
    })
    this.field('content')

    for (const key in window.pageData) {
      this.add({
        id: key,
        title: window.pageData[key].title,
        content: window.pageData[key].content.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      })
    }
  })

  // Only return results that contain ALL query terms
  let qterms = q.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\W+/g, ' ').trim().split(' ')
  let qall = '+' + qterms.join(' +')

  // remove some stopwords -- TODO: can lunr do this for us?
  qall = q.replaceAll(/\s?\\+(at|in|of|the)/g, '')

  try {
    // Perform the search
    window.results = searchIndex.search(qall)
    //window.results = results
    // Update the list with results
    displayResults(qterms, window.results, window.pageData)
  }
  catch {
    const searchResultsSummary = document.getElementById('search-results-summary')
    searchResultsSummary.innerHTML = 'Error parsing the query <b>' + q + '</b>'
    searchResultsList = document.getElementById('search-results-list').innerHTML = ''
  }
}
