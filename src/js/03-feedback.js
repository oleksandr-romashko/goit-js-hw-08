import throttle from 'lodash.throttle';

const LS_FORM_DATA_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const storageData = JSON.parse(localStorage.getItem(LS_FORM_DATA_KEY)) ?? {};
if (Object.keys(storageData).length) {
  [...form.elements].forEach(el => {
    el.value = storageData[el.name];
  });
}

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

/**
 * * Retrieves values from form fields.
 * @returns {object} Feefback form fields data.
 */
function getFormData() {
  const formData = {};
  [...form.elements].forEach(({ nodeName, name, value }) => {
    if (nodeName !== 'BUTTON' && value) {
      formData[name] = value;
    }
  });
  return formData;
}

/**
 * * Handles input event and invokes saving form values to local storage.
 * * If all form fields are emptied by user, clear up local storage.
 */
function onInput() {
  const formData = getFormData();
  Object.keys(formData).length ? saveToStorage(formData) : clearStorage();
}

/**
 * * Handles feedback form submit.
 * @param {Event} event Occured event.
 */
function onFormSubmit(event) {
  event.preventDefault();
  console.log(getFormData());
  form.reset();
  clearStorage();
}

/**
 * * Saves feedback data to local storage.
 * @param {object} data data to sage.
 */
function saveToStorage(data) {
  localStorage.setItem(LS_FORM_DATA_KEY, JSON.stringify(data));
}

/**
 * * Removes feedback data from local storage.
 */
function clearStorage() {
  localStorage.removeItem(LS_FORM_DATA_KEY);
}
