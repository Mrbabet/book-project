var e=globalThis,o={},i={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var r=i[e];delete i[e];var s={id:e,exports:{}};return o[e]=s,r.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){i[e]=o},e.parcelRequired7c6=r),r.register;var s=r("3gP5N");r("9npD5"),r("3WmGK"),r("iB7wN"),r("8h5e4");const n=document.querySelector(".shopping-list"),t=document.querySelector(".shopping-list-block"),a=async function(e){return console.log(e),n.innerHTML=e.map(({author:e,book_image:o,title:i,description:r,_id:s,buy_links:n,list_name:t})=>`
  <li class="shopping-lisg__item" id=${s}>
    <div class="books__wrapper">
      <img class="books__image" src="${o}"  alt="${r}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${i}</p>
      <p class="books__info-author">${e}</p>
      <p>${r}</p>
      <p>${n[0].name}</p>
      <p>${n[1].name}</p>
      <p>${n[4].name}</p>
      <p>${t}</p>
      

    </div>
  </li>
  `).join("")};(async()=>{t.hidden=!0;let e=JSON.parse(localStorage.getItem("shoppingListArray"));if(!e){t.hidden=!1,console.log("Shopping list EMPTY!!!");return}let o=e.map(async e=>(await (0,s.getBookByID)(e)).data);a(await Promise.all(o))})();
//# sourceMappingURL=shopping-list.f830e57b.js.map
