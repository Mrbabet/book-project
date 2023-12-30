var o=globalThis,e={},i={},t=o.parcelRequired7c6;null==t&&((t=function(o){if(o in e)return e[o].exports;if(o in i){var t=i[o];delete i[o];var n={id:o,exports:{}};return e[o]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(o,e){i[o]=e},o.parcelRequired7c6=t),t.register;var n=t("3gP5N");t("9npD5"),t("3WmGK"),t("iB7wN"),t("8h5e4");const a=document.querySelector(".shopping-list"),s=document.querySelector(".shopping-list-block"),r=async function(o){return console.log(o),a.innerHTML=o.map(({author:o,book_image:e,title:i,description:t,_id:n,buy_links:a,list_name:s})=>`
  <li class="shopping-lisg__item" id=${n}>
    <div class="books__wrapper">
      <img class="books__image" src="${e}"  alt="${t}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${i}</p>
      <p class="books__info-author">${o}</p>
      <p>${t}</p>
      <p>${a[0].name}</p>
      <p>${a[1].name}</p>
      <p>${a[4].name}</p>
      <p>${s}</p>
      

    </div>
  </li>
  `).join("")},l=async()=>{s.hidden=!0;let o=JSON.parse(localStorage.getItem("shoppingListArray"));if(!o){s.hidden=!1,console.log("Shopping list EMPTY!!!");return}let e=o.map(async o=>(await (0,n.getBookByID)(o)).data);r(await Promise.all(e))};window.addEventListener("load",()=>{onAuthStateChanged(auth,o=>{o?l():alert("Nothing to display. Log in if you want to see book list")})});
//# sourceMappingURL=shopping-list.417de724.js.map
