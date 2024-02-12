import throttle from 'lodash.throttle';

const LS_FORM_VALUES_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

init();

function init() {
  let storageValues = loadValuesFromStorage();
  if (!storageValues) {
    return;
  }

  [...form.elements].forEach(el => {
    const storageValue = storageValues[el.name];
    if (storageValue) {
      el.value = storageValue;
    }
  });
}

function onFormInput() {
  const formValues = readFormValues();
  Object.keys(formValues).length
    ? saveValuesToStorage(formValues)
    : clearStorage();
}

function onFormSubmit(event) {
  event.preventDefault();
  const values = loadValuesFromStorage();
  clearStorage();
  form.reset();
  console.log(values);
}

function readFormValues() {
  const formValues = {};
  [...form.elements].forEach(({ nodeName, name, value }) => {
    if (
      value.trim().replace('\n', '') &&
      (nodeName == 'INPUT' || nodeName == 'TEXTAREA')
    ) {
      formValues[name] = value;
    }
  });
  return formValues;
}

function loadValuesFromStorage() {
  return JSON.parse(localStorage.getItem(LS_FORM_VALUES_KEY));
}

function saveValuesToStorage(values) {
  localStorage.setItem(LS_FORM_VALUES_KEY, JSON.stringify(values));
}
function clearStorage() {
  localStorage.removeItem(LS_FORM_VALUES_KEY);
}
