const togol = document.getElementById("togol");
let nav = document.querySelector(".nav");
const cancel = document.getElementById("cancel");
let togolclass = document.querySelector(".togol");
let cancelclass = document.querySelector(".cancel");

togol.addEventListener("click", () => {
  nav.classList.toggle("hidden");

  togolclass.classList.toggle("hidden");
  cancelclass.classList.toggle("hidden");
});

cancel.addEventListener("click", () => {
  nav.classList.toggle("hidden");

  togolclass.classList.toggle("hidden");
  cancelclass.classList.toggle("hidden");
});

// ==================For ReadMore Buttons============================================

var readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(function (button) {
  let isHidden = true;
  button.addEventListener("click", function () {
    if (isHidden) {
      button.innerHTML = "Read Less";
    } else {
      button.innerHTML = "Read More";
    }
    isHidden = !isHidden;
    var hiddenParagraph = button.previousElementSibling;
    hiddenParagraph.classList.toggle("hidden");
  });
});
