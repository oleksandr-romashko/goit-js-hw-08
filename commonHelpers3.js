import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as f}from"./assets/vendor-5b681ac7.js";const o="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",f(i,500));e.addEventListener("submit",l);const r=u();Object.keys(r).length&&[...e.elements].forEach(t=>{t.value=r[t.name]});function i(){const t=a();Object.keys(t).length?g(t):c()}function a(){const t={};return[...e.elements].forEach(({nodeName:m,name:s,value:n})=>{m!=="BUTTON"&&n&&(t[s]=n)}),t}function l(t){t.preventDefault(),console.log(a()),e.reset(),c()}function u(){return JSON.parse(localStorage.getItem(o))??{}}function g(t){localStorage.setItem(o,JSON.stringify(t))}function c(){localStorage.removeItem(o)}
//# sourceMappingURL=commonHelpers3.js.map
