(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function s(l){let a=(l-o)/n;a>1&&(a=1);let i=e(a);t(i),a<1&&requestAnimationFrame(s)}))};(()=>{const t=document.querySelector(".btn-block.fancyboxModal"),n=document.querySelector(".header-modal"),o=document.querySelector(".overlay");t.addEventListener("click",(t=>{t.preventDefault(),window.innerWidth>768?(n.style.display="block",n.style.opacity=0,o.style.display="block",o.style.opacity=0,e({duration:1e3,timing:e=>e,draw(e){n.style.opacity=e,o.style.opacity=e}})):(n.style.display="block",o.style.display="block")})),n.addEventListener("click",(t=>{t.target.classList.contains("header-modal__close")&&(window.innerWidth>768?(e({duration:1e3,timing:e=>e,draw(e){n.style.opacity=1-e,o.style.opacity=1-e}}),setTimeout((()=>{n.style.display="none",o.style.display="none"}),1e3)):(n.style.display="none",o.style.display="none"))}))})(),(()=>{const t=document.querySelector(".services-modal"),n=document.querySelector(".overlay");document.querySelectorAll(".service-button").forEach((o=>{o.addEventListener("click",(o=>{o.preventDefault(),window.innerWidth>768?(t.style.display="block",t.style.opacity=0,n.style.display="block",n.style.opacity=0,e({duration:1e3,timing:e=>e,draw(e){t.style.opacity=e,n.style.opacity=e}})):(t.style.display="block",n.style.display="block")}))})),t.addEventListener("click",(o=>{o.target.classList.contains("services-modal__close")&&(window.innerWidth>768?(e({duration:1e3,timing:e=>e,draw(e){t.style.opacity=1-e,n.style.opacity=1-e}}),setTimeout((()=>{t.style.display="none",n.style.display="none"}),1e3)):(t.style.display="none",n.style.display="none"))}))})(),(e=>{const t=document.querySelectorAll(".count_1>span"),n=document.querySelectorAll(".count_2>span"),o=document.querySelectorAll(".count_3>span"),s=document.querySelectorAll(".count_4>span");let l=document.querySelectorAll(".countdown-text");const a=()=>{let e=(new Date("22 january 2022").getTime()-(new Date).getTime())/1e3;return{timeRemain:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60),days:Math.floor(e/60/60/24)}},i=()=>{let e=a();e.hours<10&&(e.hours="0"+e.hours),e.minutes<10&&(e.minutes="0"+e.minutes),e.seconds<10&&(e.seconds="0"+e.seconds),e.days<10&&(e.days="0"+e.days),t.forEach((t=>{t.textContent=e.days})),n.forEach((t=>{t.textContent=e.hours})),o.forEach((t=>{t.textContent=e.minutes})),s.forEach((t=>{t.textContent=e.seconds}))};(()=>{if(a().timeRemain>0)setInterval(i,1e3);else{t.forEach((e=>{e.textContent="00"})),n.forEach((e=>{e.textContent="00"})),o.forEach((e=>{e.textContent="00"})),s.forEach((e=>{e.textContent="00"}));let e="Акция закончилась!";l.forEach((t=>{t.innerHTML=e+t.innerHTML.substring(24)}))}})()})()})();