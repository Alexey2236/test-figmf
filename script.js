let accordionItems = document.querySelectorAll(".questions__item-wrapper");
let answers = document.querySelectorAll(".answer__wrapper");
let burger = document.querySelector(".header__burger-btn");
let header = document.querySelector(".header");

accordionItems.forEach((item) => {
  item.nextElementSibling.style.display = "none";
  item.addEventListener("click", () => {
    let content = item.nextElementSibling;
    let img = item.firstElementChild;

    if (content.style.display === "flex") {
      answers.forEach((el) => {
        el.style.display = "none";
        img.style.transform = "rotate(0deg)";
        item.style.color = "";
      });
    } else {
      content.style.display = "flex";
      img.style.transform = "rotate(180deg)";
      item.style.color = "black";
    }
  });
});

burger.addEventListener("click", () => header.classList.toggle("open"));

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settiing: {
          centerMode: true,
        },
      },
      //   {
      //     breakpoint: 425,
      //     settiing: {
      //       centerPadding: "40px",
      //       centerMode: true,
      //       variableWidth: true,
      //     },
      //   },
    ],
  });
});

$(document).ready(function () {
  $(".reviews__slider").slick({
    dots: true,
    arrows: false,
  });
});
