let tabs = document.querySelectorAll(".tab");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (e) => {
    for (tab of tabs) {
      tab.classList.remove("isActive");
      console.log(tab);
    }
    tabs[i].classList.add("isActive");
  });
}
