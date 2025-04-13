const items = document.querySelectorAll(".location__items");
items.forEach((item) => {
  item.addEventListener("click", () => {
    // اگر فقط یکی باید انتخاب شه:
    items.forEach((el) => el.classList.remove("selected"));
    item.classList.add("selected");
  });
});
