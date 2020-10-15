const menuBtn = document.querySelector(".menu-btn");
const hamberger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");


menuBtn.addEventListener("click", () => {
    hamberger.classList.toggle("open");
    nav.classList.toggle("open");
    menuNav.classList.toggle("open");
    navItems.forEach((i) => {
        i.classList.toggle("open");
    });
});

// let status = false;
// menuBtn.addEventListener("click", () => {
//     if (!status) {
//         hamberger.classList.add("open");
//         nav.classList.add("open");
//         menuNav.classList.add("open");
//         navItems.forEach( i => {i.classList.add("open")});

//         status = true;
//     } else {
//         hamberger.classList.remove("open");
//         nav.classList.remove("open");
//         menuNav.classList.remove("open");
//         navItems.forEach((i) => {i.classList.remove("open")});

//         status = false;
//     }
// });
