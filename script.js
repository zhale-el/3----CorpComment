//-- form componet --

const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const formEl = document.querySelector(".form");

const inputHandler = () => {
  //determine maximum number of characters
  const maxNrChars = 150;

  //determin number of characters currently typed
  const nrCharsTyped = textareaEl.value.length;

  //calculate number of charcters left (maximum minus currently typed)
  const charsLeft = maxNrChars - nrCharsTyped;

  //show number of charcters left
  counterEl.textContent = charsLeft;
};

textareaEl.addEventListener("input", inputHandler);

//-- counter componet --
const submitHandler = (event) => {
  event.preventDefault();

  //get text from textarea
  const text = textareaEl.value;

  //validate text
  if (text.includes("#") && text.length >= 5) {
    formEl.classList.add("form--valid");

    setTimeout(() => {
      formEl.classList.remove("form--valid");
    }, 2000);
  } else {
    formEl.classList.add("form--invalid");

    setTimeout(() => {
      formEl.classList.remove("form--invalid");
    }, 2000);
  }
};

formEl.addEventListener("submit", submitHandler);
