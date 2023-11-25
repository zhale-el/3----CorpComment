//-- counter componet --

const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");

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
