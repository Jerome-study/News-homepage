const menuBar = document.getElementById('menu-cta')
const menuExit = document.getElementById('menu-exit-cta')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

menuBar.addEventListener('click', () => {
    nav.classList.add('display-nav')
    body.classList.add('dim-background')

})

menuExit.addEventListener('click', () => {
    nav.classList.remove('display-nav')
    body.classList.remove('dim-background')
})