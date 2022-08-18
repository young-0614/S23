const TriggerMargin = 200;
const ElementList = document.querySelectorAll('.ani');

const scFunc = function() {
  for (const element of ElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + TriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', scFunc);
window.addEventListener('scroll', scFunc);

//https://joshua-dev-story.blogspot.com/2020/11/javascript-css-scroll-animation.html