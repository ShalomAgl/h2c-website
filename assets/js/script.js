/*----------------------------------
*HAMBURGER MENU ENDS
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

