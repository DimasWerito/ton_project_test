const btnPopUpForm = document.querySelector(".popup__body");
const popUpRow = document.querySelector('.popup__row');
const oderBody = document.querySelector('.oder__body');
const oderRow = document.querySelector('.oder__row');
const validateInputs = document.querySelectorAll(".validate");

function onClickOpenForm() {
  const btnTryNow = document.querySelectorAll(".btn-try-now");
  for (let i = 0; i < btnTryNow.length; i++) {
    btnTryNow[i].addEventListener("click", (event) => {
      popUpRow.classList.add("isActive");
      btnPopUpForm.classList.add("isActive");
    });
  }
}
onClickOpenForm();

function onClickCloseForm() {
    const btnCloseForm = document.querySelector(".popup__close-form");
    btnCloseForm.addEventListener("click", (event) => {
      removeActiveClassFromPopUpBtn();
      validateInputs.forEach(input => {
        input.classList.remove("error");
        input.value = '';
      });
    })
}
onClickCloseForm();

function validateForm() {
  const pattern = {
    name: /^[a-zA-Zа-яА-Я]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[\d\s-]{10,15}$/,
  };
  let isValid = true

  const validateField = (field) => {      
    if (pattern[field.name] && !pattern[field.name].test(field.value)) {        
      field.classList.add("error");
      isValid = false;
    } else {
      field.classList.remove("error");
    }
  }

  for (let i = 0; i < validateInputs.length; i++) {
    validateInputs[i].addEventListener("blur", (event) => validateField(event.target));
    validateInputs[i].addEventListener("input", (event) => validateField(event.target));
  }
   validateInputs.forEach(input => validateField(input));

  return isValid;
}

function onClickSendForm() {
  console.log('come');
  
  const btnSendForm = document.querySelector(".popup__btn");
  btnSendForm.addEventListener("click", (event) => {
    event.preventDefault();
    if (validateForm()) {
      // TODO: logic sending form
      notifySuccessSendFrom();
    }
  })
}
onClickSendForm();


function notifySuccessSendFrom() {
  removeActiveClassFromPopUpBtn();
  oderBody.classList.add("isActive");
  oderRow.classList.add("isActive");
}

function removeActiveClassFromPopUpBtn() {
  popUpRow.classList.remove("isActive");
  btnPopUpForm.classList.remove("isActive");
}

function onClickOderClose() {
  const oderClose = document.querySelector('.oder__close');
  oderClose.addEventListener("click", (event) => {
    oderBody.classList.remove("isActive");
    oderRow.classList.remove("isActive");
  })
}
onClickOderClose();