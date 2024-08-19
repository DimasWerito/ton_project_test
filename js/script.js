document.addEventListener("DOMContentLoaded", () => {
  const btnPopUpForm = document.querySelector(".popup__body");
  const popUpRow = document.querySelector(".popup__row");
  const oderBody = document.querySelector(".oder__body");
  const oderRow = document.querySelector(".oder__row");
  const validateInputs = document.querySelectorAll(".validate");

  function onClickOpenForm() {
    const btnTryNow = document.querySelectorAll(".btn-try-now");
    btnTryNow.forEach((btn) => {
      btn.addEventListener("click", () => {
        let finalSum = 0;
        const intervalId = showToastMessage((sum) => (finalSum = sum));
        
        setTimeout(() => {
          displayProfitAndTogglePopup(intervalId, finalSum);
        }, 4000);
      });
    });
  }

  function displayProfitAndTogglePopup(intervalId, finalSum) {
    clearInterval(intervalId);
    document.querySelector(".popup__profit").textContent = `Your profit could be ${finalSum}$`;
    togglePopup(true);
  }

  function onClickCloseForm() {
    document.querySelector(".popup__close-form").addEventListener("click", () => {
      togglePopup(false);
      resetValidationInputs();
    });
  }

  function onClickSendForm() {
    document.querySelector(".popup__btn").addEventListener("click", (event) => {
      event.preventDefault();
      if (validateForm()) {
        notifySuccessSendForm();
      }
    });
  }

  function onClickOderClose() {
    document.querySelector(".oder__close").addEventListener("click", () => {
      toggleOder(false);
    });
  }

  function togglePopup(isActive) {
    popUpRow.classList.toggle("isActive", isActive);
    btnPopUpForm.classList.toggle("isActive", isActive);
  }

  function toggleOder(isActive) {
    oderBody.classList.toggle("isActive", isActive);
    oderRow.classList.toggle("isActive", isActive);
  }

  function resetValidationInputs() {
    validateInputs.forEach((input) => {
      input.classList.remove("error");
      input.value = "";
    });
  }

  function validateForm() {
    const patterns = {
      name: /^[a-zA-Zа-яА-Я]{3,}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\+?[\d\s-]{10,15}$/,
    };

    let isValid = true;

    const validateField = (field) => {
      const pattern = patterns[field.name];
      if (pattern && !pattern.test(field.value)) {
        field.classList.add("error");
        isValid = false;
      } else {
        field.classList.remove("error");
      }
    };

    validateInputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => validateField(input));
      validateField(input);
    });

    return isValid;
  }

  function notifySuccessSendForm() {
    togglePopup(false);
    toggleOder(true);
  }

  function showToastMessage(sumCallback) {
    let sum = 0;
    const randomNumber = 99;
    const chart  = document.getElementById("chart");
    chart.scrollIntoView({ block: "center", behavior: "smooth" });
    const intervalId = setInterval(() => {
      const randomInteger = Math.floor(Math.random() * randomNumber);
      sum += randomInteger;
      sumCallback(sum);

      Toastify({
        text: `Your current profit ${randomInteger}$`,
        duration: 1000,
        newWindow: true,
        className: "toast-message",
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: 'green',
        },
      }).showToast();
    }, 700);

    return intervalId;
  }

  onClickOpenForm();
  onClickCloseForm();
  onClickSendForm();
  onClickOderClose();
});
