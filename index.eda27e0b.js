let e,t,i,n,r,s,o,a,l,h,c,u,d;var p,f,g,m,_,y,v,w,b=globalThis,I={},T={},C=b.parcelRequired7c6;async function E(e){return'<li class="category-item js-current-category" data-category="All Categories">All Categories</li>'+e.data.map(({list_name:e})=>`<li class="category-item" data-category="${e}">${e}</li>`).join("")}async function S(e){return await Promise.all(e.map(async({list_name:e,books:t})=>`
    <div class="book-category-container">
    <h3 class="js-book-category">${e}</h3>
    <ul class='books-list'>${await R(t)}</ul>
    <button class="button see-more" data-js="${e}" aria-label="See more">See more</button>
    </div>
    `))}function k(){let e=window.screen.width;return e<768?"mobile":e<1280?"tablet":e<1440?"desktop":"desktopXl"}null==C&&((C=function(e){if(e in I)return I[e].exports;if(e in T){var t=T[e];delete T[e];var i={id:e,exports:{}};return I[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){T[e]=t},b.parcelRequired7c6=C),C.register,C("3gP5N");const R=async function(e){return"mobile"===k()?P(e.slice(0,1)):"tablet"===k()?P(e.slice(0,3)):"desktop"===k()?P(e.slice(0,4)):P(e)};async function N(e,t){let i=e.split(" "),n=Math.ceil(i.length/2),r=i.slice(0,n).join(" "),s=i.slice(n).join(" ");return`
  <h2 class="books-title">${r} <span class="books-colortitle">${s}</span></h2>
  <ul class="books-list">${await P(t)}</ul>
  <button class="button all-categories__btn" data-js="All Categories" aria-label="All categories">All Categories</button>
`}async function P(e){return e.map(({author:e,book_image:t,title:i,description:n,_id:r})=>`
    <li class="books__item" id=${r}>
      <div class="books__wrapper">
        <img class="books__image" src="${t}"  alt="${n}" loading="lazy"  />
        <div class="books__overlay">
          <p class="books__overlay-text">QUICK VIEW</p>
        </div>
      </div>
      <div class="books__info">
        <p class="books__info-title">${i}</p>
        <p class="books__info-author">${e}</p>
      </div>
    </li>
    `).join("")}async function A(e){let t=document.querySelector(".js-current-category");t&&t.classList.remove("js-current-category");let i=document.querySelector(`li[data-category="${e}"]`);i?i.classList.add("js-current-category"):console.error(`Element with category "${e}" not found.`)}var O=(C("3gP5N"),C("3gP5N"));const L=document.getElementById("bookImage"),D=document.getElementById("bookTitle"),x=document.getElementById("bookAuthor"),M=document.getElementById("bookDescription"),U=document.querySelector(".link-amazon"),F=document.querySelector(".link-apple");async function j(e){let{data:t}=await (0,O.getBookByID)(e);L.attributes.src.value=t.book_image,D.textContent=t.title,x.textContent=t.author,M.insertAdjacentHTML("beforeend",t.description),console.log(t.description),U.attributes.href.value=t.buy_links[0].url,F.attributes.href.value=t.buy_links[1].url;let i=document.getElementById("toggleShoppingList"),n=JSON.parse(localStorage.getItem("shoppingListArray")),r=!1;n&&(r=-1!==n.indexOf(e)),i.textContent=r?"Remove from the shopping list":"Add to the shopping list",i.onclick=()=>{n?((r=-1!==n.indexOf(e))?(n.splice(n.indexOf(e),1),localStorage.setItem("shoppingListArray",JSON.stringify(n)),i.textContent="Add to the shopping list"):(n.push(e),localStorage.setItem("shoppingListArray",JSON.stringify(n)),i.textContent="Remove from the shopping list"),0===n.length&&localStorage.removeItem("shoppingListArray")):(i.textContent="Remove from the shopping list",(n=[]).push(e),localStorage.setItem("shoppingListArray",JSON.stringify(n)))}}function q(e){let t=document.querySelector("[data-modal]");document.querySelector("[data-modal-window]");let i=document.querySelector("[data-modal-close]");e.target.closest("[data-modal-close]")===i&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",q),document.body.removeEventListener("keyup",H))}function H(e){let t=document.querySelector("[data-modal]");27==e.keyCode&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",q),document.body.removeEventListener("keyup",H))}function V(){window.scrollTo({top:0,left:0,behavior:"smooth"})}const B=document.querySelector(".books-container"),W=document.querySelector(".category-list");!async function(){try{let e=await (0,O.getCategoryList)();W.insertAdjacentHTML("beforeend",await E(e))}catch(e){}try{let e=await (0,O.getTopBooks)();B.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>'),B.insertAdjacentHTML("beforeend",(await S(e.data)).join(""))}catch(e){}}();const z=async function(e){if(e.preventDefault(),e.target.classList.contains("category-item")){if(B.innerHTML="","All Categories"===e.target.dataset.category){try{let t=await (0,O.getTopBooks)();B.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>'),B.insertAdjacentHTML("beforeend",(await S(t.data)).join("")),A(e.target.dataset.category)}catch(e){}return}try{let{data:t}=await (0,O.getOneCategory)(e.target.dataset.category);B.insertAdjacentHTML("beforeend",await N(e.target.dataset.category,t)),A(e.target.dataset.category)}catch(e){}}},$=async function(e){e.preventDefault();let t=e.target.closest(".books__item");t&&(j(t.attributes.id.value),function(){let e=document.querySelector("[data-modal]");e.classList.add("is-active"),document.body.classList.add("no-scroll"),e.addEventListener("click",q),document.body.addEventListener("keyup",H)}());let i=e.target.classList.contains("see-more"),n=e.target.classList.contains("all-categories__btn"),r=e.target.dataset.js;if(i){V(),B.innerHTML="";try{let{data:e}=await (0,O.getOneCategory)(r);B.insertAdjacentHTML("beforeend",await N(r,e)),A(r)}catch(e){}}else if(n){V(),B.innerHTML="";try{B.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>');let e=await (0,O.getTopBooks)();B.insertAdjacentHTML("beforeend",(await S(e.data)).join("")),A(r)}catch(e){}}};W.addEventListener("click",z),B.addEventListener("click",$),C("9npD5"),C("3WmGK"),C("iB7wN"),C("8h5e4");const K=document.querySelector(".form-wrapper"),G=document.querySelector(".sign-up"),Y=document.querySelector(".au-modal-close");document.querySelector("#name"),document.querySelector('input[type="email"]'),document.querySelector('input[type="password"]'),K.style.display="none",G.onclick=()=>void(K.style.display="block"),Y.onclick=()=>void(K.style.display="none");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X={},J=X={};function Q(){throw Error("setTimeout has not been defined")}function Z(){throw Error("clearTimeout has not been defined")}function ee(e){if(rw===setTimeout)return setTimeout(e,0);if((rw===Q||!rw)&&setTimeout)return rw=setTimeout,setTimeout(e,0);try{return rw(e,0)}catch(t){try{return rw.call(null,e,0)}catch(t){return rw.call(this,e,0)}}}!function(){try{rw="function"==typeof setTimeout?setTimeout:Q}catch(e){rw=Q}try{rb="function"==typeof clearTimeout?clearTimeout:Z}catch(e){rb=Z}}();var et=[],ei=!1,en=-1;function er(){ei&&rI&&(ei=!1,rI.length?et=rI.concat(et):en=-1,et.length&&es())}function es(){if(!ei){var e=ee(er);ei=!0;for(var t=et.length;t;){for(rI=et,et=[];++en<t;)rI&&rI[en].run();en=-1,t=et.length}rI=null,ei=!1,function(e){if(rb===clearTimeout)return clearTimeout(e);if((rb===Z||!rb)&&clearTimeout)return rb=clearTimeout,clearTimeout(e);try{rb(e)}catch(t){try{return rb.call(null,e)}catch(t){return rb.call(this,e)}}}(e)}}function eo(e,t){this.fun=e,this.array=t}function ea(){}J.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];et.push(new eo(e,t)),1!==et.length||ei||ee(es)},eo.prototype.run=function(){this.fun.apply(null,this.array)},J.title="browser",J.browser=!0,J.env={},J.argv=[],J.version="",J.versions={},J.on=ea,J.addListener=ea,J.once=ea,J.off=ea,J.removeListener=ea,J.removeAllListeners=ea,J.emit=ea,J.prependListener=ea,J.prependOnceListener=ea,J.listeners=function(e){return[]},J.binding=function(e){throw Error("process.binding is not supported")},J.cwd=function(){return"/"},J.chdir=function(e){throw Error("process.chdir is not supported")},J.umask=function(){return 0};const el={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},eh=function(e,t){if(!e)throw ec(t)},ec=function(e){return Error("Firebase Database ("+el.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},eu=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},ed=function(e){let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),n.push(i[h],i[c],i[u],i[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ed(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],s=t<e.length?i[e.charAt(t)]:0,o=++t<e.length?i[e.charAt(t)]:64,a=++t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new ef;let l=r<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ef extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(e){let t=eu(e);return ep.encodeByteArray(t,!0)},em=function(e){return eg(e).replace(/\./g,"")},e_=function(e){try{return ep.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},ey=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==b)return b;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,ev=()=>{if(void 0===X||void 0===X.env)return;let e=void 0;if(e)return JSON.parse(e)},ew=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&e_(e[1]);return t&&JSON.parse(t)},eb=()=>{try{return ey()||ev()||ew()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eI=e=>{var t,i;return null===(i=null===(t=eb())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},eT=e=>{let t=eI(e);if(!t)return;let i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),n]:[t.substring(0,i),n]},eC=()=>{var e;return null===(e=eb())||void 0===e?void 0:e.config},eE=e=>{var t;return null===(t=eb())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function eR(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ek())}function eN(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function eP(){return!0===el.NODE_CLIENT||!0===el.NODE_ADMIN}class eA extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,eA.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eO.prototype.create)}}class eO{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(eL,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new eA(n,o,i)}}const eL=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(e){return JSON.parse(e)}function ex(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=function(e){let t={},i={},n={},r="";try{let s=e.split(".");t=eD(e_(s[0])||""),i=eD(e_(s[1])||""),r=s[2],n=i.d||{},delete i.d}catch(e){}return{header:t,claims:i,data:n,signature:r}},eU=function(e){let t=eM(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},eF=function(e){let t=eM(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ej(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function eq(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function eH(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function eV(e,t,i){let n={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=t.call(i,e[r],r,e));return n}function eB(e,t){if(e===t)return!0;let i=Object.keys(e),n=Object.keys(t);for(let r of i){if(!n.includes(r))return!1;let i=e[r],s=t[r];if(eW(i)&&eW(s)){if(!eB(i,s))return!1}else if(i!==s)return!1}for(let e of n)if(!i.includes(e))return!1;return!0}function eW(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ez(e){let t=[];for(let[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function e$(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}function eK(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let i,n;t||(t=0);let r=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)r[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)r[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),n=1518500249):(i=o^a^l,n=1859775393):e<60?(i=o&a|l&(o|a),n=2400959708):(i=o^a^l,n=3395469782);let t=(s<<5|s>>>27)+i+h+n+r[e]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let i=t-this.blockSize,n=0,r=this.buf_,s=this.inbuf_;for(;n<t;){if(0===s)for(;n<=i;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(r[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}else for(;n<t;)if(r[s]=e[n],++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let i=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[i]=this.chain_[t]>>n&255,++i;return e}}class eY{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(n.next=eX),void 0===n.error&&(n.error=eX),void 0===n.complete&&(n.complete=eX);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eX(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eJ=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r>=55296&&r<=56319){let t=r-55296;eh(++n<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(n)-56320)}r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:(r<65536?t[i++]=r>>12|224:(t[i++]=r>>18|240,t[i++]=r>>12&63|128),t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},eQ=function(e){let t=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eZ(e){return e&&e._delegate?e._delegate:e}class e0{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new eS;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:e1})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e=e1){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=e1){return this.instances.has(e)}getOptions(e=e1){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[e,t]of this.instancesDeferred.entries())i===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===e1?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}return i||null}normalizeInstanceIdentifier(e=e1){return this.component?this.component.multipleInstances?e:e1:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new e2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e9=[];(ry=rT||(rT={}))[ry.DEBUG=0]="DEBUG",ry[ry.VERBOSE=1]="VERBOSE",ry[ry.INFO=2]="INFO",ry[ry.WARN=3]="WARN",ry[ry.ERROR=4]="ERROR",ry[ry.SILENT=5]="SILENT";const e6={debug:rT.DEBUG,verbose:rT.VERBOSE,info:rT.INFO,warn:rT.WARN,error:rT.ERROR,silent:rT.SILENT},e5=rT.INFO,e3={[rT.DEBUG]:"log",[rT.VERBOSE]:"log",[rT.INFO]:"info",[rT.WARN]:"warn",[rT.ERROR]:"error"},e7=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=e3[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class e8{constructor(e){this.name=e,this._logLevel=e5,this._logHandler=e7,this._userLogHandler=null,e9.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in rT))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?e6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,rT.DEBUG,...e),this._logHandler(this,rT.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,rT.VERBOSE,...e),this._logHandler(this,rT.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,rT.INFO,...e),this._logHandler(this,rT.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,rT.WARN,...e),this._logHandler(this,rT.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,rT.ERROR,...e),this._logHandler(this,rT.ERROR,...e)}}const te=(e,t)=>t.some(t=>e instanceof t),tt=new WeakMap,ti=new WeakMap,tn=new WeakMap,tr=new WeakMap,ts=new WeakMap;let to={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return ti.get(e);if("objectStoreNames"===t)return e.objectStoreNames||tn.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ta(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ta(i){var n;if(i instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ta(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&tt.set(t,e)}).catch(()=>{}),ts.set(t,e),t}(i);if(tr.has(i))return tr.get(i);let r="function"==typeof(n=i)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(tl(this),e),ta(tt.get(this))}:function(...e){return ta(n.apply(tl(this),e))}:function(e,...t){let i=n.call(tl(this),e,...t);return tn.set(i,e.sort?e.sort():[e]),ta(i)}:(n instanceof IDBTransaction&&function(e){if(ti.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});ti.set(e,t)}(n),te(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,to):n;return r!==i&&(tr.set(i,r),ts.set(r,i)),r}const tl=e=>ts.get(e),th=["get","getKey","getAll","getAllKeys","count"],tc=["put","add","delete","clear"],tu=new Map;function td(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tu.get(t))return tu.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=tc.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||th.includes(i)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return tu.set(t,s),s}to={...r_=to,get:(e,t,i)=>td(e,t)||r_.get(e,t,i),has:(e,t)=>!!td(e,t)||r_.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const tf="@firebase/app",tg="0.9.25",tm=new e8("@firebase/app"),t_="[DEFAULT]",ty={[tf]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},tv=new Map,tw=new Map;function tb(e){let t=e.name;if(tw.has(t))return tm.debug(`There were multiple attempts to register component ${t}.`),!1;for(let i of(tw.set(t,e),tv.values()))!function(e,t){try{e.container.addComponent(t)}catch(i){tm.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}function tI(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}const tT=new eO("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new e0("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tT.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="10.7.1";function tS(e,t={}){let i=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:t_,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw tT.create("bad-app-name",{appName:String(r)});if(i||(i=eC()),!i)throw tT.create("no-options");let s=tv.get(r);if(s){if(eB(i,s.options)&&eB(n,s.config))return s;throw tT.create("duplicate-app",{appName:r})}let o=new e4(r);for(let e of tw.values())o.addComponent(e);let a=new tC(i,n,o);return tv.set(r,a),a}function tk(e=t_){let t=tv.get(e);if(!t&&e===t_&&eC())return tS();if(!t)throw tT.create("no-app",{appName:e});return t}function tR(e,t,i){var n;let r=null!==(n=ty[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tm.warn(e.join(" "));return}tb(new e0(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const tN="firebase-heartbeat-store";let tP=null;function tA(){return tP||(tP=(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=ta(o);return n&&o.addEventListener("upgradeneeded",e=>{n(ta(o.result),e.oldVersion,e.newVersion,ta(o.transaction),e)}),i&&o.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tN)}}).catch(e=>{throw tT.create("idb-open",{originalErrorMessage:e.message})})),tP}async function tO(e){try{let t=await tA();return await t.transaction(tN).objectStore(tN).get(tD(e))}catch(e){if(e instanceof eA)tm.warn(e.message);else{let t=tT.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});tm.warn(t.message)}}}async function tL(e,t){try{let i=(await tA()).transaction(tN,"readwrite"),n=i.objectStore(tN);await n.put(t,tD(e)),await i.done}catch(e){if(e instanceof eA)tm.warn(e.message);else{let t=tT.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});tm.warn(t.message)}}}function tD(e){return`${e.name}!${e.options.appId}`}class tx{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tU(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=tM();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tM(),{heartbeatsToSend:i,unsentEntries:n}=function(e,t=1024){let i=[],n=e.slice();for(let r of e){let e=i.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),tF(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),tF(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),r=em(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function tM(){return new Date().toISOString().substring(0,10)}class tU{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await tO(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tL(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tL(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function tF(e){return em(JSON.stringify({version:2,heartbeats:e})).length}function tj(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}function tq(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}tb(new e0("platform-logger",e=>new tp(e),"PRIVATE")),tb(new e0("heartbeat",e=>new tx(e),"PRIVATE")),tR(tf,tg,""),tR(tf,tg,"esm2017"),tR("fire-js",""),tR("firebase","10.7.1","app"),"function"==typeof SuppressedError&&SuppressedError;const tH=new eO("auth","Firebase",tq()),tV=new e8("@firebase/auth");function tB(e,...t){tV.logLevel<=rT.ERROR&&tV.error(`Auth (${tE}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tW(e,...t){throw t$(e,...t)}function tz(e,...t){return t$(e,...t)}function t$(e,...t){if("string"!=typeof e){let i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return tH.create(e,...t)}function tK(e,t,...i){if(!e)throw t$(t,...i)}function tG(e){let t="INTERNAL ASSERTION FAILED: "+e;throw tB(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tY(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tX(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||tG("Short delay should be less than long delay!"),this.isMobile=eR()||eN()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===tX()||"https:"===tX()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tQ(e,t){e.emulator||tG("Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void tG("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void tG("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void tG("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},t1=new tJ(3e4,6e4);function t2(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function t4(e,t,i,n,r={}){return t9(e,r,async()=>{let r={},s={};n&&("GET"===t?s=n:r={body:JSON.stringify(n)});let o=ez(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),tZ.fetch()(t5(e,e.config.apiHost,i,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function t9(e,t,i){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},t0),t);try{let t=new t3(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();let s=await r.json();if("needConfirmation"in s)throw t7(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{let[t,i]=(r.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw t7(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw t7(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw t7(e,"user-disabled",s);let o=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw new eO("auth","Firebase",Object.assign(Object.assign({},tq()),{[o]:i})).create(o,{appName:e.name});tW(e,o)}}catch(t){if(t instanceof eA)throw t;tW(e,"network-request-failed",{message:String(t)})}}async function t6(e,t,i,n,r={}){let s=await t4(e,t,i,n,r);return"mfaPendingCredential"in s&&tW(e,"multi-factor-auth-required",{_serverResponse:s}),s}function t5(e,t,i,n){let r=`${t}${i}?${n}`;return e.config.emulator?tQ(e.config,r):`${e.config.apiScheme}://${r}`}class t3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(tz(this.auth,"network-request-failed")),t1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function t7(e,t,i){let n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);let r=tz(e,t,n);return r.customData._tokenResponse=i,r}function t8(e){return void 0!==e&&void 0!==e.enterprise}class ie{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function it(e,t){return t4(e,"GET","/v2/recaptchaConfig",t2(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(e,t){return t4(e,"POST","/v1/accounts:delete",t)}async function ir(e,t){return t4(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function io(e,t=!1){let i=eZ(e),n=await i.getIdToken(t),r=il(n);tK(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");let s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:is(ia(r.auth_time)),issuedAtTime:is(ia(r.iat)),expirationTime:is(ia(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function ia(e){return 1e3*Number(e)}function il(e){let[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return tB("JWT malformed, contained fewer than 3 sections"),null;try{let e=e_(i);if(!e)return tB("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return tB("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof eA&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function id(e){var t;let i=e.auth,n=await e.getIdToken(),r=await ih(e,ir(i,{idToken:n}));tK(null==r?void 0:r.users.length,i,"internal-error");let s=r.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,i=tj(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],a=[...e.providerData.filter(e=>!o.some(t=>t.providerId===e.providerId)),...o],l=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new iu(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&h})}async function ip(e){let t=eZ(e);await id(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(e,t){let i=await t9(e,{},async()=>{let i=ez({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,s=t5(e,n,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",tZ.fetch()(s,{method:"POST",headers:o,body:i})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function im(e,t){return t4(e,"POST","/v2/accounts:revokeToken",t2(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){tK(e.idToken,"internal-error"),tK(void 0!==e.idToken,"internal-error"),tK(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=il(e);return tK(t,"internal-error"),tK(void 0!==t.exp,"internal-error"),tK(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(tK(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:n,expiresIn:r}=await ig(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new i_;return i&&(tK("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),n&&(tK("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(tK("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new i_,this.toJSON())}_performRefresh(){return tG("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(e,t){tK("string"==typeof e||void 0===e,"internal-error",{appName:t})}class iv{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=tj(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ic(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new iu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await ih(this,this.stsTokenManager.getToken(this.auth,e));return tK(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return io(this,e)}reload(){return ip(this)}_assign(e){this!==e&&(tK(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new iv(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){tK(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await id(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await ih(this,ii(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,o,a,l,h;let c=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:y,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:I}=t;tK(y&&I,e,"internal-error");let T=i_.fromJSON(this.name,I);tK("string"==typeof y,e,"internal-error"),iy(c,e.name),iy(u,e.name),tK("boolean"==typeof v,e,"internal-error"),tK("boolean"==typeof w,e,"internal-error"),iy(d,e.name),iy(p,e.name),iy(f,e.name),iy(g,e.name),iy(m,e.name),iy(_,e.name);let C=new iv({uid:y,auth:e,email:u,emailVerified:v,displayName:c,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:_});return b&&Array.isArray(b)&&(C.providerData=b.map(e=>Object.assign({},e))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,i=!1){let n=new i_;n.updateFromServerResponse(t);let r=new iv({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await id(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Map;function ib(e){e instanceof Function||tG("Expected a class definition");let t=iw.get(e);return t?t instanceof e||tG("Instance stored in cache mismatched with class"):(t=new e,iw.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(e,t,i){return`firebase:${e}:${t}:${i}`}iI.type="NONE";class iC{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:n,name:r}=this.auth;this.fullUserKey=iT(this.userKey,n.apiKey,r),this.fullPersistenceKey=iT("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?iv._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new iC(ib(iI),e,i);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=n[0]||ib(iI),s=iT(i,e.config.apiKey,e.name),o=null;for(let i of t)try{let t=await i._get(s);if(t){let n=iv._fromJSON(e,t);i!==r&&(o=n),r=i;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length&&(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new iC(r,e,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(iN(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(iS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(iA(t))return"Blackberry";if(iO(t))return"Webos";if(ik(t))return"Safari";if((t.includes("chrome/")||iR(t))&&!t.includes("edge/"))return"Chrome";if(iP(t))return"Android";let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"}function iS(e=ek()){return/firefox\//i.test(e)}function ik(e=ek()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function iR(e=ek()){return/crios\//i.test(e)}function iN(e=ek()){return/iemobile/i.test(e)}function iP(e=ek()){return/android/i.test(e)}function iA(e=ek()){return/blackberry/i.test(e)}function iO(e=ek()){return/webos/i.test(e)}function iL(e=ek()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function iD(e=ek()){return iL(e)||iP(e)||iO(e)||iA(e)||/windows phone/i.test(e)||iN(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(e,t=[]){let i;switch(e){case"Browser":i=iE(ek());break;case"Worker":i=`${iE(ek())}-${e}`;break;default:i=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${tE}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=t=>new Promise((i,n)=>{try{let n=e(t);i(n)}catch(e){n(e)}});i.onAbort=t,this.queue.push(i);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iU(e,t={}){return t4(e,"GET","/v2/passwordPolicy",t2(e,t))}class iF{constructor(e){var t,i,n,r;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,n,r,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(i=a.meetsMaxPasswordLength)||void 0===i||i),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let i;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ij{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iq(this),this.idTokenSubscription=new iq(this),this.beforeStateQueue=new iM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tH,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ib(t)),this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await iC.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(null==o?void 0:o.user)&&(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(tK(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await id(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?eZ(e):null;return t&&tK(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&tK(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ib(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new iF(await iU(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eO("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await im(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ib(e)||this._popupRedirectResolver;tK(t,this,"argument-error"),this.redirectPersistenceManager=await iC.create(this,[ib(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(tK(o,this,"internal-error"),o.then(()=>{s||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,i,n);return()=>{s=!0,r()}}{let i=e.addObserver(t);return()=>{s=!0,i()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return tK(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ix(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){tV.logLevel<=rT.WARN&&tV.warn(`Auth (${tE}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class iq{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let i=new eY(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return tK(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iH(e){return new Promise((t,i)=>{var n,r;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=tz("internal-error");t.customData=e,i(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(s)})}function iV(e){return`__${e}${Math.floor(1e6*Math.random())}`}class iB{constructor(e){this.type="recaptcha-enterprise",this.auth=eZ(e)}async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{it(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new ie(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function n(t,i,n){let r=window.grecaptcha;t8(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{i(this.auth).then(i=>{if(!t&&t8(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}iH("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function iW(e,t,i,n=!1){let r;let s=new iB(e);try{r=await s.verify(i)}catch(e){r=await s.verify(i,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function iz(e,t,i,n){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r||!r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async r=>{if("auth/missing-recaptcha-token"!==r.code)return Promise.reject(r);{console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let r=await iW(e,t,i,"getOobCode"===i);return n(e,r)}});{let r=await iW(e,t,i,"getOobCode"===i);return n(e,r)}}function i$(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function iK(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tG("not implemented")}_getIdTokenResponse(e){return tG("not implemented")}_linkToIdToken(e,t){return tG("not implemented")}_getReauthenticationResolver(e){return tG("not implemented")}}async function iY(e,t){return t4(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iX(e,t){return t6(e,"POST","/v1/accounts:signInWithPassword",t2(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iJ(e,t){return t6(e,"POST","/v1/accounts:signInWithEmailLink",t2(e,t))}async function iQ(e,t){return t6(e,"POST","/v1/accounts:signInWithEmailLink",t2(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ extends iG{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new iZ(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new iZ(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return iz(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",iX);case"emailLink":return iJ(e,{email:this._email,oobCode:this._password});default:tW(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return iz(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iY);case"emailLink":return iQ(e,{idToken:t,email:this._email,oobCode:this._password});default:tW(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(e,t){return t6(e,"POST","/v1/accounts:signInWithIdp",t2(e,t))}class i1 extends iG{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new i1(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tW("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=tj(t,["providerId","signInMethod"]);if(!i||!n)return null;let s=new i1(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return i0(e,this.buildRequest())}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,i0(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,i0(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ez(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(e,t){return t4(e,"POST","/v1/accounts:sendVerificationCode",t2(e,t))}async function i4(e,t){return t6(e,"POST","/v1/accounts:signInWithPhoneNumber",t2(e,t))}async function i9(e,t){let i=await t6(e,"POST","/v1/accounts:signInWithPhoneNumber",t2(e,t));if(i.temporaryProof)throw t7(e,"account-exists-with-different-credential",i);return i}const i6={USER_NOT_FOUND:"user-not-found"};async function i5(e,t){return t6(e,"POST","/v1/accounts:signInWithPhoneNumber",t2(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),i6)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3 extends iG{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new i3({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new i3({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return i4(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return i9(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return i5(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new i3({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}class i7{constructor(e){var t,i,n,r,s,o;let a=e$(eK(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(i=a.oobCode)&&void 0!==i?i:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);tK(l&&h&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=h,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=e$(eK(e)).link,i=t?e$(eK(t)).deep_link_id:null,n=e$(eK(e)).deep_link_id;return(n?e$(eK(n)).link:null)||n||i||t||e}(e);try{return new i7(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(){this.providerId=i8.PROVIDER_ID}static credential(e,t){return iZ._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=i7.parseLink(t);return tK(i,"argument-error"),iZ._fromEmailAndCode(e,i.code,i.tenantId)}}i8.PROVIDER_ID="password",i8.EMAIL_PASSWORD_SIGN_IN_METHOD="password",i8.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends ne{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends nt{constructor(){super("facebook.com")}static credential(e){return i1._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch(e){return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com",ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends nt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return i1._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return nn.credential(t,i)}catch(e){return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com",nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends nt{constructor(){super("github.com")}static credential(e){return i1._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch(e){return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com",nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends nt{constructor(){super("twitter.com")}static credential(e,t){return i1._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ns.credential(t,i)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(e,t){return t6(e,"POST","/v1/accounts:signUp",t2(e,t))}ns.TWITTER_SIGN_IN_METHOD="twitter.com",ns.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){return new na({user:await iv._fromIdTokenResponse(e,i,n),providerId:nl(i),_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){return await e._updateTokensIfNecessary(i,!0),new na({user:e,providerId:nl(i),_tokenResponse:i,operationType:t})}}function nl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends eA{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,nh.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new nh(e,t,i,n)}}function nc(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw nh._fromErrorAndOperation(e,i,t,n);throw i})}async function nu(e,t,i=!1){let n=await ih(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return na._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(e,t,i=!1){let{auth:n}=e,r="reauthenticate";try{let s=await ih(e,nc(n,r,t,e),i);tK(s.idToken,n,"internal-error");let o=il(s.idToken);tK(o,n,"internal-error");let{sub:a}=o;return tK(e.uid===a,n,"user-mismatch"),na._forOperation(e,r,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&tW(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(e,t,i=!1){let n="signIn",r=await nc(e,n,t),s=await na._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(e){let t=eZ(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ng(e,t,i){let n=eZ(e),r=iz(n,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",no),s=await r.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&nf(e),t}),o=await na._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}new WeakMap;const nm="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(nm,"1"),this.storage.removeItem(nm),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class ny extends n_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=ek();return ik(e)||iL(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=iD(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);(function(){let e=ek();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ny.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv extends n_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nv.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new nw(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:i});let s=Array.from(r).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}nw.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let n,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=nb("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},i);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(h),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){return void 0!==nT().WorkerGlobalScope&&"function"==typeof nT().importScripts}async function nE(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebaseLocalStorageDb",nk="firebaseLocalStorage",nR="fbase_key";class nN{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nP(e,t){return e.transaction([nk],t?"readwrite":"readonly").objectStore(nk)}function nA(){let e=indexedDB.open(nS,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(nk,{keyPath:nR})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(nk)?t(i):(i.close(),await new nN(indexedDB.deleteDatabase(nS)).toPromise(),t(await nA()))})})}async function nO(e,t,i){return new nN(nP(e,!0).put({[nR]:t,value:i})).toPromise()}async function nL(e,t){let i=nP(e,!1).get(t),n=await new nN(i).toPromise();return void 0===n?null:n.value}function nD(e,t){return new nN(nP(e,!0).delete(t)).toPromise()}class nx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await nA()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nw._getInstance(nC()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nE(),!this.activeServiceWorker)return;this.sender=new nI(this.activeServiceWorker);let i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await nA();return await nO(e,nm,"1"),await nD(e,nm),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>nO(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>nL(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nD(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new nN(nP(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;if(0!==e.length)for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function nM(e,t,i){var n,r,s;let o=await i.verify();try{let a;if(tK("string"==typeof o,e,"argument-error"),tK("recaptcha"===i.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a)return tK("enroll"===t.type,e,"internal-error"),(await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},t4(e,"POST","/v2/accounts/mfaEnrollment:start",t2(e,r)))).phoneSessionInfo.sessionInfo;{tK("signin"===t.type,e,"internal-error");let i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;return tK(i,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:o}},t4(e,"POST","/v2/accounts/mfaSignIn:start",t2(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await i2(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{i._reset()}}nx.type="LOCAL",iV("rcb"),new tJ(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e){this.providerId=nU.PROVIDER_ID,this.auth=eZ(e)}verifyPhoneNumber(e,t){return nM(this.auth,e,eZ(t))}static credential(e,t){return i3._fromVerification(e,t)}static credentialFromResult(e){return nU.credentialFromTaggedObject(e)}static credentialFromError(e){return nU.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?i3._fromTokenResponse(t,i):null}}nU.PROVIDER_ID="phone",nU.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF extends iG{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return i0(e,this._buildIdpRequest())}_linkToIdToken(e,t){return i0(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return i0(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nj(e){return np(e.auth,new nF(e),e.bypassAuthState)}function nq(e){let{auth:t,user:i}=e;return tK(i,t,"internal-error"),nd(i,new nF(e),e.bypassAuthState)}async function nH(e){let{auth:t,user:i}=e;return tK(i,t,"internal-error"),nu(i,new nF(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nj;case"linkViaPopup":case"linkViaRedirect":return nH;case"reauthViaPopup":case"reauthViaRedirect":return nq;default:tW(this.auth,"internal-error")}}resolve(e){this.pendingPromise||tG("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||tG("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nB=new tJ(2e3,1e4);class nW extends nV{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,nW.currentPopupAction&&nW.currentPopupAction.cancel(),nW.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return tK(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||tG("Popup operations only handle one event");let e=nb();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tz(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tz(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nW.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tz(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nB.get())};e()}}nW.currentPopupAction=null;const nz=new Map;class n$ extends nV{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=nz.get(this.auth._key());if(!e){try{let t=await nK(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}nz.set(this.auth._key(),e)}return this.bypassAuthState||nz.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nK(e,t){let i=iT("pendingRedirect",t.config.apiKey,t.name),n=ib(e._redirectPersistence);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}function nG(e,t){nz.set(e._key(),t)}async function nY(e,t,i=!1){let n=eZ(e),r=t?ib(t):(tK(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new n$(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class nX{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nQ(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nQ(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(tz(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nJ(e))}saveEventToCache(e){this.cachedEventUids.add(nJ(e)),this.lastProcessedEventTime=Date.now()}}function nJ(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function nQ({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nZ(e,t={}){return t4(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n1=/^https?/;async function n2(e){if(e.config.emulator)return;let{authorizedDomains:t}=await nZ(e);for(let e of t)try{if(function(e){let t=tY(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!n1.test(i))return!1;if(n0.test(e))return n===e;let r=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}(e))return}catch(e){}tW(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=new tJ(3e4,6e4);function n9(){let e=nT().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let n6=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5=new tJ(5e3,15e3),n3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function n8(e){let t=await (n6=n6||new Promise((t,i)=>{var n,r,s;function o(){n9(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{n9(),i(tz(e,"network-request-failed"))},timeout:n4.get()})}if(null===(r=null===(n=nT().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=nT().gapi)||void 0===s?void 0:s.load)o();else{let t=iV("iframefcb");return nT()[t]=()=>{gapi.load?o():i(tz(e,"network-request-failed"))},iH(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e))}}).catch(e=>{throw n6=null,e})),i=nT().gapi;return tK(i,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;tK(t.authDomain,e,"auth-domain-config-required");let i=t.emulator?tQ(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:tE},r=n7.get(e.config.apiHost);r&&(n.eid=r);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${ez(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n3,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({setHideOnLeave:!1});let r=tz(e,"network-request-failed"),s=nT().setTimeout(()=>{n(r)},n5.get());function o(){nT().clearTimeout(s),i(t)}t.ping(o).then(o,()=>{n(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class rt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}const ri=encodeURIComponent("fac");async function rn(e,t,i,n,r,s){tK(e.config.authDomain,e,"auth-domain-config-required"),tK(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:tE,eventId:r};if(t instanceof ne)for(let[i,n]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",eH(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[i]=n;if(t instanceof nt){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];let a=await e._getAppCheckToken(),l=a?`#${ri}=${encodeURIComponent(a)}`:"";return`${function({config:e}){return e.emulator?tQ(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${ez(o).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="webStorageSupport",rs=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=nY,this._overrideRedirectResult=nG}async _openPopup(e,t,i,n){var r;(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager)||tG("_initialize() not called before _openPopup()");let s=await rn(e,t,i,tY(),n);return function(e,t,i,n=500,r=600){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},re),{width:n.toString(),height:r.toString(),top:s,left:o}),h=ek().toLowerCase();i&&(a=iR(h)?"_blank":i),iS(h)&&(t=t||"http://localhost",l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=ek()){var t;return iL(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",a),new rt(null);let u=window.open(t||"",a,c);tK(u,e,"popup-blocked");try{u.focus()}catch(e){}return new rt(u)}(e,s,nb())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=await rn(e,t,i,tY(),n),nT().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(i||tG("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await n8(e),i=new nX(e);return t.register("authEvent",t=>(tK(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rr,{type:rr},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[rr];void 0!==r&&t(!!r),tW(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iD()||ik()||iL()}};class ro{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return tG("unexpected MultiFactorSessionType")}}}class ra extends ro{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ra(e)}_finalizeEnroll(e,t,i){return t4(e,"POST","/v2/accounts/mfaEnrollment:finalize",t2(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return t4(e,"POST","/v2/accounts/mfaSignIn:finalize",t2(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class rl extends ro{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new rl(t,void 0,e)}static _fromEnrollmentId(e,t){return new rl(t,e)}async _finalizeEnroll(e,t,i){return tK(void 0!==this.secret,e,"argument-error"),t4(e,"POST","/v2/accounts/mfaEnrollment:finalize",t2(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){tK(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let i={verificationCode:this.otp};return t4(e,"POST","/v2/accounts/mfaSignIn:finalize",t2(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}class rh{constructor(e,t,i,n,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new rh(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var i;let n=!1;return(rc(e)||rc(t))&&(n=!0),n&&(rc(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),rc(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function rc(e){return void 0===e||(null==e?void 0:e.length)===0}var ru="@firebase/auth",rd="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){tK(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const rf=eE("authIdTokenMaxAge")||300;let rg=null;const rm=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>rf)return;let r=null==i?void 0:i.token;rg!==r&&(rg=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};rv="Browser",tb(new e0("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=i.options;tK(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});let a=new ij(i,n,r,{apiKey:s,authDomain:o,clientPlatform:rv,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ix(rv)});return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(ib);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),tb(new e0("auth-internal",e=>new rp(eZ(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),tR(ru,rd,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(rv)),tR(ru,rd,"esm2017");var r_,ry,rv,rw,rb,rI,rT,rC,rE="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==b?b:"undefined"!=typeof self?self:{},rS={},rk=rk||{},rR=rE||self;function rN(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function rP(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function rA(e,t,i){return e.call.apply(e.bind,arguments)}function rO(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function rL(e,t,i){return(rL=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rA:rO).apply(null,arguments)}function rD(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function rx(e,t){function i(){}i.prototype=t.prototype,e.$=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.ac=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function rM(){this.s=this.s,this.o=this.o}rM.prototype.s=!1,rM.prototype.sa=function(){this.s||(this.s=!0,this.N())},rM.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rU=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return -1};function rF(e){let t=e.length;if(0<t){let i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function rj(e,t){for(let t=1;t<arguments.length;t++){let i=arguments[t];if(rN(i)){let t=e.length||0,n=i.length||0;e.length=t+n;for(let r=0;r<n;r++)e[t+r]=i[r]}else e.push(i)}}function rq(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}rq.prototype.h=function(){this.defaultPrevented=!0};var rH=function(){if(!rR.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};rR.addEventListener("test",e,t),rR.removeEventListener("test",e,t)}catch(e){}return e}();function rV(e){return/^[\s\xa0]*$/.test(e)}function rB(){var e=rR.navigator;return e&&(e=e.userAgent)?e:""}function rW(e){return -1!=rB().indexOf(e)}function rz(e){return rz[" "](e),e}rz[" "]=function(){};var r$=rW("Opera"),rK=rW("Trident")||rW("MSIE"),rG=rW("Edge"),rY=rG||rK,rX=rW("Gecko")&&!(-1!=rB().toLowerCase().indexOf("webkit")&&!rW("Edge"))&&!(rW("Trident")||rW("MSIE"))&&!rW("Edge"),rJ=-1!=rB().toLowerCase().indexOf("webkit")&&!rW("Edge");function rQ(){var e=rR.document;return e?e.documentMode:void 0}e:{var rZ,r0="",r1=(rZ=rB(),rX?/rv:([^\);]+)(\)|;)/.exec(rZ):rG?/Edge\/([\d\.]+)/.exec(rZ):rK?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(rZ):rJ?/WebKit\/(\S+)/.exec(rZ):r$?/(?:Version)[ \/]?(\S+)/.exec(rZ):void 0);if(r1&&(r0=r1?r1[1]:""),rK){var r2=rQ();if(null!=r2&&r2>parseFloat(r0)){g=String(r2);break e}}g=r0}var r4=rR.document&&rK&&(rQ()||parseInt(g,10))||void 0;function r9(e,t){if(rq.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rX){e:{try{rz(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:r6[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&r9.$.h.call(this)}}rx(r9,rq);var r6={2:"touch",3:"pen",4:"mouse"};r9.prototype.h=function(){r9.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var r5="closure_listenable_"+(1e6*Math.random()|0),r3=0;function r7(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.la=r,this.key=++r3,this.fa=this.ia=!1}function r8(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function se(e,t,i){for(let n in e)t.call(i,e[n],n,e)}function st(e){let t={};for(let i in e)t[i]=e[i];return t}const si="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sn(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t])e[i]=n[i];for(let t=0;t<si.length;t++)i=si[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function sr(e){this.src=e,this.g={},this.h=0}function ss(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],s=rU(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(r8(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function so(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&!!i==s.capture&&s.la==n)return r}return -1}sr.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=so(e,t,n,r);return -1<o?(t=e[o],i||(t.ia=!1)):((t=new r7(t,this.src,s,!!n,r)).ia=i,e.push(t)),t};var sa="closure_lm_"+(1e6*Math.random()|0),sl={};function sh(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var o=rP(r)?!!r.capture:!!r,a=sp(e);if(a||(e[sa]=a=new sr(e)),(i=a.add(t,i,n,o,s)).proxy)return i;if(n=function e(t){return sd.call(e.src,e.listener,t)},i.proxy=n,n.src=e,n.listener=i,e.addEventListener)rH||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(su(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return i}function sc(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[r5])ss(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(su(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=sp(t))?(ss(i,e),0==i.h&&(i.src=null,t[sa]=null)):r8(e)}}}function su(e){return e in sl?sl[e]:sl[e]="on"+e}function sd(e,t){if(e.fa)e=!0;else{t=new r9(t,this);var i=e.listener,n=e.la||e.src;e.ia&&sc(e),e=i.call(n,t)}return e}function sp(e){return(e=e[sa])instanceof sr?e:null}var sf="__closure_events_fn_"+(1e9*Math.random()>>>0);function sg(e){return"function"==typeof e?e:(e[sf]||(e[sf]=function(t){return e.handleEvent(t)}),e[sf])}function sm(){rM.call(this),this.i=new sr(this),this.S=this,this.J=null}function s_(e,t){var i,n=e.J;if(n)for(i=[];n;n=n.J)i.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new rq(t,e);else if(t instanceof rq)t.target=t.target||e;else{var r=t;sn(t=new rq(n,e),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=t.g=i[s];r=sy(o,n,!0,t)&&r}if(r=sy(o=t.g=e,n,!0,t)&&r,r=sy(o,n,!1,t)&&r,i)for(s=0;s<i.length;s++)r=sy(o=t.g=i[s],n,!1,t)&&r}function sy(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==i){var a=o.listener,l=o.la||o.src;o.ia&&ss(e.i,o),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}rx(sm,rM),sm.prototype[r5]=!0,sm.prototype.removeEventListener=function(e,t,i,n){!function e(t,i,n,r,s){if(Array.isArray(i))for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);else(r=rP(r)?!!r.capture:!!r,n=sg(n),t&&t[r5])?(t=t.i,(i=String(i).toString())in t.g&&-1<(n=so(o=t.g[i],n,r,s))&&(r8(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[i],t.h--))):t&&(t=sp(t))&&(i=t.g[i.toString()],t=-1,i&&(t=so(i,n,r,s)),(n=-1<t?i[t]:null)&&sc(n))}(this,e,t,i,n)},sm.prototype.N=function(){if(sm.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)r8(i[n]);delete t.g[e],t.h--}}this.J=null},sm.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},sm.prototype.P=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var sv=rR.JSON.stringify,sw=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new sb,e=>e.reset());class sb{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let sI,sT=!1,sC=new class{constructor(){this.h=this.g=null}add(e,t){let i=sw.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}},sE=()=>{let e=rR.Promise.resolve(void 0);sI=()=>{e.then(sS)}};var sS=()=>{let e;for(var t;e=null,sC.g&&(e=sC.g,sC.g=sC.g.next,sC.g||(sC.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){rR.setTimeout(()=>{throw e},0)}(e)}sw.j(t),100>sw.h&&(sw.h++,t.next=sw.g,sw.g=t)}sT=!1};function sk(e,t){sm.call(this),this.h=e||1,this.g=t||rR,this.j=rL(this.qb,this),this.l=Date.now()}function sR(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function sN(e,t,i){if("function"==typeof e)i&&(e=rL(e,i));else if(e&&"function"==typeof e.handleEvent)e=rL(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:rR.setTimeout(e,t||0)}rx(sk,sm),(rC=sk.prototype).ga=!1,rC.T=null,rC.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),s_(this,"tick"),this.ga&&(sR(this),this.start()))}},rC.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},rC.N=function(){sk.$.N.call(this),sR(this),delete this.g};class sP extends rM{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=sN(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let i=t.h;t.h=null,t.m.apply(null,i)}(this)}N(){super.N(),this.g&&(rR.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sA(e){rM.call(this),this.h=e,this.g={}}rx(sA,rM);var sO=[];function sL(e,t,i,n){Array.isArray(i)||(i&&(sO[0]=i.toString()),i=sO);for(var r=0;r<i.length;r++){var s=function e(t,i,n,r,s){if(r&&r.once)return function e(t,i,n,r,s){if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=sg(n),t&&t[r5]?t.P(i,n,rP(r)?!!r.capture:!!r,s):sh(t,i,n,!0,r,s)}(t,i,n,r,s);if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=sg(n),t&&t[r5]?t.O(i,n,rP(r)?!!r.capture:!!r,s):sh(t,i,n,!1,r,s)}(t,i[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function sD(e){se(e.g,function(e,t){this.g.hasOwnProperty(t)&&sc(e)},e),e.g={}}function sx(){this.g=!0}function sM(e,t,i,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i){for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}}return sv(i)}catch(e){return t}}(e,i)+(n?" "+n:"")})}sA.prototype.N=function(){sA.$.N.call(this),sD(this)},sA.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},sx.prototype.Ea=function(){this.g=!1},sx.prototype.info=function(){};var sU={},sF=null;function sj(){return sF=sF||new sm}function sq(e){rq.call(this,sU.Ta,e)}function sH(e){let t=sj();s_(t,new sq(t))}function sV(e,t){rq.call(this,sU.STAT_EVENT,e),this.stat=t}function sB(e){let t=sj();s_(t,new sV(t,e))}function sW(e,t){rq.call(this,sU.Ua,e),this.size=t}function sz(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return rR.setTimeout(function(){e()},t)}sU.Ta="serverreachability",rx(sq,rq),sU.STAT_EVENT="statevent",rx(sV,rq),sU.Ua="timingevent",rx(sW,rq);var s$={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sK={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sG(){}function sY(e){return e.h||(e.h=e.i())}function sX(){}sG.prototype.h=null;var sJ={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sQ(){rq.call(this,"d")}function sZ(){rq.call(this,"c")}function s0(){}function s1(e,t,i,n){this.l=e,this.j=t,this.m=i,this.W=n||1,this.U=new sA(this),this.P=s4,e=rY?125:void 0,this.V=new sk(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new s2}function s2(){this.i=null,this.g="",this.h=!1}rx(sQ,rq),rx(sZ,rq),rx(s0,sG),s0.prototype.g=function(){return new XMLHttpRequest},s0.prototype.i=function(){return{}},_=new s0;var s4=45e3,s9={},s6={};function s5(e,t,i){e.L=1,e.A=of(oh(t)),e.u=i,e.S=!0,s3(e,null)}function s3(e,t){e.G=Date.now(),oe(e),e.B=oh(e.A);var i=e.B,n=e.W;Array.isArray(n)||(n=[String(n)]),ok(i.i,"t",n),e.o=0,i=e.l.J,e.h=new s2,e.g=am(e.l,i?t:null,!e.u),0<e.O&&(e.M=new sP(rL(e.Pa,e,e.g),e.O)),sL(e.U,e.g,"readystatechange",e.nb),t=e.I?st(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),sH(),function(e,t,i,n,r,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+o})}(e.j,e.v,e.B,e.m,e.W,e.u)}function s7(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function s8(e,t,i){let n=!0,r;for(;!e.J&&e.o<i.length;)if((r=function(e,t){var i=e.o,n=t.indexOf("\n",i);return -1==n?s6:isNaN(i=Number(t.substring(i,n)))?s9:(n+=1)+i>t.length?s6:(t=t.slice(n,n+i),e.o=n+i,t)}(e,i))==s6){4==t&&(e.s=4,sB(14),n=!1),sM(e.j,e.m,null,"[Incomplete Response]");break}else if(r==s9){e.s=4,sB(15),sM(e.j,e.m,i,"[Invalid Chunk]"),n=!1;break}else sM(e.j,e.m,r,null),os(e,r);s7(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=i.length||e.h.h||(e.s=1,sB(16),n=!1),e.i=e.i&&n,n?0<i.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),al(t),t.M=!0,sB(11))):(sM(e.j,e.m,i,"[Invalid Chunked Response]"),or(e),on(e))}function oe(e){e.Y=Date.now()+e.P,ot(e,e.P)}function ot(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=sz(rL(e.lb,e),t)}function oi(e){e.C&&(rR.clearTimeout(e.C),e.C=null)}function on(e){0==e.l.H||e.J||au(e.l,e)}function or(e){oi(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,sR(e.V),sD(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function os(e,t){try{var i=e.l;if(0!=i.H&&(i.g==e||oD(i.i,e))){if(!e.K&&oD(i.i,e)&&3==i.H){try{var n=i.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(i.g.G+3e3<e.G)ac(i),ae(i);else break e}aa(i),sB(18)}}else i.Fa=r[1],0<i.Fa-i.V&&37500>r[2]&&i.G&&0==i.A&&!i.v&&(i.v=sz(rL(i.ib,i),6e3));if(1>=oL(i.i)&&i.oa){try{i.oa()}catch(e){}i.oa=void 0}}else ap(i,11)}else if((e.K||i.g==e)&&ac(i),!rV(t))for(r=i.Ja.g.parse(t),t=0;t<r.length;t++){let a=r[t];if(i.V=a[0],a=a[1],2==i.H){if("c"==a[0]){i.K=a[1],i.pa=a[2];let t=a[3];null!=t&&(i.ra=t,i.l.info("VER="+i.ra));let r=a[4];null!=r&&(i.Ga=r,i.l.info("SVER="+i.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ox(s,s.h),s.h=null))}if(n.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,op(n.I,n.F,e))}}if(i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-e.G,i.l.info("Handshake RTT: "+i.S+"ms")),(n=i).wa=ag(n,n.J?n.pa:null,n.Y),e.K){oM(n.i,e);var o=n.L;o&&e.setTimeout(o),e.C&&(oi(e),oe(e)),n.g=e}else ao(n);0<i.j.length&&ai(i)}else"stop"!=a[0]&&"close"!=a[0]||ap(i,7)}else 3==i.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?ap(i,7):o8(i):"noop"!=a[0]&&i.h&&i.h.Aa(a),i.A=0)}}sH(4)}catch(e){}}function oo(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(rN(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(rN(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}for(let n in t=[],i=0,e)t[i++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(rN(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e),r=n.length,s=0;s<r;s++)t.call(void 0,n[s],i&&i[s],e)}(rC=s1.prototype).setTimeout=function(e){this.P=e},rC.nb=function(e){e=e.target;let t=this.M;t&&3==o4(e)?t.l():this.Pa(e)},rC.Pa=function(e){try{if(e==this.g)e:{let c=o4(this.g);var t=this.g.Ia();let u=this.g.da();if(!(3>c)&&(3!=c||rY||this.g&&(this.h.h||this.g.ja()||o9(this.g)))){this.J||4!=c||7==t||(8==t||0>=u?sH(3):sH(2)),oi(this);var i=this.g.da();this.ca=i;t:if(s7(this)){var n=o9(this.g);e="";var r=n.length,s=4==o4(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){or(this),on(this);var o="";break t}this.h.i=new rR.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==i,function(e,t,i,n,r,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+s+" "+o})}(this.j,this.v,this.B,this.m,this.W,c,i),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rV(a)){var h=a;break t}}h=null}if(i=h)sM(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,os(this,i);else{this.i=!1,this.s=3,sB(12),or(this),on(this);break e}}this.S?(s8(this,c,o),rY&&this.i&&3==c&&(sL(this.U,this.V,"tick",this.mb),this.V.start())):(sM(this.j,this.m,o,null),os(this,o)),4==c&&or(this),this.i&&!this.J&&(4==c?au(this.l,this):(this.i=!1,oe(this)))}else(function(e){let t={};e=(e.g&&2<=o4(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(rV(e[n]))continue;var i=function(e){var t=1;e=e.split(":");let i=[];for(;0<t&&e.length;)i.push(e.shift()),t--;return e.length&&i.push(e.join(":")),i}(e[n]);let r=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();let s=t[r]||[];t[r]=s,s.push(i)}!function(e,t){for(let i in e)t.call(void 0,e[i],i,e)}(t,function(e){return e.join(", ")})})(this.g),400==i&&0<o.indexOf("Unknown SID")?(this.s=3,sB(12)):(this.s=0,sB(13)),or(this),on(this)}}}catch(e){}finally{}},rC.mb=function(){if(this.g){var e=o4(this.g),t=this.g.ja();this.o<t.length&&(oi(this),s8(this,e,t),this.i&&4!=e&&oe(this))}},rC.cancel=function(){this.J=!0,or(this)},rC.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(sH(),sB(17)),or(this),this.s=2,on(this)):ot(this,this.Y-e)};var oa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ol(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ol){this.h=e.h,oc(this,e.j),this.s=e.s,this.g=e.g,ou(this,e.m),this.l=e.l;var t=e.i,i=new oT;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),od(this,i),this.o=e.o}else e&&(t=String(e).match(oa))?(this.h=!1,oc(this,t[1]||"",!0),this.s=og(t[2]||""),this.g=og(t[3]||"",!0),ou(this,t[4]),this.l=og(t[5]||"",!0),od(this,t[6]||"",!0),this.o=og(t[7]||"")):(this.h=!1,this.i=new oT(null,this.h))}function oh(e){return new ol(e)}function oc(e,t,i){e.j=i?og(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ou(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function od(e,t,i){var n,r;t instanceof oT?(e.i=t,n=e.i,(r=e.h)&&!n.j&&(oC(n),n.i=null,n.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(oE(this,t),ok(this,i,e))},n)),n.j=r):(i||(t=om(t,ob)),e.i=new oT(t,e.h))}function op(e,t,i){e.i.set(t,i)}function of(e){return op(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function og(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function om(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,o_),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function o_(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ol.prototype.toString=function(){var e=[],t=this.j;t&&e.push(om(t,oy,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(om(t,oy,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(om(i,"/"==i.charAt(0)?ow:ov,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",om(i,oI)),e.join("")};var oy=/[#\/\?@]/g,ov=/[#\?:]/g,ow=/[#\?]/g,ob=/[#\?@]/g,oI=/#/g;function oT(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function oC(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function oE(e,t){oC(e),t=oR(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function oS(e,t){return oC(e),t=oR(e,t),e.g.has(t)}function ok(e,t,i){oE(e,t),0<i.length&&(e.i=null,e.g.set(oR(e,t),rF(i)),e.h+=i.length)}function oR(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(rC=oT.prototype).add=function(e,t){oC(this),this.i=null,e=oR(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},rC.forEach=function(e,t){oC(this),this.g.forEach(function(i,n){i.forEach(function(i){e.call(t,i,n,this)},this)},this)},rC.ta=function(){oC(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let n=0;n<t.length;n++){let r=e[n];for(let e=0;e<r.length;e++)i.push(t[n])}return i},rC.Z=function(e){oC(this);let t=[];if("string"==typeof e)oS(this,e)&&(t=t.concat(this.g.get(oR(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},rC.set=function(e,t){return oC(this),this.i=null,oS(this,e=oR(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},rC.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},rC.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var n=t[i];let s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var r=s;""!==o[n]&&(r+="="+encodeURIComponent(String(o[n]))),e.push(r)}}return this.i=e.join("&")};var oN=class{constructor(e,t){this.g=e,this.map=t}};function oP(e){this.l=e||oA,e=rR.PerformanceNavigationTiming?0<(e=rR.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(rR.g&&rR.g.Ka&&rR.g.Ka()&&rR.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oA=10;function oO(e){return!!e.h||!!e.g&&e.g.size>=e.j}function oL(e){return e.h?1:e.g?e.g.size:0}function oD(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ox(e,t){e.g?e.g.add(t):e.h=t}function oM(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function oU(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let i of e.g.values())t=t.concat(i.F);return t}return rF(e.i)}oP.prototype.cancel=function(){if(this.i=oU(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var oF=class{stringify(e){return rR.JSON.stringify(e,void 0)}parse(e){return rR.JSON.parse(e,void 0)}};function oj(){this.g=new oF}function oq(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function oH(e){this.l=e.ec||null,this.j=e.ob||!1}function oV(e,t){sm.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=oB,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rx(oH,sG),oH.prototype.g=function(){return new oV(this.l,this.j)},oH.prototype.i=(p={},function(){return p}),rx(oV,sm);var oB=0;function oW(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function oz(e){e.readyState=4,e.l=null,e.j=null,e.A=null,o$(e)}function o$(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(rC=oV.prototype).open=function(e,t){if(this.readyState!=oB)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,o$(this)},rC.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||rR).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},rC.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,oz(this)),this.readyState=oB},rC.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,o$(this)),this.g&&(this.readyState=3,o$(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==rR.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oW(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},rC.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?oz(this):o$(this),3==this.readyState&&oW(this)}},rC.Za=function(e){this.g&&(this.response=this.responseText=e,oz(this))},rC.Ya=function(e){this.g&&(this.response=e,oz(this))},rC.ka=function(){this.g&&oz(this)},rC.setRequestHeader=function(e,t){this.v.append(e,t)},rC.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},rC.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var i=t.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(oV.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var oK=rR.JSON.parse;function oG(e){sm.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=oY,this.L=this.M=!1}rx(oG,sm);var oY="",oX=/^https?$/i,oJ=["POST","PUT"];function oQ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,oZ(e),o1(e)}function oZ(e){e.F||(e.F=!0,s_(e,"complete"),s_(e,"error"))}function o0(e){if(e.h&&void 0!==rk&&(!e.C[1]||4!=o4(e)||2!=e.da())){if(e.v&&4==o4(e))sN(e.La,0,e);else if(s_(e,"readystatechange"),4==o4(e)){e.h=!1;try{let o=e.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,i,n=!0;break;default:n=!1}if(!(t=n)){if(i=0===o){var r=String(e.I).match(oa)[1]||null;!r&&rR.self&&rR.self.location&&(r=rR.self.location.protocol.slice(0,-1)),i=!oX.test(r?r.toLowerCase():"")}t=i}if(t)s_(e,"complete"),s_(e,"success");else{e.m=6;try{var s=2<o4(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",oZ(e)}}finally{o1(e)}}}}function o1(e,t){if(e.g){o2(e);let i=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||s_(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function o2(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(rR.clearTimeout(e.A),e.A=null)}function o4(e){return e.g?e.g.readyState:0}function o9(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case oY:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function o6(e){let t="";return se(e,function(e,i){t+=i+":"+e+"\r\n"}),t}function o5(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=o6(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):op(e,t,i))}function o3(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function o7(e){this.Ga=0,this.j=[],this.l=new sx,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=o3("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=o3("baseRetryDelayMs",5e3,e),this.hb=o3("retryDelaySeedMs",1e4,e),this.eb=o3("forwardChannelMaxRetries",2,e),this.xa=o3("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new oP(e&&e.concurrentRequestLimit),this.Ja=new oj,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function o8(e){if(at(e),3==e.H){var t=e.W++,i=oh(e.I);if(op(i,"SID",e.K),op(i,"RID",t),op(i,"TYPE","terminate"),ar(e,i),(t=new s1(e,e.l,t)).L=2,t.A=of(oh(i)),i=!1,rR.navigator&&rR.navigator.sendBeacon)try{i=rR.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!i&&rR.Image&&((new Image).src=t.A,i=!0),i||(t.g=am(t.l,null),t.g.ha(t.A)),t.G=Date.now(),oe(t)}af(e)}function ae(e){e.g&&(al(e),e.g.cancel(),e.g=null)}function at(e){ae(e),e.u&&(rR.clearTimeout(e.u),e.u=null),ac(e),e.i.cancel(),e.m&&("number"==typeof e.m&&rR.clearTimeout(e.m),e.m=null)}function ai(e){if(!oO(e.i)&&!e.m){e.m=!0;var t=e.Na;sI||sE(),sT||(sI(),sT=!0),sC.add(t,e),e.C=0}}function an(e,t){var i;i=t?t.m:e.W++;let n=oh(e.I);op(n,"SID",e.K),op(n,"RID",i),op(n,"AID",e.V),ar(e,n),e.o&&e.s&&o5(n,e.o,e.s),i=new s1(e,e.l,i,e.C+1),null===e.o&&(i.I=e.s),t&&(e.j=t.F.concat(e.j)),t=as(e,i,1e3),i.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ox(e.i,i),s5(i,n,t)}function ar(e,t){e.na&&se(e.na,function(e,i){op(t,i,e)}),e.h&&oo({},function(e,i){op(t,i,e)})}function as(e,t,i){i=Math.min(e.j.length,i);var n=e.h?rL(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+i];-1==t?0<i?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<i;o++){let i=r[o].g,a=r[o].map;if(0>(i-=t))t=Math.max(0,r[o].g-100),s=!1;else try{!function(e,t,i){let n=i||"";try{oo(e,function(e,i){let r=e;rP(e)&&(r=sv(e)),t.push(n+i+"="+encodeURIComponent(r))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+i+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,i),t.F=e,n}function ao(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;sI||sE(),sT||(sI(),sT=!0),sC.add(t,e),e.A=0}}function aa(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=sz(rL(e.Ma,e),ad(e,e.A)),e.A++,!0)}function al(e){null!=e.B&&(rR.clearTimeout(e.B),e.B=null)}function ah(e){e.g=new s1(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=oh(e.wa);op(t,"RID","rpc"),op(t,"SID",e.K),op(t,"AID",e.V),op(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&op(t,"TO",e.qa),op(t,"TYPE","xmlhttp"),ar(e,t),e.o&&e.s&&o5(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var i=e.g;e=e.pa,i.L=1,i.A=of(oh(t)),i.u=null,i.S=!0,s3(i,e)}function ac(e){null!=e.v&&(rR.clearTimeout(e.v),e.v=null)}function au(e,t){var i=null;if(e.g==t){ac(e),al(e),e.g=null;var n=2}else{if(!oD(e.i,t))return;i=t.F,oM(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){i=t.u?t.u.length:0,t=Date.now()-t.G;var r,s=e.C;s_(n=sj(),new sW(n,i)),ai(e)}else ao(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==n&&(r=t,!(oL(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=sz(rL(e.Na,e,r),ad(e,e.C)),e.C++,!0)))||2==n&&aa(e)))switch(i&&0<i.length&&((t=e.i).i=t.i.concat(i)),s){case 1:ap(e,5);break;case 4:ap(e,10);break;case 3:ap(e,6);break;default:ap(e,2)}}}function ad(e,t){let i=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(i*=2),i*t}function ap(e,t){if(e.l.info("Error code "+t),2==t){var i=null;e.h&&(i=null);var n=rL(e.pb,e);i||(i=new ol("//www.google.com/images/cleardot.gif"),rR.location&&"http"==rR.location.protocol||oc(i,"https"),of(i)),function(e,t){let i=new sx;if(rR.Image){let n=new Image;n.onload=rD(oq,i,n,"TestLoadImage: loaded",!0,t),n.onerror=rD(oq,i,n,"TestLoadImage: error",!1,t),n.onabort=rD(oq,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=rD(oq,i,n,"TestLoadImage: timeout",!1,t),rR.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n)}else sB(2);e.H=0,e.h&&e.h.za(t),af(e),at(e)}function af(e){if(e.H=0,e.ma=[],e.h){let t=oU(e.i);(0!=t.length||0!=e.j.length)&&(rj(e.ma,t),rj(e.ma,e.j),e.i.i.length=0,rF(e.j),e.j.length=0),e.h.ya()}}function ag(e,t,i){var n=i instanceof ol?oh(i):new ol(i);if(""!=n.g)t&&(n.g=t+"."+n.g),ou(n,n.m);else{var r=rR.location;n=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new ol(null);n&&oc(s,n),t&&(s.g=t),r&&ou(s,r),i&&(s.l=i),n=s}return i=e.F,t=e.Da,i&&t&&op(n,i,t),op(n,"VER",e.ra),ar(e,n),n}function am(e,t,i){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new oG(e.Ha&&!e.va?new oH({ob:i}):e.va)).Oa(e.J),t}function a_(){}function ay(){if(rK&&!(10<=Number(r4)))throw Error("Environmental error: no available transport.")}function av(e,t){sm.call(this),this.g=new o7(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!rV(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rV(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new aI(this)}function aw(e){sQ.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ab(){sZ.call(this),this.status=1}function aI(e){this.g=e}function aT(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function aC(e,t,i){i||(i=0);var n=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)n[r]=t.charCodeAt(i++)|t.charCodeAt(i++)<<8|t.charCodeAt(i++)<<16|t.charCodeAt(i++)<<24;else for(r=0;16>r;++r)n[r]=t[i++]|t[i++]<<8|t[i++]<<16|t[i++]<<24;t=e.g[0],i=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^i&(r^s))+n[0]+3614090360&4294967295;o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[1]+3905402710&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[2]+606105819&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[3]+3250441966&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[4]+4118548399&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[5]+1200080426&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[6]+2821735955&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[7]+4249261313&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[8]+1770035416&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[9]+2336552879&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[10]+4294925233&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[11]+2304563134&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[12]+1804603682&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[13]+4254626195&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[14]+2792965006&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[15]+1236535329&4294967295,i=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(i^r))+n[1]+4129170786&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[0]+3921069994&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[5]+3593408605&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[4]+3889429448&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[9]+568446438&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[8]+1163531501&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[13]+2850285829&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[12]+2368359562&4294967295,o=t+((i=r+(o<<20&4294967295|o>>>12))^r^s)+n[5]+4294588738&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[8]+2272392833&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[11]+1839030562&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[14]+4259657740&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[1]+2763975236&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[4]+1272893353&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[7]+4139469664&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[10]+3200236656&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[13]+681279174&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[0]+3936430074&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[3]+3572445317&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[6]+76029189&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[9]+3654602809&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[12]+3873151461&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[15]+530742520&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[2]+3299628645&4294967295,i=r+(o<<23&4294967295|o>>>9),o=t+(r^(i|~s))+n[0]+4096336452&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[5]+4237533241&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[12]+1700485571&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[1]+2240044497&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[8]+1873313359&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[13]+1309151649&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[4]+4149444226&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function aE(e,t){this.h=t;for(var i=[],n=!0,r=e.length-1;0<=r;r--){var s=0|e[r];n&&s==t||(i[r]=s,n=!1)}this.g=i}(rC=oG.prototype).Oa=function(e){this.M=e},rC.ha=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_.g(),this.C=this.u?sY(this.u):sY(_),this.g.onreadystatechange=rL(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){oQ(this,e);return}if(e=i||"",i=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())i.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,o]of(n=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),r=rR.FormData&&e instanceof rR.FormData,!(0<=rU(oJ,t))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;o2(this),0<this.B&&((this.L=(s=this.g,rK&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=rL(this.ua,this)):this.A=sN(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){oQ(this,e)}},rC.ua=function(){void 0!==rk&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,s_(this,"timeout"),this.abort(8))},rC.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,s_(this,"complete"),s_(this,"abort"),o1(this))},rC.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),o1(this,!0)),oG.$.N.call(this)},rC.La=function(){this.s||(this.G||this.v||this.l?o0(this):this.kb())},rC.kb=function(){o0(this)},rC.isActive=function(){return!!this.g},rC.da=function(){try{return 2<o4(this)?this.g.status:-1}catch(e){return -1}},rC.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},rC.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oK(t)}},rC.Ia=function(){return this.m},rC.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(rC=o7.prototype).ra=8,rC.H=1,rC.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new s1(this,this.l,e),s=this.s;if(this.U&&(s?sn(s=st(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,i=0;i<this.j.length;i++){t:{var n=this.j[i];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.j.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=as(this,r,t),op(i=oh(this.I),"RID",e),op(i,"CVER",22),this.F&&op(i,"X-HTTP-Session-Id",this.F),ar(this,i),s&&(this.O?t="headers="+encodeURIComponent(String(o6(s)))+"&"+t:this.o&&o5(i,this.o,s)),ox(this.i,r),this.bb&&op(i,"TYPE","init"),this.P?(op(i,"$req",t),op(i,"SID","null"),r.aa=!0,s5(r,i,null)):s5(r,i,t),this.H=2}}else 3==this.H&&(e?an(this,e):0==this.j.length||oO(this.i)||an(this))}},rC.Ma=function(){if(this.u=null,ah(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=sz(rL(this.jb,this),e)}},rC.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,sB(10),ae(this),ah(this))},rC.ib=function(){null!=this.v&&(this.v=null,ae(this),aa(this),sB(19))},rC.pb=function(e){e?(this.l.info("Successfully pinged google.com"),sB(2)):(this.l.info("Failed to ping google.com"),sB(1))},rC.isActive=function(){return!!this.h&&this.h.isActive(this)},(rC=a_.prototype).Ba=function(){},rC.Aa=function(){},rC.za=function(){},rC.ya=function(){},rC.isActive=function(){return!0},rC.Va=function(){},ay.prototype.g=function(e,t){return new av(e,t)},rx(av,sm),av.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,i=this.h||void 0;sB(0),e.Y=t,e.na=i||{},e.G=e.aa,e.I=ag(e,null,e.Y),ai(e)},av.prototype.close=function(){o8(this.g)},av.prototype.u=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=sv(e),e=i);t.j.push(new oN(t.fb++,e)),3==t.H&&ai(t)},av.prototype.N=function(){this.g.h=null,delete this.j,o8(this.g),delete this.g,av.$.N.call(this)},rx(aw,sQ),rx(ab,sZ),rx(aI,a_),aI.prototype.Ba=function(){s_(this.g,"a")},aI.prototype.Aa=function(e){s_(this.g,new aw(e))},aI.prototype.za=function(e){s_(this.g,new ab)},aI.prototype.ya=function(){s_(this.g,"b")},rx(aT,function(){this.blockSize=-1}),aT.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},aT.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var i=t-this.blockSize,n=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=i;)aC(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[r++]=e.charCodeAt(s++),r==this.blockSize){aC(this,n),r=0;break}}else for(;s<t;)if(n[r++]=e[s++],r==this.blockSize){aC(this,n),r=0;break}}this.h=r,this.i+=t},aT.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var i=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&i,i/=256;for(this.j(e),e=Array(16),t=i=0;4>t;++t)for(var n=0;32>n;n+=8)e[i++]=this.g[t]>>>n&255;return e};var aS={};function ak(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(aS,e)?aS[e]:aS[e]=new aE([0|e],0>e?-1:0):new aE([0|e],0>e?-1:0)}function aR(e){if(isNaN(e)||!isFinite(e))return aP;if(0>e)return ax(aR(-e));for(var t=[],i=1,n=0;e>=i;n++)t[n]=e/i|0,i*=aN;return new aE(t,0)}var aN=4294967296,aP=ak(0),aA=ak(1),aO=ak(16777216);function aL(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function aD(e){return -1==e.h}function ax(e){for(var t=e.g.length,i=[],n=0;n<t;n++)i[n]=~e.g[n];return new aE(i,~e.h).add(aA)}function aM(e,t){return e.add(ax(t))}function aU(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function aF(e,t){this.g=e,this.h=t}function aj(e,t){if(aL(t))throw Error("division by zero");if(aL(e))return new aF(aP,aP);if(aD(e))return t=aj(ax(e),t),new aF(ax(t.g),ax(t.h));if(aD(t))return t=aj(e,ax(t)),new aF(ax(t.g),t.h);if(30<e.g.length){if(aD(e)||aD(t))throw Error("slowDivide_ only works with positive integers.");for(var i=aA,n=t;0>=n.X(e);)i=aq(i),n=aq(n);var r=aH(i,1),s=aH(n,1);for(n=aH(n,2),i=aH(i,2);!aL(n);){var o=s.add(n);0>=o.X(e)&&(r=r.add(i),s=o),n=aH(n,1),i=aH(i,1)}return t=aM(e,r.R(t)),new aF(r,t)}for(r=aP;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(i=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=aR(i)).R(t);aD(o)||0<o.X(e);)i-=n,o=(s=aR(i)).R(t);aL(s)&&(s=aA),r=r.add(s),e=aM(e,o)}return new aF(r,e)}function aq(e){for(var t=e.g.length+1,i=[],n=0;n<t;n++)i[n]=e.D(n)<<1|e.D(n-1)>>>31;return new aE(i,e.h)}function aH(e,t){var i=t>>5;t%=32;for(var n=e.g.length-i,r=[],s=0;s<n;s++)r[s]=0<t?e.D(s+i)>>>t|e.D(s+i+1)<<32-t:e.D(s+i);return new aE(r,e.h)}(rC=aE.prototype).ea=function(){if(aD(this))return-ax(this).ea();for(var e=0,t=1,i=0;i<this.g.length;i++){var n=this.D(i);e+=(0<=n?n:aN+n)*t,t*=aN}return e},rC.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(aL(this))return"0";if(aD(this))return"-"+ax(this).toString(e);for(var t=aR(Math.pow(e,6)),i=this,n="";;){var r=aj(i,t).g,s=((0<(i=aM(i,r.R(t))).g.length?i.g[0]:i.h)>>>0).toString(e);if(aL(i=r))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},rC.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},rC.X=function(e){return aD(e=aM(this,e))?-1:aL(e)?0:1},rC.abs=function(){return aD(this)?ax(this):this},rC.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0,r=0;r<=t;r++){var s=n+(65535&this.D(r))+(65535&e.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);n=o>>>16,s&=65535,o&=65535,i[r]=o<<16|s}return new aE(i,-2147483648&i[i.length-1]?-1:0)},rC.R=function(e){if(aL(this)||aL(e))return aP;if(aD(this))return aD(e)?ax(this).R(ax(e)):ax(ax(this).R(e));if(aD(e))return ax(this.R(ax(e)));if(0>this.X(aO)&&0>e.X(aO))return aR(this.ea()*e.ea());for(var t=this.g.length+e.g.length,i=[],n=0;n<2*t;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<e.g.length;r++){var s=this.D(n)>>>16,o=65535&this.D(n),a=e.D(r)>>>16,l=65535&e.D(r);i[2*n+2*r]+=o*l,aU(i,2*n+2*r),i[2*n+2*r+1]+=s*l,aU(i,2*n+2*r+1),i[2*n+2*r+1]+=o*a,aU(i,2*n+2*r+1),i[2*n+2*r+2]+=s*a,aU(i,2*n+2*r+2)}for(n=0;n<t;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=t;n<2*t;n++)i[n]=0;return new aE(i,0)},rC.gb=function(e){return aj(this,e).h},rC.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)&e.D(n);return new aE(i,this.h&e.h)},rC.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)|e.D(n);return new aE(i,this.h|e.h)},rC.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)^e.D(n);return new aE(i,this.h^e.h)},ay.prototype.createWebChannel=ay.prototype.g,av.prototype.send=av.prototype.u,av.prototype.open=av.prototype.m,av.prototype.close=av.prototype.close,s$.NO_ERROR=0,s$.TIMEOUT=8,s$.HTTP_ERROR=6,sK.COMPLETE="complete",sX.EventType=sJ,sJ.OPEN="a",sJ.CLOSE="b",sJ.ERROR="c",sJ.MESSAGE="d",sm.prototype.listen=sm.prototype.O,oG.prototype.listenOnce=oG.prototype.P,oG.prototype.getLastError=oG.prototype.Sa,oG.prototype.getLastErrorCode=oG.prototype.Ia,oG.prototype.getStatus=oG.prototype.da,oG.prototype.getResponseJson=oG.prototype.Wa,oG.prototype.getResponseText=oG.prototype.ja,oG.prototype.send=oG.prototype.ha,oG.prototype.setWithCredentials=oG.prototype.Oa,aT.prototype.digest=aT.prototype.l,aT.prototype.reset=aT.prototype.reset,aT.prototype.update=aT.prototype.j,aE.prototype.add=aE.prototype.add,aE.prototype.multiply=aE.prototype.R,aE.prototype.modulo=aE.prototype.gb,aE.prototype.compare=aE.prototype.X,aE.prototype.toNumber=aE.prototype.ea,aE.prototype.toString=aE.prototype.toString,aE.prototype.getBits=aE.prototype.D,aE.fromNumber=aR,aE.fromString=function e(t,i){if(0==t.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==t.charAt(0))return ax(e(t.substring(1),i));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=aR(Math.pow(i,8)),r=aP,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),i);8>o?(o=aR(Math.pow(i,o)),r=r.R(o).add(aR(a))):r=(r=r.R(n)).add(aR(a))}return r},rS.createWebChannelTransport=function(){return new ay},rS.getStatEventTarget=function(){return sj()},rS.ErrorCode=s$,rS.EventType=sK,rS.Event=sU,rS.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rS.FetchXmlHttpFactory=oH,rS.WebChannel=sX,rS.XhrIo=oG,rS.Md5=aT;var aV=rS.Integer=aE;const aB="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aW{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}aW.UNAUTHENTICATED=new aW(null),aW.GOOGLE_CREDENTIALS=new aW("google-credentials-uid"),aW.FIRST_PARTY=new aW("first-party-uid"),aW.MOCK_USER=new aW("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let az="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a$=new e8("@firebase/firestore");function aK(e,...t){if(a$.logLevel<=rT.DEBUG){let i=t.map(aY);a$.debug(`Firestore (${az}): ${e}`,...i)}}function aG(e,...t){if(a$.logLevel<=rT.ERROR){let i=t.map(aY);a$.error(`Firestore (${az}): ${e}`,...i)}}function aY(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aX(e="Unexpected state"){let t=`FIRESTORE (${az}) INTERNAL ASSERTION FAILED: `+e;throw aG(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aJ={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition",UNAVAILABLE:"unavailable"};class aQ extends eA{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aZ{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(aW.UNAUTHENTICATED))}shutdown(){}}class a2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class a4{constructor(e){this.t=e,this.currentUser=aW.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i,n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve(),r=new aZ;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new aZ,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{aK("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(aK("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new aZ)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(aK("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||aX(),new a0(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||aX(),new aW(e)}}class a9{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=aW.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class a6{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new a9(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(aW.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a5{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a3{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let i=e=>{null!=e.error&&aK("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.R;return this.R=e.token,aK("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};let n=e=>{aK("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):aK("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||aX(),this.R=e.token,new a5(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a7{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function a8(e,t){return e<t?-1:e>t?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t,i){void 0===t?t=0:t>e.length&&aX(),void 0===i?i=e.length-t:i>e.length-t&&aX(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===le.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof le?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let n=0;n<i;n++){let i=e.get(n),r=t.get(n);if(i<r)return -1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class lt extends le{construct(e,t,i){return new lt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new aQ(aJ.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(e=>e.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.path=e}static fromPath(e){return new li(lt.fromString(e))}static fromName(e){return new li(lt.fromString(e).popFirst(5))}static empty(){return new li(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===lt.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new li(new lt(e.slice()))}}function ln(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.comparator=e,this.root=t||lo.EMPTY}insert(e,t){return new lr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,lo.BLACK,null,null))}remove(e){return new lr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){let n=this.comparator(e,i.key);if(0===n)return t+i.left.size;n<0?i=i.left:(t+=i.left.size+1,i=i.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ls(this.root,e,this.comparator,!0)}}class ls{constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lo{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:lo.RED,this.left=null!=n?n:lo.EMPTY,this.right=null!=r?r:lo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,n,r){return new lo(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return lo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let i,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return lo.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,lo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,lo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw aX();let e=this.left.check();if(e!==this.right.check())throw aX();return e+(this.isRed()?0:1)}}lo.EMPTY=null,lo.RED=!0,lo.BLACK=!1,lo.EMPTY=new class{constructor(){this.size=0}get key(){throw aX()}get value(){throw aX()}get color(){throw aX()}get left(){throw aX()}get right(){throw aX()}copy(e,t,i,n,r){return this}insert(e,t,i){return new lo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.comparator=e,this.data=new lr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ll(this.data.getIterator())}getIteratorFrom(e){return new ll(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof la)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new la(this.comparator);return t.data=e,t}}class ll{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.binaryString=e}static fromBase64String(e){return new lc(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new lh("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new lc(function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return a8(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function lu(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}lc.EMPTY_BYTE_STRING=new lc(""),new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,i,n,r,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class lp{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new lp("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof lp&&e.projectId===this.projectId&&e.database===this.database}}new lr(li.comparator),new lr(li.comparator),new lr(li.comparator),new la(li.comparator),new la(a8),(v=y||(y={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS",new aV([4294967295,4294967295],0);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){var i;if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(lu(e.integerValue));else if("doubleValue"in e){let i=lu(e.doubleValue);isNaN(i)?this.Tt(t,13):(this.Tt(t,15),0===i&&1/i==-1/0?t.Et(0):t.Et(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Tt(t,20),"string"==typeof i?t.dt(i):(t.dt(`${i.seconds||""}`),t.Et(i.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt("string"==typeof(i=e.bytesValue)?lc.fromBase64String(i):lc.fromUint8Array(i)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.Tt(t,45),t.Et(i.latitude||0),t.Et(i.longitude||0)}else"mapValue"in e?"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):aX()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let i=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(i)))this.At(e,t),this.Pt(i[e],t)}yt(e,t){let i=e.values||[];for(let e of(this.Tt(t,50),i))this.Pt(e,t)}ft(e,t){this.Tt(t,37),li.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}lf.St=new lf,new Uint8Array(0);class lg{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new lg(e,lg.DEFAULT_COLLECTION_PERCENTILE,lg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}function lm(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lg.DEFAULT_COLLECTION_PERCENTILE=10,lg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lg.DEFAULT=new lg(41943040,lg.DEFAULT_COLLECTION_PERCENTILE,lg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lg.DISABLED=new lg(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,i=1e3,n=1.5,r=6e4){this.si=e,this.timerId=t,this.Fo=i,this.Mo=n,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();let t=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),n=Math.max(0,t-i);n>0&&aK("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new aZ,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,n,r){let s=new ly(e,t,Date.now()+i,n,r);return s.start(i),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new aQ(aJ.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=aW.UNAUTHENTICATED,this.clientId=a7.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async e=>{aK("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(aK("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new aQ(aJ.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new aZ;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let t=function(e,t){if(aG("AsyncQueue",`${t}: ${e}`),ln(e))return new aQ(aJ.UNAVAILABLE,`${t}: ${e}`);throw e}(i,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){var t,i;if(void 0===e.host){if(void 0!==e.ssl)throw new aQ(aJ.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new aQ(aJ.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,i,n){if(!0===t&&!0===n)throw new aQ(aJ.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lw(null!==(i=e.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new aQ(aJ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new aQ(aJ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new aQ(aJ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,i;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lT{constructor(e,t,i,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new aQ(aJ.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new aQ(aJ.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lI(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new a1;switch(e.type){case"firstParty":return new a6(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new aQ(aJ.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=lb.get(e);t&&(aK("ComponentProvider","Removing Datastore"),lb.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new l_(this,"async_queue_retry"),this.iu=()=>{let e=lm();e&&aK("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};let e=lm();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;let t=lm();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});let t=new aZ;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ln(e))throw e;aK("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){let t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{let t;throw this.eu=e,this.tu=!1,aG("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,i){this.su(),this.ru.indexOf(e)>-1&&(t=0);let n=ly.createAndSchedule(this,e,t,i,e=>this.au(e));return this.Xa.push(n),n}su(){this.eu&&aX()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(let t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{for(let t of(this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Xa))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){let t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class lE extends lT{constructor(e,t,i,n){super(e,t,i,n),this.type="firestore",this._queue=new lC,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||function(e){var t,i,n,r;let s=e._freezeSettings(),o=(r=e._databaseId,new ld(r,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,lw(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new lv(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(i=s.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(this),this._firestoreClient.terminate()}}RegExp("[~\\*/\\[\\]]"),new WeakMap,function(e=!0){az=tE,tb(new e0("firestore",(t,{instanceIdentifier:i,options:n})=>{let r=t.getProvider("app").getImmediate(),s=new lE(new a4(t.getProvider("auth-internal")),new a3(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new aQ(aJ.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lp(e.options.projectId,t)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),tR(aB,"4.4.0",void 0),tR(aB,"4.4.0","esm2017")}();const lS="@firebase/database",lk="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lR="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ex(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:eD(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ej(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new lN(t)}}catch(e){}return new lP},lO=lA("localStorage"),lL=lA("sessionStorage"),lD=new e8("@firebase/database"),lx=(d=1,function(){return d++}),lM=function(e){let t=eJ(e),i=new eG;i.update(t);let n=i.digest();return ep.encodeByteArray(n)},lU=function(...e){let t="";for(let i=0;i<e.length;i++){let n=e[i];Array.isArray(n)||n&&"object"==typeof n&&"number"==typeof n.length?t+=lU.apply(null,n):"object"==typeof n?t+=ex(n):t+=n,t+=" "}return t};let lF=null,lj=!0;const lq=function(e,t){eh(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(lD.logLevel=rT.VERBOSE,lF=lD.log.bind(lD),t&&lL.set("logging_enabled",!0)):"function"==typeof e?lF=e:(lF=null,lL.remove("logging_enabled"))},lH=function(...e){if(!0===lj&&(lj=!1,null===lF&&!0===lL.get("logging_enabled")&&lq(!0)),lF){let t=lU.apply(null,e);lF(t)}},lV=function(e){return function(...t){lH(e,...t)}},lB=function(...e){let t="FIREBASE INTERNAL ERROR: "+lU(...e);lD.error(t)},lW=function(...e){let t=`FIREBASE FATAL ERROR: ${lU(...e)}`;throw lD.error(t),Error(t)},lz=function(...e){let t="FIREBASE WARNING: "+lU(...e);lD.warn(t)},l$=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&lz("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lK=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},lG=function(e){if(eP()||"complete"===document.readyState)e();else{let t=!1,i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&i()}),window.attachEvent("onload",i))}},lY="[MIN_NAME]",lX="[MAX_NAME]",lJ=function(e,t){if(e===t)return 0;{if(e===lY||t===lX)return -1;if(t===lY||e===lX)return 1;let i=l6(e),n=l6(t);return null!==i?null!==n?i-n==0?e.length-t.length:i-n:-1:null!==n?1:e<t?-1:1}},lQ=function(e,t){return e===t?0:e<t?-1:1},lZ=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+ex(t))},l0=function(e){if("object"!=typeof e||null===e)return ex(e);let t=[];for(let i in e)t.push(i);t.sort();let i="{";for(let n=0;n<t.length;n++)0!==n&&(i+=","),i+=ex(t[n])+":"+l0(e[t[n]]);return i+"}"},l1=function(e,t){let i=e.length;if(i<=t)return[e];let n=[];for(let r=0;r<i;r+=t)r+t>i?n.push(e.substring(r,i)):n.push(e.substring(r,r+t));return n};function l2(e,t){for(let i in e)e.hasOwnProperty(i)&&t(i,e[i])}const l4=function(e){let t,i,n,r,s;eh(!lK(e),"Invalid JSON number"),0===e?(i=0,n=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(i=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,n=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(i=0,n=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);for(s=11;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},l9=RegExp("^-?(0*)\\d{1,10}$"),l6=function(e){if(l9.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},l5=function(e){try{e()}catch(e){setTimeout(()=>{throw lz("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},l3=function(e,t){let i=setTimeout(e,t);return"number"==typeof i&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(i):"object"==typeof i&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l7{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){lz(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l8{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(lH("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lz(e)}}class he{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}he.OWNER="owner";const ht=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hi="websocket",hn="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t,i,n,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lO.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lO.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hs(e,t,i){let n;if(eh("string"==typeof t,"typeof type must == string"),eh("object"==typeof i,"typeof params must == object"),t===hi)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===hn)n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(i.ns=e.namespace);let r=[];return l2(i,(e,t)=>{r.push(e+"="+t)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.counters_={}}incrementCounter(e,t=1){ej(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,i){if(!(i instanceof Object))return i;switch(i.constructor){case Date:return new Date(i.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return i}for(let n in i)i.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=e(t[n],i[n]));return t}(void 0,this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={},hl={};function hh(e){let t=e.toString();return ha[t]||(ha[t]=new ho),ha[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&l5(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="start";class hd{constructor(e,t,i,n,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lV(e),this.stats_=hh(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),hs(t,hn,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),lG(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hp((...e)=>{let[t,i,n,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===hu)this.id=i,this.password=n;else if("close"===t)i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,i]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,i)},()=>{this.onClosed_()},this.urlFn);let e={};e[hu]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&ht.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hd.forceAllow_=!0}static forceDisallow(){hd.forceDisallow_=!0}static isAvailable(){return!eP()&&(!!hd.forceAllow_||!hd.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=ex(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=l1(eg(t),1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(eP())return;this.myDisconnFrame=document.createElement("iframe");let i={};i.dframe="t",i.id=e,i.pw=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=ex(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hp{constructor(e,t,i,n){if(this.onDisconnect=i,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,eP())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=lx(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=hp.createIFrame_();let i="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(i='<script>document.domain="'+document.domain+'";</script>');let n="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(e){lH("frame writing exception"),e.stack&&lH(e.stack),lH(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lH("No IE domain setting required")}catch(i){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),i="",n=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+i.length<=1870){let e=this.pendingSegs.shift();i=i+"&seg"+n+"="+e.seg+"&ts"+n+"="+e.ts+"&d"+n+"="+e.d,n++}else break;return t+=i,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(i,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(n),i()})}addTag(e,t){eP()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{lH("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(e){}},Math.floor(1))}}let hf=null;"undefined"!=typeof MozWebSocket?hf=MozWebSocket:"undefined"!=typeof WebSocket&&(hf=WebSocket);class hg{constructor(e,t,i,n,r,s,o){this.connId=e,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lV(this.connId),this.stats_=hh(t),this.connURL=hg.connectionURL_(t,s,o,n,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,n,r){let s={};return s.v="5",!eP()&&"undefined"!=typeof location&&location.hostname&&ht.test(location.hostname)&&(s.r="f"),t&&(s.s=t),i&&(s.ls=i),n&&(s.ac=n),r&&(s.p=r),hs(e,hi,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lO.set("previous_websocket_failure",!0);try{let e;if(eP()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${lR}/${X.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let i={},n=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;n&&(e.proxy={origin:n})}this.mySock=new hf(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){hg.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==hf&&!hg.forceDisallow_}static previouslyFailed(){return lO.isInMemoryStorage||!0===lO.get("previous_websocket_failure")}markConnectionHealthy(){lO.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=eD(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(eh(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=ex(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=l1(t,16384);i.length>1&&this.sendString_(String(i.length));for(let e=0;e<i.length;e++)this.sendString_(i[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hg.responsesRequiredToBeHealthy=2,hg.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hd,hg]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=hg&&hg.isAvailable(),i=t&&!hg.previouslyFailed();if(e.webSocketOnly&&(t||lz("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[hg];else{let e=this.transports_=[];for(let t of hm.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);hm.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hm.globalTransportInitialized_=!1;class h_{constructor(e,t,i,n,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lV("c:"+this.id+":"),this.transportManager_=new hm(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=l3(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=lZ("t",e),i=lZ("d",e);if("c"===t)this.onSecondaryControl_(i);else if("d"===t)this.pendingDataMessages.push(i);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=lZ("t",e),i=lZ("d",e);"c"===t?this.onControl_(i):"d"===t&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=lZ("t",e);if("d"in e){let i=e.d;if("h"===t){let e=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(i):"r"===t?this.onReset_(i):"e"===t?lB("Server Error: "+i):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lB("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==i&&lz("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),l3(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):l3(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lO.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{put(e,t,i,n){}merge(e,t,i,n){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.allowedEvents_=e,this.listeners_={},eh(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let e=0;e<i.length;e++)i[e].callback.apply(i[e].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let n=this.getInitialEvent(e);n&&t.apply(i,n)}off(e,t,i){this.validateEventType_(e);let n=this.listeners_[e]||[];for(let e=0;e<n.length;e++)if(n[e].callback===t&&(!i||i===n[e].context)){n.splice(e,1);return}}validateEventType_(e){eh(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw extends hv{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||eR()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hw}getInitialEvent(e){return eh("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class hb{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function hI(){return new hb("")}function hT(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function hC(e){return e.pieces_.length-e.pieceNum_}function hE(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new hb(e.pieces_,t)}function hS(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function hk(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function hR(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let i=e.pieceNum_;i<e.pieces_.length-1;i++)t.push(e.pieces_[i]);return new hb(t,0)}function hN(e,t){let i=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)i.push(e.pieces_[t]);if(t instanceof hb)for(let e=t.pieceNum_;e<t.pieces_.length;e++)i.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&i.push(e[t])}return new hb(i,0)}function hP(e){return e.pieceNum_>=e.pieces_.length}function hA(e,t){let i=hT(e),n=hT(t);if(null===i)return t;if(i===n)return hA(hE(e),hE(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function hO(e,t){if(hC(e)!==hC(t))return!1;for(let i=e.pieceNum_,n=t.pieceNum_;i<=e.pieces_.length;i++,n++)if(e.pieces_[i]!==t.pieces_[n])return!1;return!0}function hL(e,t){let i=e.pieceNum_,n=t.pieceNum_;if(hC(e)>hC(t))return!1;for(;i<e.pieces_.length;){if(e.pieces_[i]!==t.pieces_[n])return!1;++i,++n}return!0}class hD{constructor(e,t){this.errorPrefix_=t,this.parts_=hk(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=eQ(this.parts_[e]);hx(this)}}function hx(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+hM(e))}function hM(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU extends hv{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new hU}getInitialEvent(e){return eh("visible"===e,"Unknown event type: "+e),[this.visible_]}}class hF extends hy{constructor(e,t,i,n,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=hF.nextPersistentConnectionId_++,this.log_=lV("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!eP())throw Error("Auth override specified in options, but not supported on non Node.js platforms");hU.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&hw.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let n=++this.requestNumber_,r={r:n,a:e,b:t};this.log_(ex(r)),eh(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[n]=i)}get(e){this.initConnection_();let t=new eS,i={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:i,onComplete:e=>{let i=e.d;"ok"===e.s?t.resolve(i):t.reject(i)}}),this.outstandingGetCount_++;let n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),t.promise}listen(e,t,i,n){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),eh(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),eh(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:n,hashFn:t,query:e,tag:i};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+i+" for "+n);let r={p:i};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;hF.warnOnListenWarnings_(s,t),(this.listens.get(i)&&this.listens.get(i).get(n))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(i,n),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ej(e,"w")){let i=eq(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();lz(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||eF(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=eU(e)?"auth":"gauth",i={cred:e};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(t,i,t=>{let i=t.s,n=t.d||"error";this.authToken_===e&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,n))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+n),eh(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,n)&&this.connected_&&this.sendUnlisten_(i,n,e._queryObject,t)}sendUnlisten_(e,t,i,n){this.log_("Unlisten on "+e+" for "+t);let r={p:e};n&&(r.q=i,r.t=n),this.sendRequest("n",r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,n){let r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{n&&setTimeout(()=>{n(e.s,e.d)},Math.floor(0))})}put(e,t,i,n){this.putInternal("p",e,t,i,n)}merge(e,t,i,n){this.putInternal("m",e,t,i,n)}putInternal(e,t,i,n,r){this.initConnection_();let s={p:t,d:i};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:n}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(i.s,i.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ex(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):lB("Unrecognized action received from server: "+ex(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){eh(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+hF.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,i())};this.realtime_={close:a,sendRequest:function(e){eh(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?lH("getToken() completed but was canceled"):(lH("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new h_(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,e=>{lz(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&lz(e),a())}}}interrupt(e){lH("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lH("Resuming connection for reason: "+e),delete this.interruptReasons_[e],eH(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;i=t?t.map(e=>l0(e)).join("$"):"default";let n=this.removeListen_(e,i);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){let i;let n=new hb(e).toString();if(this.listens.has(n)){let e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){lH("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){lH("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";eP()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+lR.replace(/\./g,"-")]=1,eR()?e["framework.cordova"]=1:eN()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=hw.getInstance().currentlyOnline();return eH(this.interruptReasons_)&&e}}hF.nextPersistentConnectionId_=0,hF.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new hj(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hq{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new hj(lY,e),n=new hj(lY,t);return 0!==this.compare(i,n)}minPost(){return hj.MIN}}class hH extends hq{static get __EMPTY_NODE(){return i}static set __EMPTY_NODE(e){i=e}compare(e,t){return lJ(e.name,t.name)}isDefinedOn(e){throw ec("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return hj.MIN}maxPost(){return new hj(lX,i)}makePost(e,t){return eh("string"==typeof e,"KeyIndex indexValue must always be a string."),new hj(e,i)}toString(){return".key"}}const hV=new hH;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{constructor(e,t,i,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,n&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class hW{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:hW.RED,this.left=null!=n?n:hz.EMPTY_NODE,this.right=null!=r?r:hz.EMPTY_NODE}copy(e,t,i,n,r){return new hW(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp_()}removeMin_(){if(this.left.isEmpty())return hz.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let i,n;if(i=this,0>t(e,i.key))i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===t(e,i.key)){if(i.right.isEmpty())return hz.EMPTY_NODE;n=i.right.min_(),i=i.copy(n.key,n.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,hW.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,hW.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}hW.RED=!0,hW.BLACK=!1;class hz{constructor(e,t=hz.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new hz(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,hW.BLACK,null,null))}remove(e){return new hz(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,hW.BLACK,null,null))}get(e){let t;let i=this.root_;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key)))return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,n=null;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key))){if(i.left.isEmpty()){if(n)return n.key;return null}for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}t<0?i=i.left:t>0&&(n=i,i=i.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hB(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new hB(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new hB(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new hB(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h$(e,t){return lJ(e.name,t.name)}function hK(e,t){return lJ(e,t)}hz.EMPTY_NODE=new class{copy(e,t,i,n,r){return this}insert(e,t,i){return new hW(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const hG=function(e){return"number"==typeof e?"number:"+l4(e):"string:"+e},hY=function(e){if(e.isLeafNode()){let t=e.val();eh("string"==typeof t||"number"==typeof t||"object"==typeof t&&ej(t,".sv"),"Priority must be a string or number.")}else eh(e===n||e.isEmpty(),"priority of unexpected type.");eh(e===n||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class hX{constructor(e,t=hX.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,eh(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),hY(this.priorityNode_)}static set __childrenNodeConstructor(e){r=e}static get __childrenNodeConstructor(){return r}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new hX(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:hX.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return hP(e)?this:".priority"===hT(e)?this.priorityNode_:hX.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:hX.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=hT(e);return null===i?t:t.isEmpty()&&".priority"!==i?this:(eh(".priority"!==i||1===hC(e),".priority must be the last token in a path"),this.updateImmediateChild(i,hX.__childrenNodeConstructor.EMPTY_NODE.updateChild(hE(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hG(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=l4(this.value_):e+=this.value_,this.lazyHash_=lM(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===hX.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof hX.__childrenNodeConstructor?-1:(eh(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,n=hX.VALUE_TYPE_ORDER.indexOf(t),r=hX.VALUE_TYPE_ORDER.indexOf(i);return(eh(n>=0,"Unknown leaf type: "+t),eh(r>=0,"Unknown leaf type: "+i),n!==r)?r-n:"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}hX.VALUE_TYPE_ORDER=["object","boolean","number","string"];const hJ=new class extends hq{compare(e,t){let i=e.node.getPriority(),n=t.node.getPriority(),r=i.compareTo(n);return 0===r?lJ(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return hj.MIN}maxPost(){return new hj(lX,new hX("[PRIORITY-POST]",o))}makePost(e,t){return new hj(t,new hX("[PRIORITY-POST]",s(e)))}toString(){return".priority"}},hQ=Math.log(2);class hZ{constructor(e){this.count=parseInt(Math.log(e+1)/hQ,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const h0=function(e,t,i,n){e.sort(t);let r=function(t,n){let s;let o=n-t;if(0===o)return null;if(1===o)return s=e[t],new hW(i?i(s):s,s.node,hW.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,n);return s=e[a],new hW(i?i(s):s,s.node,hW.BLACK,l,h)}};return new hz(n||t,function(t){let n=null,s=null,o=e.length,a=function(t,n){let s=o-t,a=o;o-=t;let h=r(s+1,a),c=e[s];l(new hW(i?i(c):c,c.node,n,null,h))},l=function(e){n?n.left=e:s=e,n=e};for(let e=0;e<t.count;++e){let i=t.nextBitIsOne(),n=Math.pow(2,t.count-(e+1));i?a(n,hW.BLACK):(a(n,hW.BLACK),a(n,hW.RED))}return s}(new hZ(e.length)))},h1={};class h2{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return eh(h1&&hJ,"ChildrenNode.ts has not been loaded"),a=a||new h2({".priority":h1},{".priority":hJ})}get(e){let t=eq(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof hz?t:null}hasIndex(e){return ej(this.indexSet_,e.toString())}addIndex(e,t){let i;eh(e!==hV,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],r=!1,s=t.getIterator(hj.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();i=r?h0(n,e.getCompare()):h1;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=i,new h2(h,l)}addToIndexes(e,t){return new h2(eV(this.indexes_,(i,n)=>{let r=eq(this.indexSet_,n);if(eh(r,"Missing index implementation for "+n),i===h1){if(!r.isDefinedOn(e.node))return h1;{let i=[],n=t.getIterator(hj.Wrap),s=n.getNext();for(;s;)s.name!==e.name&&i.push(s),s=n.getNext();return i.push(e),h0(i,r.getCompare())}}{let n=t.get(e.name),r=i;return n&&(r=r.remove(new hj(e.name,n))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new h2(eV(this.indexes_,i=>{if(i===h1)return i;{let n=t.get(e.name);return n?i.remove(new hj(e.name,n)):i}}),this.indexSet_)}}class h4{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&hY(this.priorityNode_),this.children_.isEmpty()&&eh(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return l||(l=new h4(new hz(hK),null,h2.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||l}updatePriority(e){return this.children_.isEmpty()?this:new h4(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?l:t}}getChild(e){let t=hT(e);return null===t?this:this.getImmediateChild(t).getChild(hE(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(eh(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let i,n;let r=new hj(e,t);t.isEmpty()?(i=this.children_.remove(e),n=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),n=this.indexMap_.addToIndexes(r,this.children_));let s=i.isEmpty()?l:this.priorityNode_;return new h4(i,s,n)}}updateChild(e,t){let i=hT(e);if(null===i)return t;{eh(".priority"!==hT(e)||1===hC(e),".priority must be the last token in a path");let n=this.getImmediateChild(i).updateChild(hE(e),t);return this.updateImmediateChild(i,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,n=0,r=!0;if(this.forEachChild(hJ,(s,o)=>{t[s]=o.val(e),i++,r&&h4.INTEGER_REGEXP_.test(s)?n=Math.max(n,Number(s)):r=!1}),e||!r||!(n<2*i))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let i in t)e[i]=t[i];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+hG(this.getPriority().val())+":"),this.forEachChild(hJ,(t,i)=>{let n=i.hash();""!==n&&(e+=":"+t+":"+n)}),this.lazyHash_=""===e?"":lM(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let n=this.resolveIndex_(i);if(!n)return this.children_.getPredecessorKey(e);{let i=n.getPredecessorKey(new hj(e,t));return i?i.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new hj(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new hj(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,hj.Wrap),n=i.peek();for(;null!=n&&0>t.compare(n,e);)i.getNext(),n=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,hj.Wrap),n=i.peek();for(;null!=n&&t.compare(n,e)>0;)i.getNext(),n=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===h9?-1:0}withIndex(e){if(e===hV||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new h4(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===hV||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(hJ),i=e.getIterator(hJ),n=t.getNext(),r=i.getNext();for(;n&&r;){if(n.name!==r.name||!n.node.equals(r.node))return!1;n=t.getNext(),r=i.getNext()}return null===n&&null===r}}resolveIndex_(e){return e===hV?null:this.indexMap_.get(e.toString())}}h4.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const h9=new class extends h4{constructor(){super(new hz(hK),h4.EMPTY_NODE,h2.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return h4.EMPTY_NODE}isEmpty(){return!1}};function h6(e,t=null){if(null===e)return h4.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),eh(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new hX(e,h6(t));if(e instanceof Array){let i=h4.EMPTY_NODE;return l2(e,(t,n)=>{if(ej(e,t)&&"."!==t.substring(0,1)){let e=h6(n);(e.isLeafNode()||!e.isEmpty())&&(i=i.updateImmediateChild(t,e))}}),i.updatePriority(h6(t))}{let i=[],n=!1;if(l2(e,(e,t)=>{if("."!==e.substring(0,1)){let r=h6(t);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),i.push(new hj(e,r)))}}),0===i.length)return h4.EMPTY_NODE;let r=h0(i,h$,e=>e.name,hK);if(!n)return new h4(r,h6(t),h2.Default);{let e=h0(i,hJ.getCompare());return new h4(r,h6(t),new h2({".priority":e},{".priority":hJ}))}}}Object.defineProperties(hj,{MIN:{value:new hj(lY,h4.EMPTY_NODE)},MAX:{value:new hj(lX,h9)}}),hH.__EMPTY_NODE=h4.EMPTY_NODE,hX.__childrenNodeConstructor=h4,n=h9,o=h9,s=h6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h5 extends hq{constructor(e){super(),this.indexPath_=e,eh(!hP(e)&&".priority"!==hT(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),n=this.extractChild(t.node),r=i.compareTo(n);return 0===r?lJ(e.name,t.name):r}makePost(e,t){let i=h6(e);return new hj(t,h4.EMPTY_NODE.updateChild(this.indexPath_,i))}maxPost(){return new hj(lX,h4.EMPTY_NODE.updateChild(this.indexPath_,h9))}toString(){return hk(this.indexPath_,0).join("/")}}const h3=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends hq{compare(e,t){let i=e.node.compareTo(t.node);return 0===i?lJ(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return hj.MIN}maxPost(){return hj.MAX}makePost(e,t){return new hj(t,h6(e))}toString(){return".value"}};function h7(e,t,i){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h8{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=hJ}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return eh(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(eh(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:lY}hasEnd(){return this.endSet_}getIndexEndValue(){return eh(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(eh(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:lX}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return eh(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===hJ}copy(){let e=new h8;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ce(e){let t;let i={};if(e.isDefault())return i;if(e.index_===hJ?t="$priority":e.index_===h3?t="$value":e.index_===hV?t="$key":(eh(e.index_ instanceof h5,"Unrecognized index type!"),t=e.index_.toString()),i.orderBy=ex(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";i[t]=ex(e.indexStartValue_),e.startNameSet_&&(i[t]+=","+ex(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";i[t]=ex(e.indexEndValue_),e.endNameSet_&&(i[t]+=","+ex(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?i.limitToFirst=e.limit_:i.limitToLast=e.limit_),i}function ct(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let i=e.viewFrom_;""===i&&(i=e.isViewFromLeft()?"l":"r"),t.vf=i}return e.index_!==hJ&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends hy{constructor(e,t,i,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=n,this.log_=lV("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(eh(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,n){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=ci.getListenId_(e,i),o={};this.listens_[s]=o;let a=ce(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,i),eq(this.listens_,s)===o&&n(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let i=ci.getListenId_(e,t);delete this.listens_[i]}get(e){let t=ce(e._queryParams),i=e._path.toString(),n=new eS;return this.restRequest_(i+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(i,r,!1,null),n.resolve(r)):n.reject(Error(r))}),n.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ez(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=eD(o.responseText)}catch(e){lz("Failed to parse JSON response for "+s+": "+o.responseText)}i(null,e)}else 401!==o.status&&404!==o.status&&lz("Got unsuccessful REST response for "+s+" Status: "+o.status),i(o.status);i=null}},o.open("GET",s,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.rootNode_=h4.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return{value:null,children:new Map}}function cs(e,t,i){null!==e.value?i(t,e.value):function(e,t){e.children.forEach((e,i)=>{t(i,e)})}(e,(e,n)=>{cs(n,new hb(t.toString()+"/"+e),i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&l2(this.last_,(e,i)=>{t[e]=t[e]-i}),this.last_=e,t}}class ca{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new co(e),l3(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;l2(e,(e,n)=>{n>0&&ej(this.statsToReport_,e)&&(t[e]=n,i=!0)}),i&&this.server_.reportStats(t),l3(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function cl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ch(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(f=w||(w={}))[f.OVERWRITE=0]="OVERWRITE",f[f.MERGE=1]="MERGE",f[f.ACK_USER_WRITE=2]="ACK_USER_WRITE",f[f.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=w.ACK_USER_WRITE,this.source=cl()}operationForChild(e){if(!hP(this.path))return eh(hT(this.path)===e,"operationForChild called for unrelated child."),new cu(hE(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return eh(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new hb(e));return new cu(hI(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=w.OVERWRITE}operationForChild(e){return hP(this.path)?new cd(this.source,hI(),this.snap.getImmediateChild(e)):new cd(this.source,hE(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=w.MERGE}operationForChild(e){if(!hP(this.path))return eh(hT(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cp(this.source,hE(this.path),this.children);{let t=this.children.subtree(new hb(e));return t.isEmpty()?null:t.value?new cd(this.source,hI(),t.value):new cp(this.source,hI(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(hP(e))return this.isFullyInitialized()&&!this.filtered_;let t=hT(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function cg(e,t,i,n,r,s){let o=n.filter(e=>e.type===i);o.sort((t,i)=>(function(e,t,i){if(null==t.childName||null==i.childName)throw ec("Should only compare child_ events.");let n=new hj(t.childName,t.snapshotNode),r=new hj(i.childName,i.snapshotNode);return e.index_.compare(n,r)})(e,t,i)),o.forEach(i=>{let n=("value"===i.type||"child_removed"===i.type||(i.prevName=s.getPredecessorChildName(i.childName,i.snapshotNode,e.index_)),i);r.forEach(r=>{r.respondsTo(i.type)&&t.push(r.createEvent(n,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(e,t){return{eventCache:e,serverCache:t}}function c_(e,t,i,n){return cm(new cf(t,i,n),e.serverCache)}function cy(e,t,i,n){return cm(e.eventCache,new cf(t,i,n))}function cv(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function cw(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const cb=()=>(h||(h=new hz(lQ)),h);class cI{constructor(e,t=cb()){this.value=e,this.children=t}static fromObject(e){let t=new cI(null);return l2(e,(e,i)=>{t=t.set(new hb(e),i)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:hI(),value:this.value};if(hP(e))return null;{let i=hT(e),n=this.children.get(i);if(null===n)return null;{let r=n.findRootMostMatchingPathAndValue(hE(e),t);return null!=r?{path:hN(new hb(i),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(hP(e))return this;{let t=hT(e),i=this.children.get(t);return null!==i?i.subtree(hE(e)):new cI(null)}}set(e,t){if(hP(e))return new cI(t,this.children);{let i=hT(e),n=(this.children.get(i)||new cI(null)).set(hE(e),t),r=this.children.insert(i,n);return new cI(this.value,r)}}remove(e){if(hP(e))return this.children.isEmpty()?new cI(null):new cI(null,this.children);{let t=hT(e),i=this.children.get(t);if(!i)return this;{let n;let r=i.remove(hE(e));return(n=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&n.isEmpty())?new cI(null):new cI(this.value,n)}}}get(e){if(hP(e))return this.value;{let t=hT(e),i=this.children.get(t);return i?i.get(hE(e)):null}}setTree(e,t){if(hP(e))return t;{let i;let n=hT(e),r=(this.children.get(n)||new cI(null)).setTree(hE(e),t);return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new cI(this.value,i)}}fold(e){return this.fold_(hI(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((n,r)=>{i[n]=r.fold_(hN(e,n),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,hI(),t)}findOnPath_(e,t,i){let n=!!this.value&&i(t,this.value);if(n)return n;if(hP(e))return null;{let n=hT(e),r=this.children.get(n);return r?r.findOnPath_(hE(e),hN(t,n),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,hI(),t)}foreachOnPath_(e,t,i){if(hP(e))return this;{this.value&&i(t,this.value);let n=hT(e),r=this.children.get(n);return r?r.foreachOnPath_(hE(e),hN(t,n),i):new cI(null)}}foreach(e){this.foreach_(hI(),e)}foreach_(e,t){this.children.inorderTraversal((i,n)=>{n.foreach_(hN(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.writeTree_=e}static empty(){return new cT(new cI(null))}}function cC(e,t,i){if(hP(t))return new cT(new cI(i));{let n=e.writeTree_.findRootMostValueAndPath(t);if(null!=n){let r=n.path,s=n.value,o=hA(r,t);return s=s.updateChild(o,i),new cT(e.writeTree_.set(r,s))}{let n=new cI(i);return new cT(e.writeTree_.setTree(t,n))}}}function cE(e,t,i){let n=e;return l2(i,(e,i)=>{n=cC(n,hN(t,e),i)}),n}function cS(e,t){return hP(t)?cT.empty():new cT(e.writeTree_.setTree(t,new cI(null)))}function ck(e,t){return null!=cR(e,t)}function cR(e,t){let i=e.writeTree_.findRootMostValueAndPath(t);return null!=i?e.writeTree_.get(i.path).getChild(hA(i.path,t)):null}function cN(e){let t=[],i=e.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(hJ,(e,i)=>{t.push(new hj(e,i))}):e.writeTree_.children.inorderTraversal((e,i)=>{null!=i.value&&t.push(new hj(e,i.value))}),t}function cP(e,t){if(hP(t))return e;{let i=cR(e,t);return new cT(null!=i?new cI(i):e.writeTree_.subtree(t))}}function cA(e){return e.writeTree_.isEmpty()}function cO(e,t){return function e(t,i,n){if(null!=i.value)return n.updateChild(t,i.value);{let r=null;return i.children.inorderTraversal((i,s)=>{".priority"===i?(eh(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):n=e(hN(t,i),s,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(hN(t,".priority"),r)),n}}(hI(),e.writeTree_,t)}function cL(e){return e.visible}function cD(e,t,i){let n=cT.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)hL(i,t)?n=cC(n,e=hA(i,t),s.snap):hL(t,i)&&(e=hA(t,i),n=cC(n,hI(),s.snap.getChild(e)));else if(s.children){if(hL(i,t))n=cE(n,e=hA(i,t),s.children);else if(hL(t,i)){if(hP(e=hA(t,i)))n=cE(n,hI(),s.children);else{let t=eq(s.children,hT(e));if(t){let i=t.getChild(hE(e));n=cC(n,hI(),i)}}}}else throw ec("WriteRecord should have .snap or .children")}}return n}function cx(e,t,i,n,r){if(n||r){let s=cP(e.visibleWrites,t);return!r&&cA(s)?i:r||null!=i||ck(s,hI())?cO(cD(e.allWrites,function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(hL(e.path,t)||hL(t,e.path))},t),i||h4.EMPTY_NODE):null}{let n=cR(e.visibleWrites,t);if(null!=n)return n;{let n=cP(e.visibleWrites,t);return cA(n)?i:null!=i||ck(n,hI())?cO(n,i||h4.EMPTY_NODE):null}}}function cM(e,t,i,n){return cx(e.writeTree,e.treePath,t,i,n)}function cU(e,t){return function(e,t,i){let n=h4.EMPTY_NODE,r=cR(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(hJ,(e,t)=>{n=n.updateImmediateChild(e,t)}),n;if(!i)return cN(cP(e.visibleWrites,t)).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n;{let r=cP(e.visibleWrites,t);return i.forEachChild(hJ,(e,t)=>{let i=cO(cP(r,new hb(e)),t);n=n.updateImmediateChild(e,i)}),cN(r).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}}(e.writeTree,e.treePath,t)}function cF(e,t,i,n){return function(e,t,i,n,r){eh(n||r,"Either existingEventSnap or existingServerSnap must exist");let s=hN(t,i);if(ck(e.visibleWrites,s))return null;{let t=cP(e.visibleWrites,s);return cA(t)?r.getChild(i):cO(t,r.getChild(i))}}(e.writeTree,e.treePath,t,i,n)}function cj(e,t){var i,n;return i=e.writeTree,n=hN(e.treePath,t),cR(i.visibleWrites,n)}function cq(e,t,i){return function(e,t,i,n){let r=hN(t,i),s=cR(e.visibleWrites,r);return null!=s?s:n.isCompleteForChild(i)?cO(cP(e.visibleWrites,r),n.getNode().getImmediateChild(i)):null}(e.writeTree,e.treePath,t,i)}function cH(e,t){return cV(hN(e.treePath,t),e.writeTree)}function cV(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cB{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;eh("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),eh(".priority"!==i,"Only non-priority child changes can be tracked.");let n=this.changeMap.get(i);if(n){let r=n.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(i,h7(i,e.snapshotNode,n.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(i);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(i,{type:"child_removed",snapshotNode:n.oldSnap,childName:i});else if("child_changed"===t&&"child_added"===r)this.changeMap.set(i,{type:"child_added",snapshotNode:e.snapshotNode,childName:i});else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(i,h7(i,e.snapshotNode,n.oldSnap));else throw ec("Illegal combination of changes: "+e+" occurred after "+n)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}const cW=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}};class cz{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new cf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cq(this.writes_,e,t)}}getChildAfterChild(e,t,i){var n;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:cw(this.viewCache_),s=function(e,t,i,n,r,s,o){let a;let l=cP(e.visibleWrites,t),h=cR(l,hI());if(null!=h)a=h;else{if(null==i)return[];a=cO(l,i)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),i=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o),r=i.getNext();for(;r&&e.length<1;)0!==t(r,n)&&e.push(r),r=i.getNext();return e}}((n=this.writes_).writeTree,n.treePath,r,t,0,i,e);return 0===s.length?null:s[0]}}function c$(e,t,i,n,r,s){let o=t.eventCache;if(null!=cj(n,i))return t;{let a,l;if(hP(i)){if(eh(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let i=cw(t),r=cU(n,i instanceof h4?i:h4.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let i=cM(n,cw(t));a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}}else{let h=hT(i);if(".priority"===h){eh(1===hC(i),"Can't have a priority with additional path components");let r=o.getNode(),s=cF(n,i,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let c;let u=hE(i);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=cF(n,i,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=cq(n,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,r,s):o.getNode()}}return c_(t,a,o.isFullyInitialized()||hP(i),e.filter.filtersNodes())}}function cK(e,t,i,n,r,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(hP(i))l=c.updateFullNode(h.getNode(),n,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(i,n);l=c.updateFullNode(h.getNode(),e,null)}else{let e=hT(i);if(!h.isCompleteForPath(i)&&hC(i)>1)return t;let r=hE(i),s=h.getNode().getImmediateChild(e).updateChild(r,n);l=".priority"===e?c.updatePriority(h.getNode(),s):c.updateChild(h.getNode(),e,s,r,cW,null)}let u=cy(t,l,h.isFullyInitialized()||hP(i),c.filtersNodes()),d=new cz(r,u,s);return c$(e,u,i,r,d,a)}function cG(e,t,i,n,r,s,o){let a,l;let h=t.eventCache,c=new cz(r,t,s);if(hP(i))l=e.filter.updateFullNode(t.eventCache.getNode(),n,o),a=c_(t,l,!0,e.filter.filtersNodes());else{let r=hT(i);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),n),a=c_(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=hE(i),u=h.getNode().getImmediateChild(r);if(hP(l))s=n;else{let e=c.getCompleteChild(r);s=null!=e?".priority"===hS(l)&&e.getChild(hR(l)).isEmpty()?e:e.updateChild(l,n):h4.EMPTY_NODE}a=u.equals(s)?t:c_(t,e.filter.updateChild(h.getNode(),r,s,l,c,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function cY(e,t){return e.eventCache.isCompleteForChild(t)}function cX(e,t,i){return i.foreach((e,i)=>{t=t.updateChild(e,i)}),t}function cJ(e,t,i,n,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=hP(i)?n:new cI(null).setTree(i,n);let c=t.serverCache.getNode();return l.children.inorderTraversal((i,n)=>{if(c.hasChild(i)){let l=cX(e,t.serverCache.getNode().getImmediateChild(i),n);h=cK(e,h,new hb(i),l,r,s,o,a)}}),l.children.inorderTraversal((i,n)=>{let l=!t.serverCache.isCompleteForChild(i)&&null===n.value;if(!c.hasChild(i)&&!l){let l=cX(e,t.serverCache.getNode().getImmediateChild(i),n);h=cK(e,h,new hb(i),l,r,s,o,a)}}),h}function cQ(e,t,i,n){var r,s;t.type===w.MERGE&&null!==t.source.queryId&&(eh(cw(e.viewCache_),"We should always have a full cache before handling merges"),eh(cv(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,i,n,r){let s,o;let a=new cB;if(i.type===w.OVERWRITE)i.source.fromUser?s=cG(e,t,i.path,i.snap,n,r,a):(eh(i.source.fromServer,"Unknown source."),o=i.source.tagged||t.serverCache.isFiltered()&&!hP(i.path),s=cK(e,t,i.path,i.snap,n,r,o,a));else if(i.type===w.MERGE){var l,h;let c;i.source.fromUser?(l=i.path,h=i.children,c=t,h.foreach((i,s)=>{let o=hN(l,i);cY(t,hT(o))&&(c=cG(e,c,o,s,n,r,a))}),h.foreach((i,s)=>{let o=hN(l,i);cY(t,hT(o))||(c=cG(e,c,o,s,n,r,a))}),s=c):(eh(i.source.fromServer,"Unknown source."),o=i.source.tagged||t.serverCache.isFiltered(),s=cJ(e,t,i.path,i.children,n,r,o,a))}else if(i.type===w.ACK_USER_WRITE)s=i.revert?function(e,t,i,n,r,s){let o;if(null!=cj(n,i))return t;{let a;let l=new cz(n,t,r),h=t.eventCache.getNode();if(hP(i)||".priority"===hT(i)){let i;if(t.serverCache.isFullyInitialized())i=cM(n,cw(t));else{let e=t.serverCache.getNode();eh(e instanceof h4,"serverChildren would be complete if leaf node"),i=cU(n,e)}a=e.filter.updateFullNode(h,i,s)}else{let r=hT(i),c=cq(n,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=h.getImmediateChild(r)),(a=null!=c?e.filter.updateChild(h,r,c,hE(i),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,h4.EMPTY_NODE,hE(i),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=cM(n,cw(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=cj(n,hI()),c_(t,a,o,e.filter.filtersNodes())}}(e,t,i.path,n,r,a):function(e,t,i,n,r,s,o){if(null!=cj(r,i))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=n.value){if(hP(i)&&l.isFullyInitialized()||l.isCompleteForPath(i))return cK(e,t,i,l.getNode().getChild(i),r,s,a,o);if(!hP(i))return t;{let n=new cI(null);return l.getNode().forEachChild(hV,(e,t)=>{n=n.set(new hb(e),t)}),cJ(e,t,i,n,r,s,a,o)}}{let h=new cI(null);return n.foreach((e,t)=>{let n=hN(i,e);l.isCompleteForPath(n)&&(h=h.set(e,l.getNode().getChild(n)))}),cJ(e,t,i,h,r,s,a,o)}}(e,t,i.path,i.affectedTree,n,r,a);else if(i.type===w.LISTEN_COMPLETE)s=function(e,t,i,n,r){let s=t.serverCache;return c$(e,cy(t,s.getNode(),s.isFullyInitialized()||hP(i),s.isFiltered()),i,n,cW,r)}(e,t,i.path,n,a);else throw ec("Unknown operation type: "+i.type);let c=a.getChanges();return function(e,t,i){let n=t.eventCache;if(n.isFullyInitialized()){let r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=cv(e);!(i.length>0)&&e.eventCache.isFullyInitialized()&&(!r||n.getNode().equals(s))&&n.getNode().getPriority().equals(s.getPriority())||i.push({type:"value",snapshotNode:cv(t)})}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,i,n);return r=e.processor_,eh((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),eh(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),eh(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,function(e,t,i,n){let r=n?[n]:e.eventRegistrations_;return function(e,t,i,n){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var i;s.push((i=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:i}))}}),cg(e,r,"child_removed",t,n,i),cg(e,r,"child_added",t,n,i),cg(e,r,"child_moved",s,n,i),cg(e,r,"child_changed",t,n,i),cg(e,r,"value",t,n,i),r}(e.eventGenerator_,t,i,r)}(e,a.changes,a.viewCache.eventCache.getNode(),null)}function cZ(e,t,i,n){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return eh(null!=s,"SyncTree gave us an op for an invalid query."),cQ(s,t,i,n)}{let r=[];for(let s of e.views.values())r=r.concat(cQ(s,t,i,n));return r}}function c0(e,t){let i=null;for(let n of e.views.values())i=i||function(e,t){let i=cw(e.viewCache_);return i&&(e.query._queryParams.loadsAllData()||!hP(t)&&!i.getImmediateChild(hT(t)).isEmpty())?i.getChild(t):null}(n,t);return i}class c1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new cI(null),this.pendingWriteTree_={visibleWrites:cT.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function c2(e,t,i=!1){let n=function(e,t){for(let i=0;i<e.allWrites.length;i++){let n=e.allWrites[i];if(n.writeId===t)return n}return null}(e.pendingWriteTree_,t);if(!function(e,t){let i=e.allWrites.findIndex(e=>e.writeId===t);eh(i>=0,"removeWrite called with nonexistent writeId.");let n=e.allWrites[i];e.allWrites.splice(i,1);let r=n.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=i&&function(e,t){if(e.snap)return hL(e.path,t);for(let i in e.children)if(e.children.hasOwnProperty(i)&&hL(hN(e.path,i),t))return!0;return!1}(t,n.path)?r=!1:hL(n.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=cD(e.allWrites,cL,hI()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):n.snap?e.visibleWrites=cS(e.visibleWrites,n.path):l2(n.children,t=>{e.visibleWrites=cS(e.visibleWrites,hN(n.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new cI(null);return null!=n.snap?t=t.set(hI(),!0):l2(n.children,e=>{t=t.set(new hb(e),!0)}),c6(e,new cu(n.path,t,i))}}function c4(e,t,i){return c6(e,new cd(ch(),t,i))}function c9(e,t,i){let n=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,i)=>{let n=c0(i,hA(e,t));if(n)return n});return cx(n,t,r,i,!0)}function c6(e,t){var i;return function e(t,i,n,r){if(hP(t.path))return function e(t,i,n,r){let s=i.get(hI());null==n&&null!=s&&(n=c0(s,hI()));let o=[];return i.children.inorderTraversal((i,s)=>{let a=n?n.getImmediateChild(i):null,l=cH(r,i),h=t.operationForChild(i);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(cZ(s,t,r,n))),o}(t,i,n,r);{let s=i.get(hI());null==n&&null!=s&&(n=c0(s,hI()));let o=[],a=hT(t.path),l=t.operationForChild(a),h=i.children.get(a);if(h&&l){let t=n?n.getImmediateChild(a):null,i=cH(r,a);o=o.concat(e(l,h,t,i))}return s&&(o=o.concat(cZ(s,t,r,n))),o}}(t,e.syncPointTree_,null,(i=e.pendingWriteTree_,cV(hI(),i)))}function c5(e,t){return e.tagToQueryMap.get(t)}function c3(e){let t=e.indexOf("$");return eh(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new hb(e.substr(0,t))}}function c7(e,t,i){let n=e.syncPointTree_.get(t);return eh(n,"Missing sync point for query tag that we're tracking"),cZ(n,i,cV(t,e.pendingWriteTree_),null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c8{constructor(e){this.node_=e}getImmediateChild(e){return new c8(this.node_.getImmediateChild(e))}node(){return this.node_}}class ue{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=hN(this.path_,e);return new ue(this.syncTree_,t)}node(){return c9(this.syncTree_,this.path_)}}const ut=function(e,t,i){return e&&"object"==typeof e?(eh(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?ui(e[".sv"],t,i):"object"==typeof e[".sv"]?un(e[".sv"],t):void eh(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},ui=function(e,t,i){if("timestamp"===e)return i.timestamp;eh(!1,"Unexpected server value: "+e)},un=function(e,t,i){e.hasOwnProperty("increment")||eh(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let n=e.increment;"number"!=typeof n&&eh(!1,"Unexpected increment value: "+n);let r=t.node();if(eh(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;let s=r.getValue();return"number"!=typeof s?n:s+n};function ur(e,t,i){let n;let r=ut(e.getPriority().val(),t.getImmediateChild(".priority"),i);if(!e.isLeafNode())return n=e,r!==e.getPriority().val()&&(n=n.updatePriority(new hX(r))),e.forEachChild(hJ,(e,r)=>{let s=ur(r,t.getImmediateChild(e),i);s!==r&&(n=n.updateImmediateChild(e,s))}),n;{let n=ut(e.getValue(),t,i);return n!==e.getValue()||r!==e.getPriority().val()?new hX(n,h6(r)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function uo(e,t){let i=t instanceof hb?t:new hb(t),n=e,r=hT(i);for(;null!==r;){let e=eq(n.node.children,r)||{children:{},childCount:0};n=new us(r,n,e),r=hT(i=hE(i))}return n}function ua(e){return e.node.value}function ul(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,i,n){let r=void 0===ua(n)&&!uh(n),s=ej(t.node.children,i);r&&s?(delete t.node.children[i],t.node.childCount--,e(t)):r||s||(t.node.children[i]=n.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function uh(e){return e.node.childCount>0}function uc(e,t){l2(e.node.children,(i,n)=>{t(new us(i,e,n))})}function uu(e){return new hb(null===e.parent?e.name:uu(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=/[\[\].#$\/\u0000-\u001F\u007F]/,up=/[\[\].#$\u0000-\u001F\u007F]/,uf=function(e){return"string"==typeof e&&0!==e.length&&!ud.test(e)},ug=function(e){var t;return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),"string"==typeof(t=e)&&0!==t.length&&!up.test(t)},um=function(e,t,i){let n=i instanceof hb?new hD(i,e):i;if(void 0===t)throw Error(e+"contains undefined "+hM(n));if("function"==typeof t)throw Error(e+"contains a function "+hM(n)+" with contents = "+t.toString());if(lK(t))throw Error(e+"contains "+t.toString()+" "+hM(n));if("string"==typeof t&&t.length>10485760/3&&eQ(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+hM(n)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let i=!1,r=!1;if(l2(t,(t,s)=>{if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!uf(t)))throw Error(e+" contains an invalid key ("+t+") "+hM(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=eQ(t),hx(n),um(e,s,n),function(e){let t=e.parts_.pop();e.byteLength_-=eQ(t),e.parts_.length>0&&(e.byteLength_-=1)}(n)}),i&&r)throw Error(e+' contains ".value" child '+hM(n)+" in addition to actual children.")}},u_=function(e,t){let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!uf(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&!ug(i))throw Error(`${e} failed: url argument must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uv(e,t,i){!function(e,t){let i=null;for(let n=0;n<t.length;n++){let r=t[n],s=r.getPath();null===i||hO(s,i.path)||(e.eventLists_.push(i),i=null),null===i&&(i={events:[],path:s}),i.events.push(r)}i&&e.eventLists_.push(i)}(e,i),function(e,t){e.recursionDepth_++;let i=!0;for(let n=0;n<e.eventLists_.length;n++){let r=e.eventLists_[n];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let i=e.events[t];if(null!==i){e.events[t]=null;let n=i.getEventRunner();lF&&lH("event: "+i.toString()),l5(n)}}}(e.eventLists_[n]),e.eventLists_[n]=null):i=!1)}i&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>hL(e,t)||hL(t,e))}class uw{constructor(e,t,i,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cr(),this.transactionQueueTree_=new us,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ub(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new hb(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function uI(e,t,i,n,r){e.dataUpdateCount++;let s=new hb(t);i=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,i):i;let o=[];if(r){if(n){let t=eV(i,e=>h6(e));o=function(e,t,i,n){let r=c5(e,n);if(!r)return[];{let n=c3(r),s=n.path,o=n.queryId,a=hA(s,t),l=cI.fromObject(i);return c7(e,s,new cp(cc(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=h6(i);o=function(e,t,i,n){let r=c5(e,n);if(null==r)return[];{let n=c3(r),s=n.path,o=n.queryId,a=hA(s,t);return c7(e,s,new cd(cc(o),a,i))}}(e.serverSyncTree_,s,t,r)}}else if(n){let t=eV(i,e=>h6(e));o=function(e,t,i){let n=cI.fromObject(i);return c6(e,new cp(ch(),t,n))}(e.serverSyncTree_,s,t)}else{let t=h6(i);o=c4(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=uk(e,s)),uv(e.eventQueue_,a,o)}function uT(e,t){uC(e,"connected",t),!1===t&&function(e){uE(e,"onDisconnectEvents");let t=ub(e),i=cr();cs(e.onDisconnect_,hI(),(n,r)=>{let s=ur(r,new ue(e.serverSyncTree_,n),t);!function e(t,i,n){if(hP(i))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(i,n);else{let r=hT(i);t.children.has(r)||t.children.set(r,cr()),e(t.children.get(r),i=hE(i),n)}}(i,n,s)});let n=[];cs(i,hI(),(t,i)=>{n=n.concat(c4(e.serverSyncTree_,t,i));let r=function(e,t){let i=uu(uR(e,t)),n=uo(e.transactionQueueTree_,t);return function(e,t,i){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(n,t=>{uA(e,t)}),uA(e,n),function e(t,i,n,r){n&&!r&&i(t),uc(t,t=>{e(t,i,!0,r)}),n&&r&&i(t)}(n,t=>{uA(e,t)}),i}(e,t);uk(e,r)}),e.onDisconnect_=cr(),uv(e.eventQueue_,hI(),n)}(e)}function uC(e,t,i){let n=new hb("/.info/"+t),r=h6(i);e.infoData_.updateSnapshot(n,r);let s=c4(e.infoSyncTree_,n,r);uv(e.eventQueue_,n,s)}function uE(e,...t){let i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),lH(i,...t)}function uS(e,t,i){return c9(e.serverSyncTree_,t,i)||h4.EMPTY_NODE}function uk(e,t){let i=uR(e,t),n=uu(i),r=uN(e,i);return function(e,t,i){if(0===t.length)return;let n=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=hA(i,a.path),h=!1,c;if(eh(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,r=r.concat(c2(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",r=r.concat(c2(e.serverSyncTree_,a.currentWriteId,!0));else{let i=uS(e,a.path,s);a.currentInputSnapshot=i;let n=t[o].update(i.val());if(void 0!==n){um("transaction failed: Data returned ",n,a.path);let t=h6(n);"object"==typeof n&&null!=n&&ej(n,".priority")||(t=t.updatePriority(i.getPriority()));let o=a.currentWriteId,l=ub(e),h=ur(t,new c8(i),l);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=h,a.currentWriteId=e.nextWriteId_++,s.splice(s.indexOf(o),1),r=(r=r.concat(function(e,t,i,n,r){var s,o;return(s=e.pendingWriteTree_,o=r,eh(n>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:n,visible:o}),o&&(s.visibleWrites=cC(s.visibleWrites,t,i)),s.lastWriteId=n,r)?c6(e,new cd(cl(),t,i)):[]}(e.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally))).concat(c2(e.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(c2(e.serverSyncTree_,a.currentWriteId,!0))}}uv(e.eventQueue_,i,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===c?n.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):n.push(()=>t[o].onComplete(Error(c),!1,null))))}uP(e,e.transactionQueueTree_);for(let e=0;e<n.length;e++)l5(n[e]);(function e(t,i=t.transactionQueueTree_){if(i||uP(t,i),ua(i)){let n=uN(t,i);eh(n.length>0,"Sending zero length transaction queue"),n.every(e=>0===e.status)&&function(t,i,n){let r=uS(t,i,n.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<n.length;e++){let t=n[e];eh(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=hA(i,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(i.toString(),a,r=>{uE(t,"transaction put response",{path:i.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<n.length;e++)n[e].status=2,s=s.concat(c2(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();uP(t,uo(t.transactionQueueTree_,i)),e(t,t.transactionQueueTree_),uv(t.eventQueue_,i,s);for(let e=0;e<r.length;e++)l5(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{lz("transaction at "+i.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}uk(t,i)}},o)}(t,uu(i),n)}else uh(i)&&uc(i,i=>{e(t,i)})})(e,e.transactionQueueTree_)}(e,r,n),n}function uR(e,t){let i;let n=e.transactionQueueTree_;for(i=hT(t);null!==i&&void 0===ua(n);)n=uo(n,i),i=hT(t=hE(t));return n}function uN(e,t){let i=[];return function e(t,i,n){let r=ua(i);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);uc(i,i=>{e(t,i,n)})}(e,t,i),i.sort((e,t)=>e.order-t.order),i}function uP(e,t){let i=ua(t);if(i){let e=0;for(let t=0;t<i.length;t++)2!==i[t].status&&(i[e]=i[t],e++);i.length=e,ul(t,i.length>0?i:void 0)}uc(t,t=>{uP(e,t)})}function uA(e,t){let i=ua(t);if(i){let n=[],r=[],s=-1;for(let t=0;t<i.length;t++)3===i[t].status||(1===i[t].status?(eh(s===t-1,"All SENT items should be at beginning of queue."),s=t,i[t].status=3,i[t].abortReason="set"):(eh(0===i[t].status,"Unexpected transaction status in abort"),i[t].unwatcher(),r=r.concat(c2(e.serverSyncTree_,i[t].currentWriteId,!0)),i[t].onComplete&&n.push(i[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?ul(t,void 0):i.length=s+1,uv(e.eventQueue_,uu(t),r);for(let e=0;e<n.length;e++)l5(n[e])}}const uO=function(e,t){let i=uL(e),n=i.namespace;"firebase.com"===i.domain&&lW(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===i.domain||lW("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||l$();let r="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new hr(i.host,i.secure,n,r,t,"",n!==i.subdomain),path:new hb(i.pathString)}},uL=function(e){let t="",i="",n="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",i=e.split("/");for(let e=0;e<i.length;e++)if(i[e].length>0){let n=i[e];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(e){}t+="/"+n}return t}(e.substring(c,u)));let d=function(e){let t={};for(let i of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===i.length)continue;let n=i.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):lz(`Invalid query segment '${i}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())i="localhost";else if(p.split(".").length<=2)i=p;else{let e=t.indexOf(".");n=t.substring(0,e).toLowerCase(),i=t.substring(e+1),s=n}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:i,subdomain:n,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,t,i,n){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=n}get key(){return hP(this._path)?null:hS(this._path)}get ref(){return new ux(this._repo,this._path)}get _queryIdentifier(){let e=l0(ct(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return ct(this._queryParams)}isEqual(e){if(!((e=eZ(e))instanceof uD))return!1;let t=this._repo===e._repo,i=hO(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&i&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let i=e.pieceNum_;i<e.pieces_.length;i++)""!==e.pieces_[i]&&(t+="/"+encodeURIComponent(String(e.pieces_[i])));return t||"/"}(this._path)}}class ux extends uD{constructor(e,t){super(e,t,new h8,!1)}get parent(){let e=hR(this._path);return null===e?null:new ux(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}eh(!c,"__referenceConstructor has already been defined"),c=ux,eh(!u,"__referenceConstructor has already been defined"),u=ux;const uM={};class uU{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,i){if(e.stats_=hh(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ci(e.repoInfo_,(t,i,n,r)=>{uI(e,t,i,n,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>uT(e,!0),0);else{if(null!=i){if("object"!=typeof i)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{ex(i)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new hF(e.repoInfo_,t,(t,i,n,r)=>{uI(e,t,i,n,r)},t=>{uT(e,t)},t=>{l2(t,(t,i)=>{uC(e,t,i)})},e.authTokenProvider_,e.appCheckProvider_,i),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let i=e.toString();return hl[i]||(hl[i]=t()),hl[i]}(e.repoInfo_,()=>new ca(e.stats_,e.server_)),e.infoData_=new cn,e.infoSyncTree_=new c1({startListening:(t,i,n,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=c4(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),uC(e,"connected",!1),e.serverSyncTree_=new c1({startListening:(t,i,n,r)=>(e.server_.listen(t,n,i,(i,n)=>{let s=r(i,n);uv(e.eventQueue_,t._path,s)}),[]),stopListening:(t,i)=>{e.server_.unlisten(t,i)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ux(this._repo,hI())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let i=uM[t];i&&i[e.key]===e||lW(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&lW("Cannot call "+e+" on a deleted database.")}}hF.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},hF.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},lR=tE,tb(new e0("database",(e,{instanceIdentifier:t})=>(function(e,t,i,n,r){var s,o;let a,l,h,c,u=n||e.options.databaseURL;void 0===u&&(e.options.projectId||lW("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lH("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=uO(u,r),p=d.repoInfo;void 0!==X&&X.env&&(h=X.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(c=!0,p=(d=uO(u=`http://${h}?ns=${p.namespace}`,r)).repoInfo):c=!d.repoInfo.secure;let f=r&&c?new he(he.OWNER):new l8(e.name,e.options,t);return u_("Invalid Firebase Database URL",d),hP(d.path)||lW("Database URL must point to the root of a Firebase Database (not including a child path)."),new uU((s=p,o=new l7(e.name,i),(a=uM[e.name])||(a={},uM[e.name]=a),(l=a[s.toURLString()])&&lW("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new uw(s,!1,f,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),tR(lS,lk,void 0),tR(lS,lk,"esm2017");const uF=tS({apiKey:"AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU",authDomain:"book-project-8a976.firebaseapp.com",projectId:"book-project-8a976",storageBucket:"book-project-8a976.appspot.com",messagingSenderId:"595782127929",appId:"1:595782127929:web:e819e67d1654c476ec98e8"});!function(e,t){let i=tI("object"==typeof e?e:tk(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!i._initialized){let e=eT("firestore");e&&function(e,t,i,n={}){var r;let s=(e=function(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new aQ(aJ.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let i=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let i=(t=e).constructor?t.constructor.name:null;return i?`a custom ${i} object`:"an object"}}return"function"==typeof e?"a function":aX()}(e);throw new aQ(aJ.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return e}(e,lT))._getSettings(),o=`${t}:${i}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&function(e){if(a$.logLevel<=rT.WARN){let t=[].map(aY);a$.warn(`Firestore (${az}): ${e}`,...t)}}("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,i;if("string"==typeof n.mockUserToken)t=n.mockUserToken,i=aW.MOCK_USER;else{t=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[em(JSON.stringify({alg:"none",type:"JWT"})),em(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new aQ(aJ.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new aW(s)}e._authCredentials=new a2(new a0(t,i))}}(i,...e)}}(uF);const uj=function(e=tk()){let t=tI(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let i=tI(e,"auth");if(i.isInitialized()){let e=i.getImmediate();if(eB(i.getOptions(),null!=t?t:{}))return e;tW(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:rs,persistence:[nx,ny,nv]}),n=eE("authTokenSyncURL");if(n){let e=rm(n);eZ(i).beforeAuthStateChanged(e,()=>e(i.currentUser)),eZ(i).onIdTokenChanged(t=>e(t),void 0,void 0)}let r=eI("auth");return r&&function(e,t,i){let n=eZ(e);tK(n._canInitEmulator,n,"emulator-config-failed"),tK(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let r=!!(null==i?void 0:i.disableWarnings),s=i$(t),{host:o,port:a}=function(e){let t=i$(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){let e=r[1];return{host:e,port:iK(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:iK(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(i,`http://${r}`),i}(uF),uq=async function(e,t,i){try{ng(uj,t,i).then(t=>{let i=t.user;console.log(i),alert(`Your account: ${e} has been created`)})}catch(e){e.code,e.message}};eZ(uj).onAuthStateChanged(e=>{e?console.log("User is signed in:",e):console.log("User is signed out")},void 0,void 0),document.querySelector(".form-wrapper");const uH=document.querySelector(".submit-btn"),uV=document.querySelector(".sign-up-form");document.querySelector(".au-modal-close");const uB=document.querySelector("#name"),uW=document.querySelector('input[type="email"]'),uz=document.querySelector('input[type="password"]');console.log(uH.textContent),uV.addEventListener("submit",e=>{e.preventDefault(),uH.textContent="Sign up";{let{value:e}=uB,{value:t}=uW,{value:i}=uz;""!==t&&""!==i&&""!==e&&uq(e,t,i)}});
//# sourceMappingURL=index.eda27e0b.js.map
