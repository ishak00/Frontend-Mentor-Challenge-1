const Titles = document.querySelectorAll(".title");
const Content = document.querySelectorAll(".content");
const PlusImg = document.querySelectorAll(".PlusImg");

Titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    Content[index].style.display = "block";

    PlusImg[index].src = "/Frontend-Mentor-Challenge-1/image/icon-minus.svg";
  });
});

PlusImg.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    Content[i].style.display = "none";

    PlusImg[i].src = "/Frontend-Mentor-Challenge-1/image/icon-plus.svg";
  });
});
