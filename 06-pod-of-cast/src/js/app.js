document.addEventListener('load', () => {
    isWebp()
    // isElementExist("class", function);
})

initMenu()

function isElementExist(_el, _cb) {
    var elem = document.querySelector(_el)

    if (document.body.contains(elem)) {
        try {
            _cb()
        } catch (e) {
            console.log(e)
        }
    }
}

function isWebp() {
    function testWebP(callback) {
        var webP = new Image()
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        }
        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
    }

    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp')
        } else {
            document.querySelector('body').classList.add('no-webp')
        }
    })
}

function initMenu() {
    const body = document.querySelector('body')
    const button = document.querySelector('#nav-opener')
    const content = document.querySelector('#header-content')

    button.addEventListener('click', () => {
        body.classList.toggle('nav-active')
        content.classList.toggle('active')
        button.classList.toggle('active')
    })

    window.addEventListener('resize', () => {
        body.classList.remove('nav-active')
        content.classList.remove('active')
        button.classList.remove('active')
    })
}
