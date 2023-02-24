let accordionItems = document.querySelectorAll(".questions__item-wrapper");
let answers = document.querySelectorAll(".answer__wrapper");

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

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: true,
  });
});
