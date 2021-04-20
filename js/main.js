const navOpen = document.querySelector(".open-btn");
const navClose = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
    if (menuLeft < 0) {
        menu.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if (menuLeft < 0) {
        menu.classList.remove("show");
    }
});