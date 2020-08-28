const mobile = window.matchMedia('screen and (max-width:800px)')
const contextual = document.querySelector('.play-list-container')
const backcontextual = document.querySelector('.play-list-container')

let button

function isExist(element) {
    let menu = document.querySelector(`#${element}`);
    return (menu !== null) ? true : false;
}

function addElement(parent, child) {
    if (!isExist(child)) {
        menu = document.createElement(child)
        menu.id = child
        menu.style.position = 'fixed'
        menu.style.top = '50vh'
        menu.style.left = '5px'
        menu.style.width = '32px'
        menu.style.height = '32px'
        menu.style.zIndex = '5'
        menu.style.backgroundSize = '100% 100%'
        menu.style.backgroundImage = 'url(\'../img/mayor.svg\')'
        const main = document.querySelector(parent)
        return document.body.insertBefore(menu, main)
    }
    return null
}

function removeElement(child) {
    if (isExist(child)) {
        hijo = document.querySelector(`#${child}`)
        document.body.removeChild(hijo)
    }
    return null
}

function hideShow() {
    if (contextual.classList.contains('is-active')) {
        contextual.classList.remove('is-active')
    }
    else {
        contextual.classList.add('is-active')

    }
}

function isChangeEvent(event) {
    if (event.matches) {
        button = addElement('.main-container', 'svg')
        button.addEventListener('click', hideShow)
    }
    else {
        if (isExist('svg')) {
            button.removeEventListener('click', hideShow)
            button = removeElement('svg')
        }
    }

}

mobile.addListener(isChangeEvent)
isChangeEvent(mobile)