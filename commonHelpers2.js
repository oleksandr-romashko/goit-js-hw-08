import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import"https://player.vimeo.com/api/player.js";import{t as m}from"./assets/vendor-71ac5ada.js";const r="videoplayer-current-time";let n;const o=new Vimeo.Player(document.getElementById("vimeo-player"));o.on("loaded",u);o.on("timeupdate",m(a,1e3,{trailing:!1}));o.on("pause",a);o.on("ended",i);function u({id:e}){n=e;const t=p(e);o.setCurrentTime(t).catch(l=>d(l,t))}function a({seconds:e}){c(e)}function i(){c(0)}function d(e,t){switch(e.name){case"RangeError":{console.error(`RangeError:
Stored video playback time is set to '${t}' seconds.
The time is less than 0 or greater than the video’s duration.`),i();break}default:{console.error(e);break}}}function p(e){return s()[e]??0}function c(e){const t=s();t[n]=e,localStorage.setItem(r,JSON.stringify({[n]:e}))}function s(){return JSON.parse(localStorage.getItem(r))??{}}
//# sourceMappingURL=commonHelpers2.js.map
