const btns = document.querySelectorAll("button")
const sc = document.querySelectorAll(".sc")
const firstTop = sc[0].offsetTop
const secondTop = sc[1].offsetTop

btns[0].onclick = function() {
    window.scroll({top:firstTop, behavior:'smooth'})
}
btns[1].onclick = function() {
    window.scroll({top:secondTop, behavior:'smooth'})
}

//https://www.youtube.com/watch?v=r3G0U5fva1c&t=416s