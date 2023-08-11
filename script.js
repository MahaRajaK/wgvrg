"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelector(".close-modal");
const btnopenmodal = document.querySelectorAll(".show-modal");
console.log(btnopenmodal);

for (let i = 0; i < btnopenmodal.length; i++) {
  btnopenmodal[i].addEventListener("click", function () {
    console.log("button");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnclosemodal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

btnclosemodal.addEventListener("keydown", function (event) {
  if (event == "q") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
