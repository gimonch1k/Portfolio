import "/src/sass/style.scss";
let burgerBtn = document.querySelector(".burger"),
  closeBtn = document.querySelector(".menu__close"),
  menu = document.querySelector(".menu");

burgerBtn.addEventListener("click", function () {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("active");
});

const percents = document.querySelectorAll(".skills__level-percent"),
  lines = document.querySelectorAll(".skills__level-body span");

percents.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
