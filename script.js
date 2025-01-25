let hamburger = document.querySelector(".hamburger-icon");
let nav_menu_option = document.querySelectorAll(".nav-menu-option");
let header_ul = document.querySelector("ul");
let nav_bar = document.querySelector(".nav-bar");
let mobile_button = document.querySelector(".creation-mobile-button")
let display_creation = Array.from(document.querySelector(".display-creation").children)
let count = 0

hamburger.addEventListener("click", () => {
    nav_menu_option.forEach((option) => {
        if (count % 2 == 0) {
            option.style.display = "block";
        } else {
            option.style.display = "none";

        }
        if (count % 2 == 0) {
            nav_bar.style.alignItems = "flex-start";
        } else {
            nav_bar.style.alignItems = "center";
        }

        header_ul.classList.toggle("flex-direction");
        header_ul.classList.add("algin-item");
    })
    count++
})
if (getComputedStyle(mobile_button).display === "block") {
    window.onload = function () {
        for (let i = 2; i < display_creation.length; i++) {
            display_creation[i].classList.toggle("no-display")
        }
    }
}

mobile_button.addEventListener("click", () => {
    for (let i = 2; i < display_creation.length; i++) {
        display_creation[i].classList.toggle("no-display")
        if (display_creation[i].classList.contains("no-display")) {
            mobile_button.innerText = "See All"

        } else {
            mobile_button.innerText = "See Less"

        }
    }


})
