!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{const e=document.querySelector("menu");document.querySelector("body").addEventListener("click",t=>{let o=t.target;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?o.classList.contains("menu")||o.closest(".menu")?e.style.transform="translate(0)":o.closest("menu")&&!o.classList.contains("menu")&&(e.style.transform="translate(-100%)"):o.classList.contains("menu")||o.closest(".menu")?e.classList.toggle("active-menu"):e.classList.contains("active-menu")&&!o.closest(".active-menu")?e.classList.toggle("active-menu"):o.closest(".active-menu")&&!o.classList.contains("active-menu")&&e.classList.toggle("active-menu")})};var r=()=>{let e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),o=document.querySelector(".service");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(o.addEventListener("click",t=>{t.target.classList.contains("popup-btn")&&(e.style.display="block")}),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"))||(e.style.display="none")})):(o.addEventListener("click",o=>{if(o.target.classList.contains("popup-btn")){e.style.display="block",t.style.top=`-${t.offsetHeight}px`;let o,n=-t.offsetHeight,r=()=>{o=requestAnimationFrame(r),(n+=10)<60?t.style.top=n+"px":cancelAnimationFrame(o)};requestAnimationFrame(r)}}),e.addEventListener("click",()=>{const o=t.offsetHeight+t.offsetTop;let n,r=t.offsetTop,a=event.target,s=()=>{if(n=requestAnimationFrame(s),r>-o)t.style.top=r+"px",r-=10;else{cancelAnimationFrame(n),e.style.display="none";let o=t.querySelectorAll(".form-name, .form-phone, .form-email"),r=t.querySelector(".toDel");o.forEach(e=>{e.value="",e.classList.remove("success"),e.classList.remove("error"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error")&&e.nextElementSibling.remove(),r&&r.remove()})}};a.classList.contains("popup-close")?requestAnimationFrame(s):(a=a.closest(".popup-content"))||requestAnimationFrame(s)}))};var a=()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".service-header-tab"))&&t.forEach((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})})};var s=()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content"),o=document.querySelector(".portfolio-dots");(()=>{for(let t=0;t<e.length;t++){let e=document.createElement("li");e.classList.add("dot"),o.appendChild(e)}})();let n=document.querySelectorAll(".dot");n[0].classList.add("dot-active");let r,a=0;const s=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},l=()=>{s(e,a,"portfolio-item-active"),s(n,a,"dot-active"),++a>=e.length&&(a=0),c(e,a,"portfolio-item-active"),c(n,a,"dot-active")},i=(e=3e3)=>{r=setInterval(l,e)};t.addEventListener("click",t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(s(e,a,"portfolio-item-active"),s(n,a,"dot-active"),o.matches("#arrow-right")?a++:o.matches("#arrow-left")?a--:o.matches(".dot")&&n.forEach((e,t)=>{e===o&&(a=t)}),a>=e.length&&(a=0),a<0&&(a=e.length-1),c(e,a,"portfolio-item-active"),c(n,a,"dot-active"))}),t.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)}),t.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()}),i(2e3)};var c=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),s=document.getElementById("total");t.addEventListener("change",t=>{const c=t.target;(c.matches("select")||c.matches("input"))&&(()=>{let t=0,c=1,l=1;const i=o.options[o.selectedIndex].value,u=+n.value;if(a.value>1?c+=(a.value-1)/10:a.value>=0&&a.value<1&&(c=0),""==r.value?l*=0:r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),i&&u&&(t=e*i*u*c*l),t>0){let e=0,o=setInterval(()=>{if(e>t)return clearInterval(o),void(s.textContent=Math.floor(t));s.textContent=e+=Math.pow(10,t.toString().length)/1e3},8)}else s.textContent=Math.floor(t)})()})};var l=()=>{let e,t=document.querySelector(".command");t.addEventListener("mouseover",t=>{e=t.target.src,t.target.src=t.target.dataset.img}),t.addEventListener("mouseout",t=>{t.target.src=e})};var i=()=>{document.querySelector(".calc-block").addEventListener("input",e=>{let t=e.target;t.matches("input")&&(t.value=t.value.replace(/\D/g,""))})};var u=()=>{const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("toDel"),t.style.cssText="margin-top: 10px !important",e.addEventListener("submit",e=>{e.preventDefault();let n=e.target;n.appendChild(t),t.innerHTML='<img src = "./images/Status/loadiiing.gif" width = "100" !important>';const r=new FormData(n);o(r).then(e=>{if(200!==e.status)throw new Error("status network");t.innerHTML='<img src = "./images/Status/Download-Success-PNG-Image.png" width = "100" !important>',n.querySelectorAll("input").forEach(e=>{e.value="",e.classList.remove("success")})}).catch(e=>{t.innerHTML='<img src = "./images/Status/error.png" width = "100" !important>',console.error(e)})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e})};var d=function(){document.querySelector("body").addEventListener("input",()=>{let e=event.target,t=e.id;(/name$/.test(t)||/message$/.test(t))&&(e.value=e.value.replace(/[^А-Яа-яёЁ\s]/gim,""))})};(e=>{let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=e=>e>0&&e<10?"0"+e:0==e?"00":e,a=setInterval(()=>{let s=(()=>{let t=new Date(e).getTime(),o=(new Date).getTime(),n=Math.floor((t-o)/1e3),r=Math.floor(n%60),a=Math.floor(n/60%60);return{timeRemaining:n,houres:Math.floor(n/60/60),minutes:a,seconds:r}})();s.timeRemaining>=0?(t.textContent=r(s.houres),o.textContent=r(s.minutes),n.textContent=r(s.seconds)):clearInterval(a)},1e3)})("11 16 2019 00:08:40"),n(),r(),a(),s(),c(100),l(),i(),u(),d()}]);