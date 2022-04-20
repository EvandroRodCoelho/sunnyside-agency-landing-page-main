function menu(){
    let buttonMenu = document.querySelector(".menu")
    buttonMenu.classList.toggle("opacity")

    let Header = document.querySelector("#header-container")
    Header.classList.toggle("menu-mobile")
    Header.classList.toggle("header-container")
    let menuMobile = document.querySelector("#menu-mobile")
    menuMobile.classList.toggle("menu-mobile-active")
    menuMobile.classList.toggle("menu-mobile")
}
