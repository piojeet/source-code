const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const navList = document.querySelector("nav ul");
const body = document.querySelector("body");

menuBtn.addEventListener("click", function() {
    navList.classList.add("active");
    body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", function() {
    navList.classList.remove("active");
    body.classList.remove("no-scroll");
});
