var e=globalThis,t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register;var i=o("3gP5N");o("9npD5"),o("3WmGK"),o("iB7wN"),o("8h5e4"),o("58mXF"),o("5cjDG");var a=o("2AKVI"),r=o("3dylo"),s=o("46SdE");const l=(0,a.initializeApp)({apiKey:"AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU",authDomain:"book-project-8a976.firebaseapp.com",projectId:"book-project-8a976",storageBucket:"book-project-8a976.appspot.com",messagingSenderId:"595782127929",appId:"1:595782127929:web:e819e67d1654c476ec98e8"});(0,r.getFirestore)(l);const d=(0,s.getAuth)(),c=document.querySelector(".shopping-list"),p=document.querySelector(".shopping-list-block"),g=document.querySelector(".first-page-btn"),h=document.querySelector(".previous-page-btn"),u=document.querySelector(".next-page-btn"),m=document.querySelector(".last-page-btn"),b=document.querySelector(".page-number-first"),x=document.querySelector(".page-number-second"),y=document.querySelector(".page-number-third"),C=document.querySelector(".page-number-more");let k=parseInt(localStorage.getItem("shoppingListPage")),S=1;k||(k=1);const v=async function(e){return c.innerHTML=e.map(({author:e,book_image:t,title:n,description:o,_id:i,buy_links:a,list_name:r})=>`
  <li class="shopping-lisg__item" id=${i}>
    <div class="books__wrapper">
      <img class="books__image" src="${t}"  alt="${o}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${n}</p>
      <p class="books__info-author">${e}</p>
      <p>${o}</p>
      <p>${a[0].name}</p>
      <p>${a[1].name}</p>
      <p>${a[4].name}</p>
      <p>${r}</p>
    </div>
  </li>
  `).join("")},_=async(e,t)=>{p.hidden=!0;let n=JSON.parse(localStorage.getItem("shoppingListArray"));if(!n){p.hidden=!1,console.log("Shopping list EMPTY!!!");return}let o=Math.floor(n.length/t);S=n.length%t==0?o:o+1,n.slice((e-1)*t,e*t);let a=n.map(async e=>(await (0,i.getBookByID)(e)).data);v(await Promise.all(a))},f=()=>{localStorage.setItem("shoppingListPage",k),_(k,3)},q=e=>{b.dataset.highlight=!1,x.dataset.highlight=!1,y.dataset.highlight=!1},I=(e=!0)=>{b.hidden=!1,x.hidden=!1,y.hidden=!1,C.hidden=!0,S>k+3-2&&(C.hidden=!1),q(),S<3&&(y.hidden=!0),!0===e?(b.textContent=k-1,x.textContent=k,x.dataset.highlight=!0,k>=1&&(x.textContent=k,y.textContent=k+1)):k>=1?(x.textContent=k,x.dataset.highlight=!0,b.textContent=k-1,y.textContent=k+1):(b.textContent=k,b.dataset.highlight=!0,x.textContent=k+1,y.textContent=k+2),2<k&&k===S&&(b.textContent=k-2,x.textContent=k-1,y.textContent=k,q(),y.dataset.highlight=!0),S>k+3&&(C.hidden=!1),1===k&&(q(),b.textContent=k,b.dataset.highlight=!0,x.textContent=k+1,y.textContent=k+2)},L=e=>{k=e,f(),I()};_(k,3),window.addEventListener("load",()=>{(0,s.onAuthStateChanged)(d,e=>{e?(_(k,3),I(),console.log("User is signed in:",e)):(alert("Nothing to display. Log in if you want to see book list"),console("Signed out"))})}),g.addEventListener("click",e=>{1!==k&&(k=1,f(),I())}),h.addEventListener("click",e=>{k<=1||(--k,f(),I(!1))}),u.addEventListener("click",e=>{k>=S||(++k,f(),I())}),m.addEventListener("click",e=>{k!==S&&(k=S,f(),I())}),document.addEventListener("click",e=>{e.target.classList.contains("page-number-element")&&L(parseInt(e.target.textContent))});
//# sourceMappingURL=shopping-list.7f753702.js.map