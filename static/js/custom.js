window.onload = (e) => {
    // Highlight when running on localhost or test site
    let server
    if (location.hostname == 'localhost') {
        server = 'localhost'
    }
    let m = location.pathname.match(`^/(test-\\w+)/`)
    if (m)  {
        server = m[1]
    }
    if (server) {
        document.querySelector('body').classList.add(server)
        let div = document.createElement('div')
        div.classList.add('test-header')
        div.innerText = server
        document.querySelector('body').prepend(div)
    }
}

function fullscreen(img) {
    // (when clicked)
    // Enlarge the image to full screen
    let d = document.querySelector('.fullscreen')
    if (d) {
        d.remove()
    }
    d = document.createElement('div')
    d.classList.add('fullscreen')
    d.style.backgroundImage = `url(${img.src})`
    d.style.display = 'block'
    document.querySelector('body').append(d)
    d.addEventListener('click', (x) => {
        d.remove()
    })
}

async function citeThis(e) {
    // (when "cite this place/garden" button is clicked)
    // Copy the citation to the clipboard
    try {
        const citation = document.querySelector('cite').innerText
        const clip = new ClipboardItem({ ["text/plain"]: citation })
        await navigator.clipboard.write([clip])
        alert("This citation has been copied to your clipboard:\n\n" + citation)
    }
    catch (error) {
        alert("Sorry, there was an error when generating the citation.")
        console.log(error)
    }
}

function expand(e) {
    // (when "read more" button is clicked)
    // expand the previous div (province/place description)
    let div = e.target.previousElementSibling
    div.classList.add('expanded')
    e.target.remove()
}

function detectGreek() {
    // Detect <em> that contains greek characters and mark it as lang="el" (Greek)
    // so it can be styled in custom.css, under the rule for em:lang(el)
    // NOTE: this only looks in <p> (garden/place description), to avoid altering style of bibliography titles
    document.querySelectorAll('p em').forEach((em) => {
        if (em.innerText.search(/[\u0370-\u03ff\u1f00-\u1fff]/) > -1) {
            em.lang = 'el'
        }
    })
}

// run on page load
detectGreek()