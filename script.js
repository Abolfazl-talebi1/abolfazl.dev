"use strict";
let img1 = document.querySelector("img.img-1");
img1.addEventListener("mouseover", function () {
  let pText1 = document.querySelector("p.text1");
  pText1.innerHTML = "<h3> سایت موزیک </h3>";
  pText1.style.background = "white";
  pText1.style.color = "#3f51b5";
  pText1.style.textAlign = "center";
  pText1.style.borderRadius = "20px";
  pText1.style.marginTop = "15px";
  pText1.style.transition = ".7s";
  pText1.style.padding = "4px";
});
let img2 = document.querySelector("img.img-2");
img2.addEventListener("mouseover", function () {
  let pText1 = document.querySelector("p.text2");
  pText1.innerHTML = "<h3> سایت شرکتی </h3>";
  pText1.style.background = "white";
  pText1.style.color = "#3f51b5";
  pText1.style.textAlign = "center";
  pText1.style.borderRadius = "20px";
  pText1.style.marginTop = "15px";
  pText1.style.transition = ".7s";
  pText1.style.padding = "4px";
});
let img3 = document.querySelector("img.img-3");
img3.addEventListener("mouseover", function () {
  let pText1 = document.querySelector("p.text3");
  pText1.innerHTML = "<h3> سایت خدماتی و دندانپزشکی </h3>";
  pText1.style.background = "white";
  pText1.style.color = "#3f51b5";
  pText1.style.textAlign = "center";
  pText1.style.borderRadius = "20px";
  pText1.style.marginTop = "15px";
  pText1.style.transition = ".7s";
  pText1.style.padding = "4px";
});
let img4 = document.querySelector("img.img-4");
img4.addEventListener("mouseover", function () {
  let pText1 = document.querySelector("p.text4");
  pText1.innerHTML = "<h3> سایت عکاسی </h3>";
  pText1.style.background = "white";
  pText1.style.color = "#3f51b5";
  pText1.style.textAlign = "center";
  pText1.style.borderRadius = "20px";
  pText1.style.marginTop = "15px";
  pText1.style.transition = ".7s";
  pText1.style.padding = "4px";
});
let img5 = document.querySelector("img.img-5");
img5.addEventListener("mouseover", function () {
  let pText1 = document.querySelector("p.text5");
    pText1.innerHTML = "<h3> سایت فروشگاهی </h3>";
  pText1.style.background = "white";
  pText1.style.color = "#3f51b5";
  pText1.style.textAlign = "center";
  pText1.style.borderRadius = "20px";
  pText1.style.marginTop = "15px";
  pText1.style.transition = ".7s";
  pText1.style.padding = "4px";
});
let img6 = document.querySelector("img.img-6");
img6.addEventListener("mouseover", function () {
  let pText1 = document.querySelector("p.text6");
  pText1.innerHTML = "<h3> سایت طلا و جواهر </h3>";
  pText1.style.background = "white";
  pText1.style.color = "#3f51b5";
  pText1.style.textAlign = "center";
  pText1.style.borderRadius = "20px";
  pText1.style.marginTop = "15px";
  pText1.style.transition = ".7s";
  pText1.style.padding = "4px";
});
let tooltip1 = document.querySelector("button.btn-1");
tooltip1.addEventListener("mouseover", function () {
  let btnText1 = document.querySelector("p.btn-text1");
  btnText1.innerHTML = "<p> Wa.me/989391263991 </p>";
  btnText1.style.background = "#3f51b5";
  btnText1.style.color = "#fff";
  btnText1.style.textAlign = "center";
  btnText1.style.borderRadius = "20px";
  btnText1.style.marginTop = "2px";
  btnText1.style.transition = ".7s";
});

let tooltip2 = document.querySelector("button.btn-2");
tooltip2.addEventListener("mouseover", function () {
  let btnText2 = document.querySelector("p.btn-text2");
  btnText2.innerHTML = "<p> Abolfazl.dev @</p>";
  btnText2.style.background = "#3f51b5";
  btnText2.style.color = "#fff";
  btnText2.style.textAlign = "center";
  btnText2.style.borderRadius = "20px";
  btnText2.style.marginTop = "2px";
  btnText2.style.transition = ".7s";
});

let tooltip3 = document.querySelector("button.btn-3");
tooltip3.addEventListener("mouseover", function () {
  let btnText3 = document.querySelector("p.btn-text3");
  btnText3.innerHTML = "<p> Abolfazl-talebi1</p>";
  btnText3.style.background = "#3f51b5";
  btnText3.style.color = "#fff";
  btnText3.style.textAlign = "center";
  btnText3.style.borderRadius = "20px";
  btnText3.style.marginTop = "2px";
  btnText3.style.transition = ".7s";
});

let tooltip4 = document.querySelector("button.btn-4");
tooltip4.addEventListener("mouseover", function () {
  let btnText4 = document.querySelector("p.btn-text4");
  btnText4.innerHTML = "<p> Abolfazltaleni.wp @</p>";
  btnText4.style.background = "#3f51b5";
  btnText4.style.color = "#fff";
  btnText4.style.textAlign = "center";
  btnText4.style.borderRadius = "20px";
  btnText4.style.marginTop = "2px";
  btnText4.style.transition = ".7s";
});
(() => {
  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", () => {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();
