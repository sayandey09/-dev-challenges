const navbar = document.querySelector(".nav"),
  navBtn = document.querySelector("#bar"),
  bar = document.querySelector("#bars");

navBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
  bar.classList.toggle("fa-times");
});
