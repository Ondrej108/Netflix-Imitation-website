/**
 * @fileoverview Password validation and registration button functionality.
 * @author Ondřej Medaš
 */

/** @type {HTMLInputElement|null} */
const pass1 = document.getElementById("passForm1");
/** @type {HTMLInputElement|null} */
const pass2 = document.getElementById("passForm2");

/**
 * Applies CSS class to multiple elements
 * @function applyClassToElements
 * @param {HTMLInputElement[]} elements - Array of input elements
 * @param {string} className - CSS class name to apply
 * @returns {void}
 */
const applyClassToElements = (elements, className) => {
  elements.forEach((element) => {
    element.classList.remove("valid-empty", "valid-red", "valid-green");
    element.classList.add(className);
  });
};

/**
 * Validates password fields and applies CSS classes
 * @function validatePassword
 * @returns {void}
 */
const validatePassword = () => {
  if (!pass1 || !pass2) return;

  const elements = [pass1, pass2];

  if (pass1.value === "" && pass2.value === "") {
    applyClassToElements(elements, "valid-empty");
  } else if (pass1.value === pass2.value) {
    applyClassToElements(elements, "valid-green");
  } else {
    applyClassToElements(elements, "valid-red");
  }
};

if (pass1 && pass2) {
  pass1.addEventListener("input", validatePassword);
  pass2.addEventListener("input", validatePassword);
}

/** @type {HTMLButtonElement|null} */
const regButton = document.getElementById("regBtn");

if (regButton) {
  regButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
