const bar = document.querySelector(".bars");
const navMenu = document.querySelector(".navMenu");
const closeBtn = document.querySelector(".close");
bar.addEventListener("click", () => {
  navMenu.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
});
