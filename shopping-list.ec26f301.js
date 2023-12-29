var e=globalThis,o={},i={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in i){var s=i[e];delete i[e];var r={id:e,exports:{}};return o[e]=r,s.call(r.exports,r,r.exports),r.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,o){i[e]=o},e.parcelRequired7c6=s),s.register;var r=s("3gP5N");s("5Q9Pd"),s("3WmGK"),s("8sdLw"),s("8h5e4");const t=document.querySelector(".shopping-list"),a=document.querySelector(".shopping-list-block"),n=async function(e){return console.log(e),t.innerHTML=e.map(({author:e,book_image:o,title:i,description:s,_id:r,buy_links:t,list_name:a})=>`
  <li class="shopping-lisg__item" id=${r}>
    <div class="books__wrapper">
      <img class="books__image" src="${o}"  alt="${s}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${i}</p>
      <p class="books__info-author">${e}</p>
      <p>${s}</p>
      <p>${t[0].name}</p>
      <p>${t[1].name}</p>
      <p>${t[4].name}</p>
      <p>${a}</p>
      

    </div>
  </li>
  `).join("")};(async()=>{a.hidden=!0;let e=JSON.parse(localStorage.getItem("shoppingListArray"));if(!e){a.hidden=!1,console.log("Shopping list EMPTY!!!");return}let o=e.map(async e=>(await (0,r.getBookByID)(e)).data);n(await Promise.all(o))})();
//# sourceMappingURL=shopping-list.ec26f301.js.map
