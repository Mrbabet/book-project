var e=globalThis,o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return o[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r),r.register;var a=r("3gP5N");r("5Q9Pd"),r("3WmGK"),r("8sdLw"),r("8h5e4");const i=document.querySelector(".shopping-list"),l=document.querySelector(".shopping-list-block");(async()=>{l.hidden=!0;let e=JSON.parse(localStorage.getItem("shoppingListArray"));if(!e){l.hidden=!1,console.log("Shopping list EMPTY!!!");return}let o=e.map(async e=>await (0,a.getBookByID)(e)),t=await Promise.all(o);i.innerHTML=t.map(e=>`<li>
        <p class="books-title">${e.data.title}</p>
        <p class="books-category">${e.data.list_name}</p>
        <p class="books__info-author">${e.data.author}</p>
      </li>`).join(""),console.log(t)})();
//# sourceMappingURL=shopping-list.32d3897b.js.map
