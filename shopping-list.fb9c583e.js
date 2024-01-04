var t=globalThis,e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,o.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o),o.register;var i=o("3gP5N");o("9npD5"),o("3WmGK"),o("iB7wN"),o("8h5e4");var s=o("58mXF");o("5cjDG"),o("j6rK8");var a=o("46SdE");o("3dylo");const l=document.querySelector(".shopping-list-items"),r=document.querySelector(".shopping-list-empty"),c=document.querySelector(".shopping-list-pagination"),d=document.querySelector(".first-page-btn"),p=document.querySelector(".previous-page-btn"),g=document.querySelector(".next-page-btn"),u=document.querySelector(".last-page-btn"),h=document.querySelector(".page-number-first"),m=document.querySelector(".page-number-second"),y=document.querySelector(".page-number-third"),b=document.querySelector(".page-number-more");let S=1,v=1,k=[],x=!1;const _=async function(t){return l.innerHTML=t.map(({author:t,book_image:e,title:n,description:o,_id:i,buy_links:s,list_name:a})=>`
  <li class="shopping-list_item" id=${i}>
    <div class="books__wrapper">
      <img class="books__image" src="${e}" alt="${o}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${n}</p>
      <p class="books__info-author">${t}</p>
      <p>${o}</p>
      <p>${s[0].name}</p>
      <p>${s[1].name}</p>
      <p>${s[4].name}</p>
      <p>${a}</p>
      <button class="trash-button" data-elementid=${i}>Trash</button>
    </div>
  </li>
  `).join("")},f=async(t,e)=>{if(!(k=JSON.parse(localStorage.getItem("shoppingListArray")))||0===k.length){S=0,c.style.display="none",r.style.display="block",l.innerHTML="",console.log("Shopping list EMPTY!!!");return}r.style.display="none";let n=Math.floor(k.length/e);t>(v=k.length%e==0?n:n+1)&&(t=v,S=v);let o=k.slice((t-1)*e,t*e).map(async t=>(await (0,i.getBookByID)(t)).data);_(await Promise.all(o))},L=()=>{sessionStorage.setItem("shoppingListPage",S),f(S,3),sessionStorage.setItem("shoppingListPage",S)},q=t=>{h.dataset.highlight=!1,m.dataset.highlight=!1,y.dataset.highlight=!1},C=(t=!0)=>{S<=0||(b.style.display="none",q(),y.style.display="none",v>S+2-1&&(b.style.display="block"),v<2&&(m.style.display="none"),!0!==t||x?(S>=1||x)&&(m.textContent=S,m.dataset.highlight=!0,h.textContent=S-1,parseInt(m.textContent)===v-1&&(b.style.display="block")):(h.textContent=S,h.dataset.highlight=!0,S>=1&&(m.textContent=S+1)),1<S&&S===v&&(h.textContent=S-1,m.textContent=S,q(),m.dataset.highlight=!0),1!==S||(b.style.display="none",v>S+2-1&&(b.style.display="block"),q(),h.textContent=S,h.dataset.highlight=!0,m.textContent=S+1,y.textContent=S+2))},E=t=>{x=S>t,S=t,L(),C(),x=!1};d.addEventListener("click",t=>{S<=1||(S=1,L(),C())}),p.addEventListener("click",t=>{S<=1||(--S,L(),C(!1))}),g.addEventListener("click",t=>{S>=v||(++S,L(),C())}),u.addEventListener("click",t=>{S!==v&&(S=v,L(),C())}),document.addEventListener("click",t=>{t.target.classList.contains("page-number-element")&&E(parseInt(t.target.textContent))}),document.addEventListener("click",t=>{t.target.classList.contains("trash-button")&&(k.splice(k.indexOf(t.target.dataset.elementid),1),localStorage.setItem("shoppingListArray",JSON.stringify(k)),L(),C())}),window.addEventListener("load",()=>{(0,a.onAuthStateChanged)(s.auth,t=>{t?(L(),C()):window.location.href="./"})});
//# sourceMappingURL=shopping-list.fb9c583e.js.map
