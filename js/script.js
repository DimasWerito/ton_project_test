const btnPopUpForm = document.querySelector(".popup__body");

function onClickBtnTryNow() {
  const btnTryNow = document.querySelectorAll(".btn-try-now");
  for (let i = 0; i < btnTryNow.length; i++) {
    btnTryNow[i].addEventListener("click", (event) => {
      btnPopUpForm.classList.remove("hidden");
    });
  }
}
onClickBtnTryNow();

function onClickBtnCloseForm() {
    const btnCloseForm = document.querySelector(".popup__close-form");
    btnCloseForm.addEventListener("click", (event) => {
        btnPopUpForm.classList.add("hidden");
    })
    
}
onClickBtnCloseForm();
