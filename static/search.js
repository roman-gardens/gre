function displayResults (results, store) {
  const searchResultsSummary = document.getElementById('search-results-summary')
  const searchResultsList = document.getElementById('search-results-list')
  if (results.length) {
    searchResultsSummary.innerHTML = results.length + ' results found for <b>' + q + '</b>:'
    let resultList = ''
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref]
      resultList += '<li><b><a href="' + item.url + '">' + item.title + '</a></b>'
      resultList += '<br><small>(' + item.location + ')</small>'
      resultList += '<br>' + item.content.substring(0, 150) + '...</li>'
    }
    searchResultsList.innerHTML = resultList
  } else {
    searchResultsList.innerHTML = 'No results found for <b>' + q + '</b>'
  }
}

// Get the query parameter(s)
const params = new URLSearchParams(window.location.search)
let q = params.get('q')

// Perform a search if there is a query
if (q) {
  // Retain the search input in the form when displaying results
  document.getElementById('search-input').setAttribute('value', q)

  const idx = lunr(function () {
    this.ref('id')
    this.field('title', {
      boost: 15
    })
    this.field('tags')
    this.field('content', {
      boost: 10
    })

    for (const key in window.store) {
      this.add({
        id: key,
        title: window.store[key].title,
        tags: window.store[key].category,
        content: window.store[key].content
      })
    }
  })

  // Only return results that contain ALL query terms
  qall = '+' + q.split(' ').join(' +')

  // Perform the search
  const results = idx.search(qall)
  // Update the list with results
  displayResults(results, window.store)
}

