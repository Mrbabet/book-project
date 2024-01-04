var t=globalThis,e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,o.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o),o.register;var i=o("3gP5N");o("9npD5"),o("3WmGK"),o("iB7wN"),o("8h5e4");var s=o("58mXF");o("5cjDG"),o("j6rK8");var a=o("46SdE");const l=document.querySelector(".shopping-list-items"),r=document.querySelector(".shopping-list-empty"),c=document.querySelector(".shopping-list-pagination"),d=document.querySelector(".first-page-btn"),p=document.querySelector(".previous-page-btn"),g=document.querySelector(".next-page-btn"),u=document.querySelector(".last-page-btn"),h=document.querySelector(".page-number-first"),y=document.querySelector(".page-number-second"),m=document.querySelector(".page-number-third"),b=document.querySelector(".page-number-more");let S=1,k=1,v=[],x=!1;const L=async function(t){return l.innerHTML=t.map(({author:t,book_image:e,title:n,description:o,_id:i,buy_links:s,list_name:a})=>`
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
  `).join("")},_=async(t,e)=>{if(!(v=JSON.parse(localStorage.getItem("shoppingListArray")))||0===v.length){S=0,c.style.display="none",r.style.display="block",l.innerHTML="",console.log("Shopping list EMPTY!!!");return}r.style.display="none";let n=Math.floor(v.length/e);t>(k=v.length%e==0?n:n+1)&&(t=k,S=k);let o=v.slice((t-1)*e,t*e).map(async t=>(await (0,i.getBookByID)(t)).data);L(await Promise.all(o))},f=()=>{sessionStorage.setItem("shoppingListPage",S),_(S,3),sessionStorage.setItem("shoppingListPage",S)},q=t=>{h.dataset.highlight=!1,y.dataset.highlight=!1,m.dataset.highlight=!1},C=(t=!0)=>{S<=0||(b.style.display="none",q(),m.style.display="none",k>S+2-1&&(b.style.display="block"),k<2&&(y.style.display="none"),!0!==t||x?(S>=1||x)&&(y.textContent=S,y.dataset.highlight=!0,h.textContent=S-1,parseInt(y.textContent)===k-1&&(b.style.display="block")):(h.textContent=S,h.dataset.highlight=!0,S>=1&&(y.textContent=S+1)),1<S&&S===k&&(h.textContent=S-1,y.textContent=S,q(),y.dataset.highlight=!0),1!==S||(b.style.display="none",k>S+2-1&&(b.style.display="block"),q(),h.textContent=S,h.dataset.highlight=!0,y.textContent=S+1,m.textContent=S+2))},E=t=>{x=S>t,S=t,f(),C(),x=!1};d.addEventListener("click",t=>{S<=1||(S=1,f(),C())}),p.addEventListener("click",t=>{S<=1||(--S,f(),C(!1))}),g.addEventListener("click",t=>{S>=k||(++S,f(),C())}),u.addEventListener("click",t=>{S!==k&&(S=k,f(),C())}),document.addEventListener("click",t=>{t.target.classList.contains("page-number-element")&&E(parseInt(t.target.textContent))}),document.addEventListener("click",t=>{t.target.classList.contains("trash-button")&&(v.splice(v.indexOf(t.target.dataset.elementid),1),localStorage.setItem("shoppingListArray",JSON.stringify(v)),f(),C())}),window.addEventListener("load",()=>{(0,a.onAuthStateChanged)(s.auth,t=>{t?(f(),C()):alert("Nothing to display. Log in if you want to see book list")})});
//# sourceMappingURL=shopping-list.98439953.js.map
