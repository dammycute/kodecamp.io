const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav')
const flex = document.querySelector('.flex')
const cancel = document.querySelector('#cancel')

hamburger.onclick = () => {
    nav.style.display = 'flex'
    flex.style.display = 'none'
    hamburger.style.display = 'none'
    cancel.style.display ='block'
}

cancel.onclick = () => {
    nav.style.display = 'none'
    flex.style.display = 'flex'
    hamburger.style.display = 'block'
    cancel.style.display ='none'
}