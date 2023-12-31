var e=globalThis,o={},i={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){i[e]=o},e.parcelRequired7c6=t),t.register;var a=t("3gP5N");t("9npD5"),t("3WmGK"),t("iB7wN"),t("8h5e4");var n=t("2AKVI"),s=t("3dylo"),r=t("46SdE");const p=(0,n.initializeApp)({apiKey:"AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU",authDomain:"book-project-8a976.firebaseapp.com",projectId:"book-project-8a976",storageBucket:"book-project-8a976.appspot.com",messagingSenderId:"595782127929",appId:"1:595782127929:web:e819e67d1654c476ec98e8"});(0,s.getFirestore)(p);const l=(0,r.getAuth)(),c=document.querySelector(".shopping-list"),d=document.querySelector(".shopping-list-block"),g=async function(e){return c.innerHTML=e.map(({author:e,book_image:o,title:i,description:t,_id:a,buy_links:n,list_name:s})=>`
  <li class="shopping-lisg__item" id=${a}>
    <div class="books__wrapper">
      <img class="books__image" src="${o}"  alt="${t}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${i}</p>
      <p class="books__info-author">${e}</p>
      <p>${t}</p>
      <p>${n[0].name}</p>
      <p>${n[1].name}</p>
      <p>${n[4].name}</p>
      <p>${s}</p>
      

    </div>
  </li>
  `).join("")},u=async()=>{d.hidden=!0;let e=JSON.parse(localStorage.getItem("shoppingListArray"));if(!e){d.hidden=!1,console.log("Shopping list EMPTY!!!");return}let o=e.map(async e=>(await (0,a.getBookByID)(e)).data);g(await Promise.all(o))};window.addEventListener("load",()=>{(0,r.onAuthStateChanged)(l,e=>{e?(u(),console.log("User is signed in:",e)):(alert("Nothing to display. Log in if you want to see book list"),console("Signed out"))})});
//# sourceMappingURL=shopping-list.ed8ffc86.js.map
