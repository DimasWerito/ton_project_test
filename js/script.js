const btnPopUpForm = document.querySelector(".popup__body");
const popUpRow = document.querySelector('.popup__row');

function onClickBtnTryNow() {
  const btnTryNow = document.querySelectorAll(".btn-try-now");
  for (let i = 0; i < btnTryNow.length; i++) {
    btnTryNow[i].addEventListener("click", (event) => {
      popUpRow.classList.add("isActive");
      btnPopUpForm.classList.add("isActive");
    });
  }
}
onClickBtnTryNow();

function onClickBtnCloseForm() {
    const btnCloseForm = document.querySelector(".popup__close-form");
    btnCloseForm.addEventListener("click", (event) => {
      popUpRow.classList.remove("isActive");
      btnPopUpForm.classList.remove("isActive");
    })
    
}
onClickBtnCloseForm();
