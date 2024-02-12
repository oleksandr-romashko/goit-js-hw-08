import throttle from 'lodash.throttle';

const LS_FORM_DATA_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

const storageData = loadFromStorage();
if (Object.keys(storageData).length) {
  [...form.elements].forEach(el => {
    el.value = storageData[el.name];
  });
}

function onInput() {
  const formData = getFormData();
  Object.keys(formData).length ? saveToStorage(formData) : clearStorage();
}

function getFormData() {
  const formData = {};
  [...form.elements].forEach(({ nodeName, name, value }) => {
    if (nodeName !== 'BUTTON' && value) {
      formData[name] = value;
    }
  });
  return formData;
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(getFormData());
  form.reset();
  clearStorage();
}

function loadFromStorage() {
  return JSON.parse(localStorage.getItem(LS_FORM_DATA_KEY)) ?? {};
}

function saveToStorage(data) {
  localStorage.setItem(LS_FORM_DATA_KEY, JSON.stringify(data));
}

function clearStorage() {
  localStorage.removeItem(LS_FORM_DATA_KEY);
}
