/*----------------------------------
*HAMBURGER MENU STARTS
-----------------------------------  */
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#navMenu')
const navLink = document.querySelectorAll('.item__link')

hamburger.addEventListener('click',
    () => {
    hamburger.classList.toggle("menu--is-active")
    navMenu.classList.toggle("menu--is-active")
    }   
)

navLink.forEach(n => n.addEventListener("click", 
() => {
    hamburger.classList.remove("menu--is-active");
    navMenu.classList.remove("menu--is-active");
}
))

/*----------------------------------
*HAMBURGER MENU ENDS
-----------------------------------  */


/*----------------------------------
*RIPPLE EFFECT STARTS
-----------------------------------  */

function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  
  const mybuttons = document.getElementsByTagName("button");
  for (const buttonn of mybuttons) {
    buttonn.addEventListener("click", createRipple);
  }

/*----------------------------------
*RIPPLE EFFECT ENDS
-----------------------------------  */


/*----------------------------------
MODAL WINDOW STARTS
-----------------------------------  */
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainer.classList.toggle("active")
}


/*----------------------------------
MODAL WINDOW EFFECT ENDS
-----------------------------------  */



/*----------------------------------
COOKIE CONSENNT POP UP 
-----------------------------------  */

var cookieModal = document.querySelector(".cookie-consent-modal")
var cancelCookieBtn = document.querySelector(".consent-btn.no")
var acceptCookieBtn = document.querySelector(".consent-btn.yes")

cancelCookieBtn.addEventListener("click", () => {
  cookieModal.classList.remove("active")
})

acceptCookieBtn.addEventListener("click", () => {
  cookieModal.classList.remove("active")
  localStorage.setItem("cookieAccepted", "yes")
})

setTimeout( () => {
  var cookieAccepted = localStorage.getItem("cookieAccepted")
  if (cookieAccepted != "yes"){
    cookieModal.classList.add("active")
  }
}, 1500 )

/*----------------------------------
COOKIE CONSENT POP UP
-----------------------------------  */



