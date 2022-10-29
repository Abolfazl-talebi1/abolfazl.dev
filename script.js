"use strict";

(() => {
  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", () => {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");
    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(
      parentListItem
    );
    const panel = [...tabPanels].filter(
      (el) => el.getAttribute("data-index") == index
    );
    panel[0].classList.add("active");
  });
}
let online = navigator.online();
console.log(online);
alert(
  "سلام به وب سایت بنده خوش آمدید صفحه اینستاگرام بنده را به آدرس:Abolfazltalebi.wp دنبال کنید .ممنون"
);
