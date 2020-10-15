(function () {
  // VARIABLES
  const form = document.querySelector('#form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const messege = document.querySelector('#messege');

  // FUNCTIONS
  // err mssg for input
  const showError = (input, messege) => {
    const formControl = input.parentElement;
    formControl.className = 'form__control error';

    // select the small tag to manipulate error message
    const small = formControl.querySelector('small');
    small.innerText = messege;
  };

  // show success outline
  const showSuccess = (input) => {
    // samma todo som ovan
    const formControl = input.parentElement;
    formControl.className = 'form__control success';
  };

  // check email is valid
  const checkEmail = (input) => {
    // regular expression from stack overflow
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
    return re.test(String(email).toLowerCase());
  };

  const checkRequired = (inputArray) => {
    inputArray.forEach((input) => {
      // trim to take away white space
      // checks if input i blank
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
      } else {
        showSuccess(input);
      }
    });
  };

  // Check input length
  const checkLength = (input, min, max) => {
    if (input.value.length < min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
      showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
      showSuccess(input);
    }
  };

  // Get fieldname => get input ID and uppercase the first letter
  const getFieldName = (input) => {
    // take away first letter, make it uppercase and add the rest of the word without the first letter
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  };

  // EVENT LISTENERS
  form.addEventListener('submit', (e) => {
    e.preventDefault(e);

    checkRequired([name, email, messege]);
    checkLength(name, 3, 20);
    checkLength(messege, 3, 400);
    checkEmail(email);

    const error = document.querySelectorAll('.error').length;

    // if all successful, link to another page
    // changed from success nr === N to make it easier to maintain
    // if more fields get added
    if (error === 0) {
      window.location.href = './form-submitted.html';
    }
  });
})()