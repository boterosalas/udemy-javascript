const miModulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],l=["2","3","4","5","6","7","8","9","10","A","J","Q","K"];let n=[];const a=document.querySelector("#btnPedir"),r=document.querySelector("#btnDetener"),o=document.querySelector("#btnNuevo"),d=document.querySelectorAll("small"),s=document.querySelectorAll(".divCartas"),c=(t=2)=>{e=i(),n=[];for(let e=0;e<t;e++)n.push(0);d.forEach(e=>e.innerText=0),s.forEach(e=>e.innerHTML=""),a.disabled=!1,r.disabled=!1},i=()=>{e=[];for(let n of l)for(let l of t)e.push(`${n}${l}`);return _.shuffle(e)},u=()=>e.pop()||"No hay más cartas en el deck",g=(e,t)=>(n[t]=n[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"==t?11:10:parseInt(t)})(e),d[t].innerText=n[t],n[t]),m=(e,t)=>{const l=document.createElement("img");l.src=`assets/cartas/${e}.png`,l.classList.add("carta"),s[t].append(l)},b=e=>{let t=0;do{const e=u();t=g(e,n.length-1),m(e,n.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=n;setTimeout(()=>{let e,t=0;for(let l=0;l<n.length-1;l++)n[l]>t&&n[l]<=21&&(t=n[l],e=l);console.log({mayor:t,indice:e}),t===n[n.length-1]?alert("Empate"):n[n.length-1]>21||t>n[n.length-1]?alert(`Ha ganado el Jugador ${e+1}`):alert("Ha ganado la computadora")},1e3)})()};return a.addEventListener("click",()=>{const e=u(),t=g(e,0);m(e,0),t>21?(a.disabled=!0,r.disabled=!0,b(t)):21===t&&(a.disabled=!0,r.disabled=!0,b(t))}),r.addEventListener("click",()=>{a.disabled=!0,r.disabled=!0;let e=(()=>{let e=0;for(const t of n)e=t>e&&t<=21?t:e;return e})();b(e)}),o.addEventListener("click",()=>{c(),a.disabled=!1,r.disabled=!1}),{inicializarJuego:c}})();