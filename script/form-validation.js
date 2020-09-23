// VARIABLES
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const messege = document.querySelector("#messege");

// FUNCTIONS
// err mssg for input
function showError(input, messege) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  // select the small tag to manipulate
  const small = formControl.querySelector("small");
  small.innerText = messege;
}

// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email is valid
function checkEmail(input) {
  // regular expression from stack overflow
  // ADD LINK
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
  return re.test(String(email).toLowerCase());
}

function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    // trim to take away white space
    // checks if input i blank
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Get fieldname => get input ID and uppercase the first letter
function getFieldName(input) {
  // take away first letter, make it uppercase and add the rest of the word without the first letter
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENERS
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([name, email, messege]);
  checkLength(name, 3, 20);
  checkLength(messege, 3, 400);
  checkEmail(email);
});