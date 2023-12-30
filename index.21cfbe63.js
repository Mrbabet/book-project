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
 */var X={},J=X={};function Q(){throw Error("setTimeout has not been defined")}function Z(){throw Error("clearTimeout has not been defined")}function ee(e){if(rb===setTimeout)return setTimeout(e,0);if((rb===Q||!rb)&&setTimeout)return rb=setTimeout,setTimeout(e,0);try{return rb(e,0)}catch(t){try{return rb.call(null,e,0)}catch(t){return rb.call(this,e,0)}}}!function(){try{rb="function"==typeof setTimeout?setTimeout:Q}catch(e){rb=Q}try{rI="function"==typeof clearTimeout?clearTimeout:Z}catch(e){rI=Z}}();var et=[],ei=!1,en=-1;function er(){ei&&rT&&(ei=!1,rT.length?et=rT.concat(et):en=-1,et.length&&es())}function es(){if(!ei){var e=ee(er);ei=!0;for(var t=et.length;t;){for(rT=et,et=[];++en<t;)rT&&rT[en].run();en=-1,t=et.length}rT=null,ei=!1,function(e){if(rI===clearTimeout)return clearTimeout(e);if((rI===Z||!rI)&&clearTimeout)return rI=clearTimeout,clearTimeout(e);try{rI(e)}catch(t){try{return rI.call(null,e)}catch(t){return rI.call(this,e)}}}(e)}}function eo(e,t){this.fun=e,this.array=t}function ea(){}J.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];et.push(new eo(e,t)),1!==et.length||ei||ee(es)},eo.prototype.run=function(){this.fun.apply(null,this.array)},J.title="browser",J.browser=!0,J.env={},J.argv=[],J.version="",J.versions={},J.on=ea,J.addListener=ea,J.once=ea,J.off=ea,J.removeListener=ea,J.removeAllListeners=ea,J.emit=ea,J.prependListener=ea,J.prependOnceListener=ea,J.listeners=function(e){return[]},J.binding=function(e){throw Error("process.binding is not supported")},J.cwd=function(){return"/"},J.chdir=function(e){throw Error("process.chdir is not supported")},J.umask=function(){return 0};const el={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},eh=function(e,t){if(!e)throw ec(t)},ec=function(e){return Error("Firebase Database ("+el.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},eu=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},ed=function(e){let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),n.push(i[h],i[c],i[u],i[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ed(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],s=t<e.length?i[e.charAt(t)]:0,o=++t<e.length?i[e.charAt(t)]:64,a=++t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new ef;let l=r<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ef extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(e){let t=eu(e);return ep.encodeByteArray(t,!0)},em=function(e){return eg(e).replace(/\./g,"")},e_=function(e){try{return ep.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},ey=()=>/**
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
 */const e9=[];(rv=rC||(rC={}))[rv.DEBUG=0]="DEBUG",rv[rv.VERBOSE=1]="VERBOSE",rv[rv.INFO=2]="INFO",rv[rv.WARN=3]="WARN",rv[rv.ERROR=4]="ERROR",rv[rv.SILENT=5]="SILENT";const e6={debug:rC.DEBUG,verbose:rC.VERBOSE,info:rC.INFO,warn:rC.WARN,error:rC.ERROR,silent:rC.SILENT},e5=rC.INFO,e3={[rC.DEBUG]:"log",[rC.VERBOSE]:"log",[rC.INFO]:"info",[rC.WARN]:"warn",[rC.ERROR]:"error"},e7=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=e3[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class e8{constructor(e){this.name=e,this._logLevel=e5,this._logHandler=e7,this._userLogHandler=null,e9.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in rC))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?e6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,rC.DEBUG,...e),this._logHandler(this,rC.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,rC.VERBOSE,...e),this._logHandler(this,rC.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,rC.INFO,...e),this._logHandler(this,rC.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,rC.WARN,...e),this._logHandler(this,rC.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,rC.ERROR,...e),this._logHandler(this,rC.ERROR,...e)}}const te=(e,t)=>t.some(t=>e instanceof t),tt=new WeakMap,ti=new WeakMap,tn=new WeakMap,tr=new WeakMap,ts=new WeakMap;let to={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return ti.get(e);if("objectStoreNames"===t)return e.objectStoreNames||tn.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ta(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ta(i){var n;if(i instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ta(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&tt.set(t,e)}).catch(()=>{}),ts.set(t,e),t}(i);if(tr.has(i))return tr.get(i);let r="function"==typeof(n=i)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(tl(this),e),ta(tt.get(this))}:function(...e){return ta(n.apply(tl(this),e))}:function(e,...t){let i=n.call(tl(this),e,...t);return tn.set(i,e.sort?e.sort():[e]),ta(i)}:(n instanceof IDBTransaction&&function(e){if(ti.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});ti.set(e,t)}(n),te(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,to):n;return r!==i&&(tr.set(i,r),ts.set(r,i)),r}const tl=e=>ts.get(e),th=["get","getKey","getAll","getAllKeys","count"],tc=["put","add","delete","clear"],tu=new Map;function td(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tu.get(t))return tu.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=tc.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||th.includes(i)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return tu.set(t,s),s}to={...ry=to,get:(e,t,i)=>td(e,t)||ry.get(e,t,i),has:(e,t)=>!!td(e,t)||ry.has(e,t)};/**
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
 */const tE="10.7.1";function tS(e,t={}){let i=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:t_,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw tT.create("bad-app-name",{appName:String(r)});if(i||(i=eC()),!i)throw tT.create("no-options");let s=tv.get(r);if(s){if(eB(i,s.options)&&eB(n,s.config))return s;throw tT.create("duplicate-app",{appName:r})}let o=new e4(r);for(let e of tw.values())o.addComponent(e);let a=new tC(i,n,o);return tv.set(r,a),a}function tk(e=t_){let t=tv.get(e);if(!t&&e===t_&&eC())return tS();if(!t)throw tT.create("no-app",{appName:e});return t}function tR(e,t,i){var n;let r=null!==(n=ty[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tm.warn(e.join(" "));return}tb(new e0(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const tN="firebase-heartbeat-store";let tP=null;function tA(){return tP||(tP=(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=ta(o);return n&&o.addEventListener("upgradeneeded",e=>{n(ta(o.result),e.oldVersion,e.newVersion,ta(o.transaction),e)}),i&&o.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tN)}}).catch(e=>{throw tT.create("idb-open",{originalErrorMessage:e.message})})),tP}async function tO(e){try{let t=await tA();return await t.transaction(tN).objectStore(tN).get(tD(e))}catch(e){if(e instanceof eA)tm.warn(e.message);else{let t=tT.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});tm.warn(t.message)}}}async function tL(e,t){try{let i=(await tA()).transaction(tN,"readwrite"),n=i.objectStore(tN);await n.put(t,tD(e)),await i.done}catch(e){if(e instanceof eA)tm.warn(e.message);else{let t=tT.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});tm.warn(t.message)}}}function tD(e){return`${e.name}!${e.options.appId}`}class tx{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tU(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=tM();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tM(),{heartbeatsToSend:i,unsentEntries:n}=function(e,t=1024){let i=[],n=e.slice();for(let r of e){let e=i.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),tF(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),tF(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),r=em(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function tM(){return new Date().toISOString().substring(0,10)}class tU{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await tO(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tL(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tL(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function tF(e){return em(JSON.stringify({version:2,heartbeats:e})).length}function tj(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}function tq(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}tb(new e0("platform-logger",e=>new tp(e),"PRIVATE")),tb(new e0("heartbeat",e=>new tx(e),"PRIVATE")),tR(tf,tg,""),tR(tf,tg,"esm2017"),tR("fire-js",""),tR("firebase","10.7.1","app"),"function"==typeof SuppressedError&&SuppressedError;const tH=new eO("auth","Firebase",tq()),tV=new e8("@firebase/auth");function tB(e,...t){tV.logLevel<=rC.ERROR&&tV.error(`Auth (${tE}): ${e}`,...t)}/**
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
 */class ij{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iq(this),this.idTokenSubscription=new iq(this),this.beforeStateQueue=new iM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tH,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ib(t)),this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await iC.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(null==o?void 0:o.user)&&(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(tK(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await id(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?eZ(e):null;return t&&tK(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&tK(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ib(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new iF(await iU(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eO("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await im(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ib(e)||this._popupRedirectResolver;tK(t,this,"argument-error"),this.redirectPersistenceManager=await iC.create(this,[ib(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(tK(o,this,"internal-error"),o.then(()=>{s||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,i,n);return()=>{s=!0,r()}}{let i=e.addObserver(t);return()=>{s=!0,i()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return tK(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ix(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){tV.logLevel<=rC.WARN&&tV.warn(`Auth (${tE}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class iq{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let i=new eY(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return tK(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iH(e){return new Promise((t,i)=>{var n,r;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=tz("internal-error");t.customData=e,i(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(s)})}function iV(e){return`__${e}${Math.floor(1e6*Math.random())}`}class iB{constructor(e){this.type="recaptcha-enterprise",this.auth=eZ(e)}async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{it(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new ie(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function n(t,i,n){let r=window.grecaptcha;t8(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{i(this.auth).then(i=>{if(!t&&t8(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}iH("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function iW(e,t,i,n=!1){let r;let s=new iB(e);try{r=await s.verify(i)}catch(e){r=await s.verify(i,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function iz(e,t,i,n){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r||!r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async r=>{if("auth/missing-recaptcha-token"!==r.code)return Promise.reject(r);{console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let r=await iW(e,t,i,"getOobCode"===i);return n(e,r)}});{let r=await iW(e,t,i,"getOobCode"===i);return n(e,r)}}function i$(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function iK(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 */async function np(e,t,i=!1){let n="signIn",r=await nc(e,n,t),s=await na._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}async function nf(e,t){return np(eZ(e),t)}/**
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
 */async function ng(e){let t=eZ(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function nm(e,t,i){let n=eZ(e),r=iz(n,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",no),s=await r.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&ng(e),t}),o=await na._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}new WeakMap;const n_="__sak";/**
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
 */class ny{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(n_,"1"),this.storage.removeItem(n_),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class nv extends ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
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
 */function(){let e=ek();return ik(e)||iL(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=iD(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);(function(){let e=ek();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nv.type="LOCAL";/**
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
 */class nw extends ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nw.type="SESSION";/**
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
 */class nb{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new nb(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:i});let s=Array.from(r).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */function nI(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}nb.receivers=[];/**
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
 */class nT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let n,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=nI("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},i);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(h),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
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
 */function nC(){return window}/**
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
 */function nE(){return void 0!==nC().WorkerGlobalScope&&"function"==typeof nC().importScripts}async function nS(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
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
 */const nk="firebaseLocalStorageDb",nR="firebaseLocalStorage",nN="fbase_key";class nP{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nA(e,t){return e.transaction([nR],t?"readwrite":"readonly").objectStore(nR)}function nO(){let e=indexedDB.open(nk,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(nR,{keyPath:nN})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(nR)?t(i):(i.close(),await new nP(indexedDB.deleteDatabase(nk)).toPromise(),t(await nO()))})})}async function nL(e,t,i){return new nP(nA(e,!0).put({[nN]:t,value:i})).toPromise()}async function nD(e,t){let i=nA(e,!1).get(t),n=await new nP(i).toPromise();return void 0===n?null:n.value}function nx(e,t){return new nP(nA(e,!0).delete(t)).toPromise()}class nM{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await nO()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nb._getInstance(nE()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nS(),!this.activeServiceWorker)return;this.sender=new nT(this.activeServiceWorker);let i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await nO();return await nL(e,n_,"1"),await nx(e,n_),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>nL(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>nD(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nx(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new nP(nA(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;if(0!==e.length)for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function nU(e,t,i){var n,r,s;let o=await i.verify();try{let a;if(tK("string"==typeof o,e,"argument-error"),tK("recaptcha"===i.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a)return tK("enroll"===t.type,e,"internal-error"),(await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},t4(e,"POST","/v2/accounts/mfaEnrollment:start",t2(e,r)))).phoneSessionInfo.sessionInfo;{tK("signin"===t.type,e,"internal-error");let i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;return tK(i,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:o}},t4(e,"POST","/v2/accounts/mfaSignIn:start",t2(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await i2(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{i._reset()}}nM.type="LOCAL",iV("rcb"),new tJ(3e4,6e4);/**
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
 */class nF{constructor(e){this.providerId=nF.PROVIDER_ID,this.auth=eZ(e)}verifyPhoneNumber(e,t){return nU(this.auth,e,eZ(t))}static credential(e,t){return i3._fromVerification(e,t)}static credentialFromResult(e){return nF.credentialFromTaggedObject(e)}static credentialFromError(e){return nF.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?i3._fromTokenResponse(t,i):null}}nF.PROVIDER_ID="phone",nF.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class nj extends iG{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return i0(e,this._buildIdpRequest())}_linkToIdToken(e,t){return i0(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return i0(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nq(e){return np(e.auth,new nj(e),e.bypassAuthState)}function nH(e){let{auth:t,user:i}=e;return tK(i,t,"internal-error"),nd(i,new nj(e),e.bypassAuthState)}async function nV(e){let{auth:t,user:i}=e;return tK(i,t,"internal-error"),nu(i,new nj(e),e.bypassAuthState)}/**
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
 */class nB{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nq;case"linkViaPopup":case"linkViaRedirect":return nV;case"reauthViaPopup":case"reauthViaRedirect":return nH;default:tW(this.auth,"internal-error")}}resolve(e){this.pendingPromise||tG("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||tG("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nW=new tJ(2e3,1e4);class nz extends nB{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,nz.currentPopupAction&&nz.currentPopupAction.cancel(),nz.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return tK(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||tG("Popup operations only handle one event");let e=nI();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tz(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tz(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nz.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tz(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nW.get())};e()}}nz.currentPopupAction=null;const n$=new Map;class nK extends nB{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=n$.get(this.auth._key());if(!e){try{let t=await nG(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}n$.set(this.auth._key(),e)}return this.bypassAuthState||n$.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nG(e,t){let i=iT("pendingRedirect",t.config.apiKey,t.name),n=ib(e._redirectPersistence);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}function nY(e,t){n$.set(e._key(),t)}async function nX(e,t,i=!1){let n=eZ(e),r=t?ib(t):(tK(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new nK(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class nJ{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nZ(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nZ(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(tz(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nQ(e))}saveEventToCache(e){this.cachedEventUids.add(nQ(e)),this.lastProcessedEventTime=Date.now()}}function nQ(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function nZ({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function n0(e,t={}){return t4(e,"GET","/v1/projects",t)}/**
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
 */const n1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n2=/^https?/;async function n4(e){if(e.config.emulator)return;let{authorizedDomains:t}=await n0(e);for(let e of t)try{if(function(e){let t=tY(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!n2.test(i))return!1;if(n1.test(e))return n===e;let r=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}(e))return}catch(e){}tW(e,"unauthorized-domain")}/**
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
 */const n9=new tJ(3e4,6e4);function n6(){let e=nC().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let n5=null;/**
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
 */const n3=new tJ(5e3,15e3),n7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function re(e){let t=await (n5=n5||new Promise((t,i)=>{var n,r,s;function o(){n6(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{n6(),i(tz(e,"network-request-failed"))},timeout:n9.get()})}if(null===(r=null===(n=nC().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=nC().gapi)||void 0===s?void 0:s.load)o();else{let t=iV("iframefcb");return nC()[t]=()=>{gapi.load?o():i(tz(e,"network-request-failed"))},iH(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e))}}).catch(e=>{throw n5=null,e})),i=nC().gapi;return tK(i,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;tK(t.authDomain,e,"auth-domain-config-required");let i=t.emulator?tQ(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:tE},r=n8.get(e.config.apiHost);r&&(n.eid=r);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${ez(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n7,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({setHideOnLeave:!1});let r=tz(e,"network-request-failed"),s=nC().setTimeout(()=>{n(r)},n3.get());function o(){nC().clearTimeout(s),i(t)}t.ping(o).then(o,()=>{n(r)})}))}/**
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
 */const rt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ri{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}const rn=encodeURIComponent("fac");async function rr(e,t,i,n,r,s){tK(e.config.authDomain,e,"auth-domain-config-required"),tK(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:tE,eventId:r};if(t instanceof ne)for(let[i,n]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",eH(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[i]=n;if(t instanceof nt){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];let a=await e._getAppCheckToken(),l=a?`#${rn}=${encodeURIComponent(a)}`:"";return`${function({config:e}){return e.emulator?tQ(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${ez(o).slice(1)}${l}`}/**
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
 */const rs="webStorageSupport",ro=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nw,this._completeRedirectFn=nX,this._overrideRedirectResult=nY}async _openPopup(e,t,i,n){var r;(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager)||tG("_initialize() not called before _openPopup()");let s=await rr(e,t,i,tY(),n);return function(e,t,i,n=500,r=600){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},rt),{width:n.toString(),height:r.toString(),top:s,left:o}),h=ek().toLowerCase();i&&(a=iR(h)?"_blank":i),iS(h)&&(t=t||"http://localhost",l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=ek()){var t;return iL(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",a),new ri(null);let u=window.open(t||"",a,c);tK(u,e,"popup-blocked");try{u.focus()}catch(e){}return new ri(u)}(e,s,nI())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=await rr(e,t,i,tY(),n),nC().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(i||tG("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await re(e),i=new nJ(e);return t.register("authEvent",t=>(tK(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rs,{type:rs},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[rs];void 0!==r&&t(!!r),tW(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iD()||ik()||iL()}};class ra{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return tG("unexpected MultiFactorSessionType")}}}class rl extends ra{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rl(e)}_finalizeEnroll(e,t,i){return t4(e,"POST","/v2/accounts/mfaEnrollment:finalize",t2(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return t4(e,"POST","/v2/accounts/mfaSignIn:finalize",t2(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class rh extends ra{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new rh(t,void 0,e)}static _fromEnrollmentId(e,t){return new rh(t,e)}async _finalizeEnroll(e,t,i){return tK(void 0!==this.secret,e,"argument-error"),t4(e,"POST","/v2/accounts/mfaEnrollment:finalize",t2(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){tK(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let i={verificationCode:this.otp};return t4(e,"POST","/v2/accounts/mfaSignIn:finalize",t2(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}class rc{constructor(e,t,i,n,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new rc(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var i;let n=!1;return(ru(e)||ru(t))&&(n=!0),n&&(ru(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),ru(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ru(e){return void 0===e||(null==e?void 0:e.length)===0}var rd="@firebase/auth",rp="1.5.1";/**
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
 */class rf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){tK(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const rg=eE("authIdTokenMaxAge")||300;let rm=null;const r_=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>rg)return;let r=null==i?void 0:i.token;rm!==r&&(rm=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};rw="Browser",tb(new e0("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=i.options;tK(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});let a=new ij(i,n,r,{apiKey:s,authDomain:o,clientPlatform:rw,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ix(rw)});return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(ib);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),tb(new e0("auth-internal",e=>new rf(eZ(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),tR(rd,rp,/**
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
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(rw)),tR(rd,rp,"esm2017");var ry,rv,rw,rb,rI,rT,rC,rE,rS="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==b?b:"undefined"!=typeof self?self:{},rk={},rR=rR||{},rN=rS||self;function rP(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function rA(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function rO(e,t,i){return e.call.apply(e.bind,arguments)}function rL(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function rD(e,t,i){return(rD=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rO:rL).apply(null,arguments)}function rx(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function rM(e,t){function i(){}i.prototype=t.prototype,e.$=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.ac=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function rU(){this.s=this.s,this.o=this.o}rU.prototype.s=!1,rU.prototype.sa=function(){this.s||(this.s=!0,this.N())},rU.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rF=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return -1};function rj(e){let t=e.length;if(0<t){let i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function rq(e,t){for(let t=1;t<arguments.length;t++){let i=arguments[t];if(rP(i)){let t=e.length||0,n=i.length||0;e.length=t+n;for(let r=0;r<n;r++)e[t+r]=i[r]}else e.push(i)}}function rH(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}rH.prototype.h=function(){this.defaultPrevented=!0};var rV=function(){if(!rN.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};rN.addEventListener("test",e,t),rN.removeEventListener("test",e,t)}catch(e){}return e}();function rB(e){return/^[\s\xa0]*$/.test(e)}function rW(){var e=rN.navigator;return e&&(e=e.userAgent)?e:""}function rz(e){return -1!=rW().indexOf(e)}function r$(e){return r$[" "](e),e}r$[" "]=function(){};var rK=rz("Opera"),rG=rz("Trident")||rz("MSIE"),rY=rz("Edge"),rX=rY||rG,rJ=rz("Gecko")&&!(-1!=rW().toLowerCase().indexOf("webkit")&&!rz("Edge"))&&!(rz("Trident")||rz("MSIE"))&&!rz("Edge"),rQ=-1!=rW().toLowerCase().indexOf("webkit")&&!rz("Edge");function rZ(){var e=rN.document;return e?e.documentMode:void 0}e:{var r0,r1="",r2=(r0=rW(),rJ?/rv:([^\);]+)(\)|;)/.exec(r0):rY?/Edge\/([\d\.]+)/.exec(r0):rG?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(r0):rQ?/WebKit\/(\S+)/.exec(r0):rK?/(?:Version)[ \/]?(\S+)/.exec(r0):void 0);if(r2&&(r1=r2?r2[1]:""),rG){var r4=rZ();if(null!=r4&&r4>parseFloat(r1)){g=String(r4);break e}}g=r1}var r9=rN.document&&rG&&(rZ()||parseInt(g,10))||void 0;function r6(e,t){if(rH.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rJ){e:{try{r$(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:r5[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&r6.$.h.call(this)}}rM(r6,rH);var r5={2:"touch",3:"pen",4:"mouse"};r6.prototype.h=function(){r6.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var r3="closure_listenable_"+(1e6*Math.random()|0),r7=0;function r8(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.la=r,this.key=++r7,this.fa=this.ia=!1}function se(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function st(e,t,i){for(let n in e)t.call(i,e[n],n,e)}function si(e){let t={};for(let i in e)t[i]=e[i];return t}const sn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sr(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t])e[i]=n[i];for(let t=0;t<sn.length;t++)i=sn[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function ss(e){this.src=e,this.g={},this.h=0}function so(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],s=rF(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(se(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function sa(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&!!i==s.capture&&s.la==n)return r}return -1}ss.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=sa(e,t,n,r);return -1<o?(t=e[o],i||(t.ia=!1)):((t=new r8(t,this.src,s,!!n,r)).ia=i,e.push(t)),t};var sl="closure_lm_"+(1e6*Math.random()|0),sh={};function sc(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var o=rA(r)?!!r.capture:!!r,a=sf(e);if(a||(e[sl]=a=new ss(e)),(i=a.add(t,i,n,o,s)).proxy)return i;if(n=function e(t){return sp.call(e.src,e.listener,t)},i.proxy=n,n.src=e,n.listener=i,e.addEventListener)rV||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(sd(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return i}function su(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[r3])so(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(sd(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=sf(t))?(so(i,e),0==i.h&&(i.src=null,t[sl]=null)):se(e)}}}function sd(e){return e in sh?sh[e]:sh[e]="on"+e}function sp(e,t){if(e.fa)e=!0;else{t=new r6(t,this);var i=e.listener,n=e.la||e.src;e.ia&&su(e),e=i.call(n,t)}return e}function sf(e){return(e=e[sl])instanceof ss?e:null}var sg="__closure_events_fn_"+(1e9*Math.random()>>>0);function sm(e){return"function"==typeof e?e:(e[sg]||(e[sg]=function(t){return e.handleEvent(t)}),e[sg])}function s_(){rU.call(this),this.i=new ss(this),this.S=this,this.J=null}function sy(e,t){var i,n=e.J;if(n)for(i=[];n;n=n.J)i.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new rH(t,e);else if(t instanceof rH)t.target=t.target||e;else{var r=t;sr(t=new rH(n,e),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=t.g=i[s];r=sv(o,n,!0,t)&&r}if(r=sv(o=t.g=e,n,!0,t)&&r,r=sv(o,n,!1,t)&&r,i)for(s=0;s<i.length;s++)r=sv(o=t.g=i[s],n,!1,t)&&r}function sv(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==i){var a=o.listener,l=o.la||o.src;o.ia&&so(e.i,o),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}rM(s_,rU),s_.prototype[r3]=!0,s_.prototype.removeEventListener=function(e,t,i,n){!function e(t,i,n,r,s){if(Array.isArray(i))for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);else(r=rA(r)?!!r.capture:!!r,n=sm(n),t&&t[r3])?(t=t.i,(i=String(i).toString())in t.g&&-1<(n=sa(o=t.g[i],n,r,s))&&(se(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[i],t.h--))):t&&(t=sf(t))&&(i=t.g[i.toString()],t=-1,i&&(t=sa(i,n,r,s)),(n=-1<t?i[t]:null)&&su(n))}(this,e,t,i,n)},s_.prototype.N=function(){if(s_.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)se(i[n]);delete t.g[e],t.h--}}this.J=null},s_.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},s_.prototype.P=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var sw=rN.JSON.stringify,sb=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new sI,e=>e.reset());class sI{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let sT,sC=!1,sE=new class{constructor(){this.h=this.g=null}add(e,t){let i=sb.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}},sS=()=>{let e=rN.Promise.resolve(void 0);sT=()=>{e.then(sk)}};var sk=()=>{let e;for(var t;e=null,sE.g&&(e=sE.g,sE.g=sE.g.next,sE.g||(sE.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){rN.setTimeout(()=>{throw e},0)}(e)}sb.j(t),100>sb.h&&(sb.h++,t.next=sb.g,sb.g=t)}sC=!1};function sR(e,t){s_.call(this),this.h=e||1,this.g=t||rN,this.j=rD(this.qb,this),this.l=Date.now()}function sN(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function sP(e,t,i){if("function"==typeof e)i&&(e=rD(e,i));else if(e&&"function"==typeof e.handleEvent)e=rD(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:rN.setTimeout(e,t||0)}rM(sR,s_),(rE=sR.prototype).ga=!1,rE.T=null,rE.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),sy(this,"tick"),this.ga&&(sN(this),this.start()))}},rE.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},rE.N=function(){sR.$.N.call(this),sN(this),delete this.g};class sA extends rU{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=sP(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let i=t.h;t.h=null,t.m.apply(null,i)}(this)}N(){super.N(),this.g&&(rN.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sO(e){rU.call(this),this.h=e,this.g={}}rM(sO,rU);var sL=[];function sD(e,t,i,n){Array.isArray(i)||(i&&(sL[0]=i.toString()),i=sL);for(var r=0;r<i.length;r++){var s=function e(t,i,n,r,s){if(r&&r.once)return function e(t,i,n,r,s){if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=sm(n),t&&t[r3]?t.P(i,n,rA(r)?!!r.capture:!!r,s):sc(t,i,n,!0,r,s)}(t,i,n,r,s);if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=sm(n),t&&t[r3]?t.O(i,n,rA(r)?!!r.capture:!!r,s):sc(t,i,n,!1,r,s)}(t,i[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function sx(e){st(e.g,function(e,t){this.g.hasOwnProperty(t)&&su(e)},e),e.g={}}function sM(){this.g=!0}function sU(e,t,i,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i){for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}}return sw(i)}catch(e){return t}}(e,i)+(n?" "+n:"")})}sO.prototype.N=function(){sO.$.N.call(this),sx(this)},sO.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},sM.prototype.Ea=function(){this.g=!1},sM.prototype.info=function(){};var sF={},sj=null;function sq(){return sj=sj||new s_}function sH(e){rH.call(this,sF.Ta,e)}function sV(e){let t=sq();sy(t,new sH(t))}function sB(e,t){rH.call(this,sF.STAT_EVENT,e),this.stat=t}function sW(e){let t=sq();sy(t,new sB(t,e))}function sz(e,t){rH.call(this,sF.Ua,e),this.size=t}function s$(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return rN.setTimeout(function(){e()},t)}sF.Ta="serverreachability",rM(sH,rH),sF.STAT_EVENT="statevent",rM(sB,rH),sF.Ua="timingevent",rM(sz,rH);var sK={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sG={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sY(){}function sX(e){return e.h||(e.h=e.i())}function sJ(){}sY.prototype.h=null;var sQ={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sZ(){rH.call(this,"d")}function s0(){rH.call(this,"c")}function s1(){}function s2(e,t,i,n){this.l=e,this.j=t,this.m=i,this.W=n||1,this.U=new sO(this),this.P=s9,e=rX?125:void 0,this.V=new sR(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new s4}function s4(){this.i=null,this.g="",this.h=!1}rM(sZ,rH),rM(s0,rH),rM(s1,sY),s1.prototype.g=function(){return new XMLHttpRequest},s1.prototype.i=function(){return{}},_=new s1;var s9=45e3,s6={},s5={};function s3(e,t,i){e.L=1,e.A=og(oc(t)),e.u=i,e.S=!0,s7(e,null)}function s7(e,t){e.G=Date.now(),ot(e),e.B=oc(e.A);var i=e.B,n=e.W;Array.isArray(n)||(n=[String(n)]),oR(i.i,"t",n),e.o=0,i=e.l.J,e.h=new s4,e.g=a_(e.l,i?t:null,!e.u),0<e.O&&(e.M=new sA(rD(e.Pa,e,e.g),e.O)),sD(e.U,e.g,"readystatechange",e.nb),t=e.I?si(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),sV(),function(e,t,i,n,r,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+o})}(e.j,e.v,e.B,e.m,e.W,e.u)}function s8(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function oe(e,t,i){let n=!0,r;for(;!e.J&&e.o<i.length;)if((r=function(e,t){var i=e.o,n=t.indexOf("\n",i);return -1==n?s5:isNaN(i=Number(t.substring(i,n)))?s6:(n+=1)+i>t.length?s5:(t=t.slice(n,n+i),e.o=n+i,t)}(e,i))==s5){4==t&&(e.s=4,sW(14),n=!1),sU(e.j,e.m,null,"[Incomplete Response]");break}else if(r==s6){e.s=4,sW(15),sU(e.j,e.m,i,"[Invalid Chunk]"),n=!1;break}else sU(e.j,e.m,r,null),oo(e,r);s8(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=i.length||e.h.h||(e.s=1,sW(16),n=!1),e.i=e.i&&n,n?0<i.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),ah(t),t.M=!0,sW(11))):(sU(e.j,e.m,i,"[Invalid Chunked Response]"),os(e),or(e))}function ot(e){e.Y=Date.now()+e.P,oi(e,e.P)}function oi(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=s$(rD(e.lb,e),t)}function on(e){e.C&&(rN.clearTimeout(e.C),e.C=null)}function or(e){0==e.l.H||e.J||ad(e.l,e)}function os(e){on(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,sN(e.V),sx(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function oo(e,t){try{var i=e.l;if(0!=i.H&&(i.g==e||ox(i.i,e))){if(!e.K&&ox(i.i,e)&&3==i.H){try{var n=i.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(i.g.G+3e3<e.G)au(i),at(i);else break e}al(i),sW(18)}}else i.Fa=r[1],0<i.Fa-i.V&&37500>r[2]&&i.G&&0==i.A&&!i.v&&(i.v=s$(rD(i.ib,i),6e3));if(1>=oD(i.i)&&i.oa){try{i.oa()}catch(e){}i.oa=void 0}}else af(i,11)}else if((e.K||i.g==e)&&au(i),!rB(t))for(r=i.Ja.g.parse(t),t=0;t<r.length;t++){let a=r[t];if(i.V=a[0],a=a[1],2==i.H){if("c"==a[0]){i.K=a[1],i.pa=a[2];let t=a[3];null!=t&&(i.ra=t,i.l.info("VER="+i.ra));let r=a[4];null!=r&&(i.Ga=r,i.l.info("SVER="+i.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(oM(s,s.h),s.h=null))}if(n.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,of(n.I,n.F,e))}}if(i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-e.G,i.l.info("Handshake RTT: "+i.S+"ms")),(n=i).wa=am(n,n.J?n.pa:null,n.Y),e.K){oU(n.i,e);var o=n.L;o&&e.setTimeout(o),e.C&&(on(e),ot(e)),n.g=e}else aa(n);0<i.j.length&&an(i)}else"stop"!=a[0]&&"close"!=a[0]||af(i,7)}else 3==i.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?af(i,7):ae(i):"noop"!=a[0]&&i.h&&i.h.Aa(a),i.A=0)}}sV(4)}catch(e){}}function oa(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(rP(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(rP(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}for(let n in t=[],i=0,e)t[i++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(rP(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e),r=n.length,s=0;s<r;s++)t.call(void 0,n[s],i&&i[s],e)}(rE=s2.prototype).setTimeout=function(e){this.P=e},rE.nb=function(e){e=e.target;let t=this.M;t&&3==o9(e)?t.l():this.Pa(e)},rE.Pa=function(e){try{if(e==this.g)e:{let c=o9(this.g);var t=this.g.Ia();let u=this.g.da();if(!(3>c)&&(3!=c||rX||this.g&&(this.h.h||this.g.ja()||o6(this.g)))){this.J||4!=c||7==t||(8==t||0>=u?sV(3):sV(2)),on(this);var i=this.g.da();this.ca=i;t:if(s8(this)){var n=o6(this.g);e="";var r=n.length,s=4==o9(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){os(this),or(this);var o="";break t}this.h.i=new rN.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==i,function(e,t,i,n,r,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+s+" "+o})}(this.j,this.v,this.B,this.m,this.W,c,i),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rB(a)){var h=a;break t}}h=null}if(i=h)sU(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oo(this,i);else{this.i=!1,this.s=3,sW(12),os(this),or(this);break e}}this.S?(oe(this,c,o),rX&&this.i&&3==c&&(sD(this.U,this.V,"tick",this.mb),this.V.start())):(sU(this.j,this.m,o,null),oo(this,o)),4==c&&os(this),this.i&&!this.J&&(4==c?ad(this.l,this):(this.i=!1,ot(this)))}else(function(e){let t={};e=(e.g&&2<=o9(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(rB(e[n]))continue;var i=function(e){var t=1;e=e.split(":");let i=[];for(;0<t&&e.length;)i.push(e.shift()),t--;return e.length&&i.push(e.join(":")),i}(e[n]);let r=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();let s=t[r]||[];t[r]=s,s.push(i)}!function(e,t){for(let i in e)t.call(void 0,e[i],i,e)}(t,function(e){return e.join(", ")})})(this.g),400==i&&0<o.indexOf("Unknown SID")?(this.s=3,sW(12)):(this.s=0,sW(13)),os(this),or(this)}}}catch(e){}finally{}},rE.mb=function(){if(this.g){var e=o9(this.g),t=this.g.ja();this.o<t.length&&(on(this),oe(this,e,t),this.i&&4!=e&&ot(this))}},rE.cancel=function(){this.J=!0,os(this)},rE.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(sV(),sW(17)),os(this),this.s=2,or(this)):oi(this,this.Y-e)};var ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oh(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof oh){this.h=e.h,ou(this,e.j),this.s=e.s,this.g=e.g,od(this,e.m),this.l=e.l;var t=e.i,i=new oC;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),op(this,i),this.o=e.o}else e&&(t=String(e).match(ol))?(this.h=!1,ou(this,t[1]||"",!0),this.s=om(t[2]||""),this.g=om(t[3]||"",!0),od(this,t[4]),this.l=om(t[5]||"",!0),op(this,t[6]||"",!0),this.o=om(t[7]||"")):(this.h=!1,this.i=new oC(null,this.h))}function oc(e){return new oh(e)}function ou(e,t,i){e.j=i?om(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function od(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function op(e,t,i){var n,r;t instanceof oC?(e.i=t,n=e.i,(r=e.h)&&!n.j&&(oE(n),n.i=null,n.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(oS(this,t),oR(this,i,e))},n)),n.j=r):(i||(t=o_(t,oI)),e.i=new oC(t,e.h))}function of(e,t,i){e.i.set(t,i)}function og(e){return of(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function om(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function o_(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,oy),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function oy(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}oh.prototype.toString=function(){var e=[],t=this.j;t&&e.push(o_(t,ov,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(o_(t,ov,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(o_(i,"/"==i.charAt(0)?ob:ow,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",o_(i,oT)),e.join("")};var ov=/[#\/\?@]/g,ow=/[#\?:]/g,ob=/[#\?]/g,oI=/[#\?@]/g,oT=/#/g;function oC(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function oE(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function oS(e,t){oE(e),t=oN(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ok(e,t){return oE(e),t=oN(e,t),e.g.has(t)}function oR(e,t,i){oS(e,t),0<i.length&&(e.i=null,e.g.set(oN(e,t),rj(i)),e.h+=i.length)}function oN(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(rE=oC.prototype).add=function(e,t){oE(this),this.i=null,e=oN(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},rE.forEach=function(e,t){oE(this),this.g.forEach(function(i,n){i.forEach(function(i){e.call(t,i,n,this)},this)},this)},rE.ta=function(){oE(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let n=0;n<t.length;n++){let r=e[n];for(let e=0;e<r.length;e++)i.push(t[n])}return i},rE.Z=function(e){oE(this);let t=[];if("string"==typeof e)ok(this,e)&&(t=t.concat(this.g.get(oN(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},rE.set=function(e,t){return oE(this),this.i=null,ok(this,e=oN(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},rE.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},rE.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var n=t[i];let s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var r=s;""!==o[n]&&(r+="="+encodeURIComponent(String(o[n]))),e.push(r)}}return this.i=e.join("&")};var oP=class{constructor(e,t){this.g=e,this.map=t}};function oA(e){this.l=e||oO,e=rN.PerformanceNavigationTiming?0<(e=rN.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(rN.g&&rN.g.Ka&&rN.g.Ka()&&rN.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oO=10;function oL(e){return!!e.h||!!e.g&&e.g.size>=e.j}function oD(e){return e.h?1:e.g?e.g.size:0}function ox(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function oM(e,t){e.g?e.g.add(t):e.h=t}function oU(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function oF(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let i of e.g.values())t=t.concat(i.F);return t}return rj(e.i)}oA.prototype.cancel=function(){if(this.i=oF(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var oj=class{stringify(e){return rN.JSON.stringify(e,void 0)}parse(e){return rN.JSON.parse(e,void 0)}};function oq(){this.g=new oj}function oH(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function oV(e){this.l=e.ec||null,this.j=e.ob||!1}function oB(e,t){s_.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=oW,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rM(oV,sY),oV.prototype.g=function(){return new oB(this.l,this.j)},oV.prototype.i=(p={},function(){return p}),rM(oB,s_);var oW=0;function oz(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function o$(e){e.readyState=4,e.l=null,e.j=null,e.A=null,oK(e)}function oK(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(rE=oB.prototype).open=function(e,t){if(this.readyState!=oW)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,oK(this)},rE.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||rN).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},rE.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,o$(this)),this.readyState=oW},rE.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,oK(this)),this.g&&(this.readyState=3,oK(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==rN.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oz(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},rE.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?o$(this):oK(this),3==this.readyState&&oz(this)}},rE.Za=function(e){this.g&&(this.response=this.responseText=e,o$(this))},rE.Ya=function(e){this.g&&(this.response=e,o$(this))},rE.ka=function(){this.g&&o$(this)},rE.setRequestHeader=function(e,t){this.v.append(e,t)},rE.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},rE.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var i=t.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(oB.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var oG=rN.JSON.parse;function oY(e){s_.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=oX,this.L=this.M=!1}rM(oY,s_);var oX="",oJ=/^https?$/i,oQ=["POST","PUT"];function oZ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,o0(e),o2(e)}function o0(e){e.F||(e.F=!0,sy(e,"complete"),sy(e,"error"))}function o1(e){if(e.h&&void 0!==rR&&(!e.C[1]||4!=o9(e)||2!=e.da())){if(e.v&&4==o9(e))sP(e.La,0,e);else if(sy(e,"readystatechange"),4==o9(e)){e.h=!1;try{let o=e.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,i,n=!0;break;default:n=!1}if(!(t=n)){if(i=0===o){var r=String(e.I).match(ol)[1]||null;!r&&rN.self&&rN.self.location&&(r=rN.self.location.protocol.slice(0,-1)),i=!oJ.test(r?r.toLowerCase():"")}t=i}if(t)sy(e,"complete"),sy(e,"success");else{e.m=6;try{var s=2<o9(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",o0(e)}}finally{o2(e)}}}}function o2(e,t){if(e.g){o4(e);let i=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||sy(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function o4(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(rN.clearTimeout(e.A),e.A=null)}function o9(e){return e.g?e.g.readyState:0}function o6(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case oX:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function o5(e){let t="";return st(e,function(e,i){t+=i+":"+e+"\r\n"}),t}function o3(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=o5(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):of(e,t,i))}function o7(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function o8(e){this.Ga=0,this.j=[],this.l=new sM,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=o7("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=o7("baseRetryDelayMs",5e3,e),this.hb=o7("retryDelaySeedMs",1e4,e),this.eb=o7("forwardChannelMaxRetries",2,e),this.xa=o7("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new oA(e&&e.concurrentRequestLimit),this.Ja=new oq,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ae(e){if(ai(e),3==e.H){var t=e.W++,i=oc(e.I);if(of(i,"SID",e.K),of(i,"RID",t),of(i,"TYPE","terminate"),as(e,i),(t=new s2(e,e.l,t)).L=2,t.A=og(oc(i)),i=!1,rN.navigator&&rN.navigator.sendBeacon)try{i=rN.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!i&&rN.Image&&((new Image).src=t.A,i=!0),i||(t.g=a_(t.l,null),t.g.ha(t.A)),t.G=Date.now(),ot(t)}ag(e)}function at(e){e.g&&(ah(e),e.g.cancel(),e.g=null)}function ai(e){at(e),e.u&&(rN.clearTimeout(e.u),e.u=null),au(e),e.i.cancel(),e.m&&("number"==typeof e.m&&rN.clearTimeout(e.m),e.m=null)}function an(e){if(!oL(e.i)&&!e.m){e.m=!0;var t=e.Na;sT||sS(),sC||(sT(),sC=!0),sE.add(t,e),e.C=0}}function ar(e,t){var i;i=t?t.m:e.W++;let n=oc(e.I);of(n,"SID",e.K),of(n,"RID",i),of(n,"AID",e.V),as(e,n),e.o&&e.s&&o3(n,e.o,e.s),i=new s2(e,e.l,i,e.C+1),null===e.o&&(i.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ao(e,i,1e3),i.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),oM(e.i,i),s3(i,n,t)}function as(e,t){e.na&&st(e.na,function(e,i){of(t,i,e)}),e.h&&oa({},function(e,i){of(t,i,e)})}function ao(e,t,i){i=Math.min(e.j.length,i);var n=e.h?rD(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+i];-1==t?0<i?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<i;o++){let i=r[o].g,a=r[o].map;if(0>(i-=t))t=Math.max(0,r[o].g-100),s=!1;else try{!function(e,t,i){let n=i||"";try{oa(e,function(e,i){let r=e;rA(e)&&(r=sw(e)),t.push(n+i+"="+encodeURIComponent(r))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+i+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,i),t.F=e,n}function aa(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;sT||sS(),sC||(sT(),sC=!0),sE.add(t,e),e.A=0}}function al(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=s$(rD(e.Ma,e),ap(e,e.A)),e.A++,!0)}function ah(e){null!=e.B&&(rN.clearTimeout(e.B),e.B=null)}function ac(e){e.g=new s2(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=oc(e.wa);of(t,"RID","rpc"),of(t,"SID",e.K),of(t,"AID",e.V),of(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&of(t,"TO",e.qa),of(t,"TYPE","xmlhttp"),as(e,t),e.o&&e.s&&o3(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var i=e.g;e=e.pa,i.L=1,i.A=og(oc(t)),i.u=null,i.S=!0,s7(i,e)}function au(e){null!=e.v&&(rN.clearTimeout(e.v),e.v=null)}function ad(e,t){var i=null;if(e.g==t){au(e),ah(e),e.g=null;var n=2}else{if(!ox(e.i,t))return;i=t.F,oU(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){i=t.u?t.u.length:0,t=Date.now()-t.G;var r,s=e.C;sy(n=sq(),new sz(n,i)),an(e)}else aa(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==n&&(r=t,!(oD(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=s$(rD(e.Na,e,r),ap(e,e.C)),e.C++,!0)))||2==n&&al(e)))switch(i&&0<i.length&&((t=e.i).i=t.i.concat(i)),s){case 1:af(e,5);break;case 4:af(e,10);break;case 3:af(e,6);break;default:af(e,2)}}}function ap(e,t){let i=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(i*=2),i*t}function af(e,t){if(e.l.info("Error code "+t),2==t){var i=null;e.h&&(i=null);var n=rD(e.pb,e);i||(i=new oh("//www.google.com/images/cleardot.gif"),rN.location&&"http"==rN.location.protocol||ou(i,"https"),og(i)),function(e,t){let i=new sM;if(rN.Image){let n=new Image;n.onload=rx(oH,i,n,"TestLoadImage: loaded",!0,t),n.onerror=rx(oH,i,n,"TestLoadImage: error",!1,t),n.onabort=rx(oH,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=rx(oH,i,n,"TestLoadImage: timeout",!1,t),rN.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n)}else sW(2);e.H=0,e.h&&e.h.za(t),ag(e),ai(e)}function ag(e){if(e.H=0,e.ma=[],e.h){let t=oF(e.i);(0!=t.length||0!=e.j.length)&&(rq(e.ma,t),rq(e.ma,e.j),e.i.i.length=0,rj(e.j),e.j.length=0),e.h.ya()}}function am(e,t,i){var n=i instanceof oh?oc(i):new oh(i);if(""!=n.g)t&&(n.g=t+"."+n.g),od(n,n.m);else{var r=rN.location;n=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new oh(null);n&&ou(s,n),t&&(s.g=t),r&&od(s,r),i&&(s.l=i),n=s}return i=e.F,t=e.Da,i&&t&&of(n,i,t),of(n,"VER",e.ra),as(e,n),n}function a_(e,t,i){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new oY(e.Ha&&!e.va?new oV({ob:i}):e.va)).Oa(e.J),t}function ay(){}function av(){if(rG&&!(10<=Number(r9)))throw Error("Environmental error: no available transport.")}function aw(e,t){s_.call(this),this.g=new o8(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!rB(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rB(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new aT(this)}function ab(e){sZ.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function aI(){s0.call(this),this.status=1}function aT(e){this.g=e}function aC(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function aE(e,t,i){i||(i=0);var n=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)n[r]=t.charCodeAt(i++)|t.charCodeAt(i++)<<8|t.charCodeAt(i++)<<16|t.charCodeAt(i++)<<24;else for(r=0;16>r;++r)n[r]=t[i++]|t[i++]<<8|t[i++]<<16|t[i++]<<24;t=e.g[0],i=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^i&(r^s))+n[0]+3614090360&4294967295;o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[1]+3905402710&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[2]+606105819&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[3]+3250441966&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[4]+4118548399&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[5]+1200080426&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[6]+2821735955&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[7]+4249261313&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[8]+1770035416&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[9]+2336552879&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[10]+4294925233&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[11]+2304563134&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[12]+1804603682&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[13]+4254626195&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[14]+2792965006&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[15]+1236535329&4294967295,i=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(i^r))+n[1]+4129170786&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[0]+3921069994&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[5]+3593408605&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[4]+3889429448&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[9]+568446438&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[8]+1163531501&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[13]+2850285829&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[12]+2368359562&4294967295,o=t+((i=r+(o<<20&4294967295|o>>>12))^r^s)+n[5]+4294588738&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[8]+2272392833&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[11]+1839030562&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[14]+4259657740&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[1]+2763975236&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[4]+1272893353&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[7]+4139469664&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[10]+3200236656&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[13]+681279174&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[0]+3936430074&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[3]+3572445317&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[6]+76029189&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[9]+3654602809&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[12]+3873151461&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[15]+530742520&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[2]+3299628645&4294967295,i=r+(o<<23&4294967295|o>>>9),o=t+(r^(i|~s))+n[0]+4096336452&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[5]+4237533241&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[12]+1700485571&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[1]+2240044497&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[8]+1873313359&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[13]+1309151649&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[4]+4149444226&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function aS(e,t){this.h=t;for(var i=[],n=!0,r=e.length-1;0<=r;r--){var s=0|e[r];n&&s==t||(i[r]=s,n=!1)}this.g=i}(rE=oY.prototype).Oa=function(e){this.M=e},rE.ha=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_.g(),this.C=this.u?sX(this.u):sX(_),this.g.onreadystatechange=rD(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){oZ(this,e);return}if(e=i||"",i=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())i.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,o]of(n=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),r=rN.FormData&&e instanceof rN.FormData,!(0<=rF(oQ,t))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;o4(this),0<this.B&&((this.L=(s=this.g,rG&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=rD(this.ua,this)):this.A=sP(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){oZ(this,e)}},rE.ua=function(){void 0!==rR&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,sy(this,"timeout"),this.abort(8))},rE.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,sy(this,"complete"),sy(this,"abort"),o2(this))},rE.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),o2(this,!0)),oY.$.N.call(this)},rE.La=function(){this.s||(this.G||this.v||this.l?o1(this):this.kb())},rE.kb=function(){o1(this)},rE.isActive=function(){return!!this.g},rE.da=function(){try{return 2<o9(this)?this.g.status:-1}catch(e){return -1}},rE.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},rE.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oG(t)}},rE.Ia=function(){return this.m},rE.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(rE=o8.prototype).ra=8,rE.H=1,rE.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new s2(this,this.l,e),s=this.s;if(this.U&&(s?sr(s=si(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,i=0;i<this.j.length;i++){t:{var n=this.j[i];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.j.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=ao(this,r,t),of(i=oc(this.I),"RID",e),of(i,"CVER",22),this.F&&of(i,"X-HTTP-Session-Id",this.F),as(this,i),s&&(this.O?t="headers="+encodeURIComponent(String(o5(s)))+"&"+t:this.o&&o3(i,this.o,s)),oM(this.i,r),this.bb&&of(i,"TYPE","init"),this.P?(of(i,"$req",t),of(i,"SID","null"),r.aa=!0,s3(r,i,null)):s3(r,i,t),this.H=2}}else 3==this.H&&(e?ar(this,e):0==this.j.length||oL(this.i)||ar(this))}},rE.Ma=function(){if(this.u=null,ac(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=s$(rD(this.jb,this),e)}},rE.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,sW(10),at(this),ac(this))},rE.ib=function(){null!=this.v&&(this.v=null,at(this),al(this),sW(19))},rE.pb=function(e){e?(this.l.info("Successfully pinged google.com"),sW(2)):(this.l.info("Failed to ping google.com"),sW(1))},rE.isActive=function(){return!!this.h&&this.h.isActive(this)},(rE=ay.prototype).Ba=function(){},rE.Aa=function(){},rE.za=function(){},rE.ya=function(){},rE.isActive=function(){return!0},rE.Va=function(){},av.prototype.g=function(e,t){return new aw(e,t)},rM(aw,s_),aw.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,i=this.h||void 0;sW(0),e.Y=t,e.na=i||{},e.G=e.aa,e.I=am(e,null,e.Y),an(e)},aw.prototype.close=function(){ae(this.g)},aw.prototype.u=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=sw(e),e=i);t.j.push(new oP(t.fb++,e)),3==t.H&&an(t)},aw.prototype.N=function(){this.g.h=null,delete this.j,ae(this.g),delete this.g,aw.$.N.call(this)},rM(ab,sZ),rM(aI,s0),rM(aT,ay),aT.prototype.Ba=function(){sy(this.g,"a")},aT.prototype.Aa=function(e){sy(this.g,new ab(e))},aT.prototype.za=function(e){sy(this.g,new aI)},aT.prototype.ya=function(){sy(this.g,"b")},rM(aC,function(){this.blockSize=-1}),aC.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},aC.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var i=t-this.blockSize,n=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=i;)aE(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[r++]=e.charCodeAt(s++),r==this.blockSize){aE(this,n),r=0;break}}else for(;s<t;)if(n[r++]=e[s++],r==this.blockSize){aE(this,n),r=0;break}}this.h=r,this.i+=t},aC.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var i=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&i,i/=256;for(this.j(e),e=Array(16),t=i=0;4>t;++t)for(var n=0;32>n;n+=8)e[i++]=this.g[t]>>>n&255;return e};var ak={};function aR(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(ak,e)?ak[e]:ak[e]=new aS([0|e],0>e?-1:0):new aS([0|e],0>e?-1:0)}function aN(e){if(isNaN(e)||!isFinite(e))return aA;if(0>e)return aM(aN(-e));for(var t=[],i=1,n=0;e>=i;n++)t[n]=e/i|0,i*=aP;return new aS(t,0)}var aP=4294967296,aA=aR(0),aO=aR(1),aL=aR(16777216);function aD(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function ax(e){return -1==e.h}function aM(e){for(var t=e.g.length,i=[],n=0;n<t;n++)i[n]=~e.g[n];return new aS(i,~e.h).add(aO)}function aU(e,t){return e.add(aM(t))}function aF(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function aj(e,t){this.g=e,this.h=t}function aq(e,t){if(aD(t))throw Error("division by zero");if(aD(e))return new aj(aA,aA);if(ax(e))return t=aq(aM(e),t),new aj(aM(t.g),aM(t.h));if(ax(t))return t=aq(e,aM(t)),new aj(aM(t.g),t.h);if(30<e.g.length){if(ax(e)||ax(t))throw Error("slowDivide_ only works with positive integers.");for(var i=aO,n=t;0>=n.X(e);)i=aH(i),n=aH(n);var r=aV(i,1),s=aV(n,1);for(n=aV(n,2),i=aV(i,2);!aD(n);){var o=s.add(n);0>=o.X(e)&&(r=r.add(i),s=o),n=aV(n,1),i=aV(i,1)}return t=aU(e,r.R(t)),new aj(r,t)}for(r=aA;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(i=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=aN(i)).R(t);ax(o)||0<o.X(e);)i-=n,o=(s=aN(i)).R(t);aD(s)&&(s=aO),r=r.add(s),e=aU(e,o)}return new aj(r,e)}function aH(e){for(var t=e.g.length+1,i=[],n=0;n<t;n++)i[n]=e.D(n)<<1|e.D(n-1)>>>31;return new aS(i,e.h)}function aV(e,t){var i=t>>5;t%=32;for(var n=e.g.length-i,r=[],s=0;s<n;s++)r[s]=0<t?e.D(s+i)>>>t|e.D(s+i+1)<<32-t:e.D(s+i);return new aS(r,e.h)}(rE=aS.prototype).ea=function(){if(ax(this))return-aM(this).ea();for(var e=0,t=1,i=0;i<this.g.length;i++){var n=this.D(i);e+=(0<=n?n:aP+n)*t,t*=aP}return e},rE.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(aD(this))return"0";if(ax(this))return"-"+aM(this).toString(e);for(var t=aN(Math.pow(e,6)),i=this,n="";;){var r=aq(i,t).g,s=((0<(i=aU(i,r.R(t))).g.length?i.g[0]:i.h)>>>0).toString(e);if(aD(i=r))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},rE.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},rE.X=function(e){return ax(e=aU(this,e))?-1:aD(e)?0:1},rE.abs=function(){return ax(this)?aM(this):this},rE.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0,r=0;r<=t;r++){var s=n+(65535&this.D(r))+(65535&e.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);n=o>>>16,s&=65535,o&=65535,i[r]=o<<16|s}return new aS(i,-2147483648&i[i.length-1]?-1:0)},rE.R=function(e){if(aD(this)||aD(e))return aA;if(ax(this))return ax(e)?aM(this).R(aM(e)):aM(aM(this).R(e));if(ax(e))return aM(this.R(aM(e)));if(0>this.X(aL)&&0>e.X(aL))return aN(this.ea()*e.ea());for(var t=this.g.length+e.g.length,i=[],n=0;n<2*t;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<e.g.length;r++){var s=this.D(n)>>>16,o=65535&this.D(n),a=e.D(r)>>>16,l=65535&e.D(r);i[2*n+2*r]+=o*l,aF(i,2*n+2*r),i[2*n+2*r+1]+=s*l,aF(i,2*n+2*r+1),i[2*n+2*r+1]+=o*a,aF(i,2*n+2*r+1),i[2*n+2*r+2]+=s*a,aF(i,2*n+2*r+2)}for(n=0;n<t;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=t;n<2*t;n++)i[n]=0;return new aS(i,0)},rE.gb=function(e){return aq(this,e).h},rE.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)&e.D(n);return new aS(i,this.h&e.h)},rE.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)|e.D(n);return new aS(i,this.h|e.h)},rE.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)^e.D(n);return new aS(i,this.h^e.h)},av.prototype.createWebChannel=av.prototype.g,aw.prototype.send=aw.prototype.u,aw.prototype.open=aw.prototype.m,aw.prototype.close=aw.prototype.close,sK.NO_ERROR=0,sK.TIMEOUT=8,sK.HTTP_ERROR=6,sG.COMPLETE="complete",sJ.EventType=sQ,sQ.OPEN="a",sQ.CLOSE="b",sQ.ERROR="c",sQ.MESSAGE="d",s_.prototype.listen=s_.prototype.O,oY.prototype.listenOnce=oY.prototype.P,oY.prototype.getLastError=oY.prototype.Sa,oY.prototype.getLastErrorCode=oY.prototype.Ia,oY.prototype.getStatus=oY.prototype.da,oY.prototype.getResponseJson=oY.prototype.Wa,oY.prototype.getResponseText=oY.prototype.ja,oY.prototype.send=oY.prototype.ha,oY.prototype.setWithCredentials=oY.prototype.Oa,aC.prototype.digest=aC.prototype.l,aC.prototype.reset=aC.prototype.reset,aC.prototype.update=aC.prototype.j,aS.prototype.add=aS.prototype.add,aS.prototype.multiply=aS.prototype.R,aS.prototype.modulo=aS.prototype.gb,aS.prototype.compare=aS.prototype.X,aS.prototype.toNumber=aS.prototype.ea,aS.prototype.toString=aS.prototype.toString,aS.prototype.getBits=aS.prototype.D,aS.fromNumber=aN,aS.fromString=function e(t,i){if(0==t.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==t.charAt(0))return aM(e(t.substring(1),i));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=aN(Math.pow(i,8)),r=aA,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),i);8>o?(o=aN(Math.pow(i,o)),r=r.R(o).add(aN(a))):r=(r=r.R(n)).add(aN(a))}return r},rk.createWebChannelTransport=function(){return new av},rk.getStatEventTarget=function(){return sq()},rk.ErrorCode=sK,rk.EventType=sG,rk.Event=sF,rk.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rk.FetchXmlHttpFactory=oV,rk.WebChannel=sJ,rk.XhrIo=oY,rk.Md5=aC;var aB=rk.Integer=aS;const aW="@firebase/firestore";/**
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
 */class az{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}az.UNAUTHENTICATED=new az(null),az.GOOGLE_CREDENTIALS=new az("google-credentials-uid"),az.FIRST_PARTY=new az("first-party-uid"),az.MOCK_USER=new az("mock-user");/**
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
 */let a$="10.7.0";/**
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
 */const aK=new e8("@firebase/firestore");function aG(e,...t){if(aK.logLevel<=rC.DEBUG){let i=t.map(aX);aK.debug(`Firestore (${a$}): ${e}`,...i)}}function aY(e,...t){if(aK.logLevel<=rC.ERROR){let i=t.map(aX);aK.error(`Firestore (${a$}): ${e}`,...i)}}function aX(e){if("string"==typeof e)return e;try{/**
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
 */function aJ(e="Unexpected state"){let t=`FIRESTORE (${a$}) INTERNAL ASSERTION FAILED: `+e;throw aY(t),Error(t)}/**
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
 */const aQ={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition",UNAVAILABLE:"unavailable"};class aZ extends eA{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class a0{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class a1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(az.UNAUTHENTICATED))}shutdown(){}}class a4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class a9{constructor(e){this.t=e,this.currentUser=az.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i,n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve(),r=new a0;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new a0,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{aG("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(aG("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new a0)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(aG("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||aJ(),new a1(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||aJ(),new az(e)}}class a6{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=az.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class a5{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new a6(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(az.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a7{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let i=e=>{null!=e.error&&aG("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.R;return this.R=e.token,aG("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};let n=e=>{aG("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):aG("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||aJ(),this.R=e.token,new a3(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class a8{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let n=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function le(e,t){return e<t?-1:e>t?1:0}/**
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
 */class lt{constructor(e,t,i){void 0===t?t=0:t>e.length&&aJ(),void 0===i?i=e.length-t:i>e.length-t&&aJ(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===lt.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof lt?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let n=0;n<i;n++){let i=e.get(n),r=t.get(n);if(i<r)return -1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class li extends lt{construct(e,t,i){return new li(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new aZ(aQ.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(e=>e.length>0))}return new li(t)}static emptyPath(){return new li([])}}/**
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
 */class ln{constructor(e){this.path=e}static fromPath(e){return new ln(li.fromString(e))}static fromName(e){return new ln(li.fromString(e).popFirst(5))}static empty(){return new ln(li.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===li.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return li.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ln(new li(e.slice()))}}function lr(e){return"IndexedDbTransactionError"===e.name}/**
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
 */class ls{constructor(e,t){this.comparator=e,this.root=t||la.EMPTY}insert(e,t){return new ls(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,la.BLACK,null,null))}remove(e){return new ls(this.comparator,this.root.remove(e,this.comparator).copy(null,null,la.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){let n=this.comparator(e,i.key);if(0===n)return t+i.left.size;n<0?i=i.left:(t+=i.left.size+1,i=i.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class la{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:la.RED,this.left=null!=n?n:la.EMPTY,this.right=null!=r?r:la.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,n,r){return new la(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return la.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let i,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return la.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,la.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,la.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw aJ();let e=this.left.check();if(e!==this.right.check())throw aJ();return e+(this.isRed()?0:1)}}la.EMPTY=null,la.RED=!0,la.BLACK=!1,la.EMPTY=new class{constructor(){this.size=0}get key(){throw aJ()}get value(){throw aJ()}get color(){throw aJ()}get left(){throw aJ()}get right(){throw aJ()}copy(e,t,i,n,r){return this}insert(e,t,i){return new la(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ll{constructor(e){this.comparator=e,this.data=new ls(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lh(this.data.getIterator())}getIteratorFrom(e){return new lh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ll)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ll(this.comparator);return t.data=e,t}}class lh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class lc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lu{constructor(e){this.binaryString=e}static fromBase64String(e){return new lu(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new lc("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new lu(function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function ld(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}lu.EMPTY_BYTE_STRING=new lu(""),new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
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
 */class lp{constructor(e,t,i,n,r,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class lf{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new lf("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof lf&&e.projectId===this.projectId&&e.database===this.database}}new ls(ln.comparator),new ls(ln.comparator),new ls(ln.comparator),new ll(ln.comparator),new ll(le),(v=y||(y={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS",new aB([4294967295,4294967295],0);/**
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
 */class lg{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){var i;if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(ld(e.integerValue));else if("doubleValue"in e){let i=ld(e.doubleValue);isNaN(i)?this.Tt(t,13):(this.Tt(t,15),0===i&&1/i==-1/0?t.Et(0):t.Et(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Tt(t,20),"string"==typeof i?t.dt(i):(t.dt(`${i.seconds||""}`),t.Et(i.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt("string"==typeof(i=e.bytesValue)?lu.fromBase64String(i):lu.fromUint8Array(i)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.Tt(t,45),t.Et(i.latitude||0),t.Et(i.longitude||0)}else"mapValue"in e?"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):aJ()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let i=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(i)))this.At(e,t),this.Pt(i[e],t)}yt(e,t){let i=e.values||[];for(let e of(this.Tt(t,50),i))this.Pt(e,t)}ft(e,t){this.Tt(t,37),ln.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}lg.St=new lg,new Uint8Array(0);class lm{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new lm(e,lm.DEFAULT_COLLECTION_PERCENTILE,lm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}function l_(){return"undefined"!=typeof document?document:null}/**
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
 */lm.DEFAULT_COLLECTION_PERCENTILE=10,lm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lm.DEFAULT=new lm(41943040,lm.DEFAULT_COLLECTION_PERCENTILE,lm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lm.DISABLED=new lm(-1,0,0);/**
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
 */class ly{constructor(e,t,i=1e3,n=1.5,r=6e4){this.si=e,this.timerId=t,this.Fo=i,this.Mo=n,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();let t=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),n=Math.max(0,t-i);n>0&&aG("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class lv{constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new a0,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,n,r){let s=new lv(e,t,Date.now()+i,n,r);return s.start(i),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new aZ(aQ.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class lw{constructor(e,t,i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=az.UNAUTHENTICATED,this.clientId=a8.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async e=>{aG("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(aG("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new aZ(aQ.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new a0;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let t=function(e,t){if(aY("AsyncQueue",`${t}: ${e}`),lr(e))return new aZ(aQ.UNAVAILABLE,`${t}: ${e}`);throw e}(i,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}/**
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
 */function lb(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const lI=new Map;/**
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
 */class lT{constructor(e){var t,i;if(void 0===e.host){if(void 0!==e.ssl)throw new aZ(aQ.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new aZ(aQ.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,i,n){if(!0===t&&!0===n)throw new aZ(aQ.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lb(null!==(i=e.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new aZ(aQ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new aZ(aQ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new aZ(aQ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,i;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lC{constructor(e,t,i,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new aZ(aQ.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new aZ(aQ.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lT(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new a2;switch(e.type){case"firstParty":return new a5(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new aZ(aQ.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=lI.get(e);t&&(aG("ComponentProvider","Removing Datastore"),lI.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class lE{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ly(this,"async_queue_retry"),this.iu=()=>{let e=l_();e&&aG("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};let e=l_();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;let t=l_();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});let t=new a0;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!lr(e))throw e;aG("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){let t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{let t;throw this.eu=e,this.tu=!1,aY("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,i){this.su(),this.ru.indexOf(e)>-1&&(t=0);let n=lv.createAndSchedule(this,e,t,i,e=>this.au(e));return this.Xa.push(n),n}su(){this.eu&&aJ()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(let t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{for(let t of(this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Xa))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){let t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class lS extends lC{constructor(e,t,i,n){super(e,t,i,n),this.type="firestore",this._queue=new lE,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||function(e){var t,i,n,r;let s=e._freezeSettings(),o=(r=e._databaseId,new lp(r,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,lb(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new lw(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(i=s.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(this),this._firestoreClient.terminate()}}RegExp("[~\\*/\\[\\]]"),new WeakMap,function(e=!0){a$=tE,tb(new e0("firestore",(t,{instanceIdentifier:i,options:n})=>{let r=t.getProvider("app").getImmediate(),s=new lS(new a9(t.getProvider("auth-internal")),new a7(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new aZ(aQ.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lf(e.options.projectId,t)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),tR(aW,"4.4.0",void 0),tR(aW,"4.4.0","esm2017")}(),document.querySelector(".form-wrapper");const lk=document.querySelector(".submit-btn"),lR=document.querySelector(".sign-up-form");document.querySelector(".au-modal-close");const lN=document.querySelector("#name"),lP=document.querySelector('input[type="email"]'),lA=document.querySelector('input[type="password"]'),lO=document.querySelector(".sign-in-btn"),lL=document.querySelector(".sign-up-btn"),lD=document.querySelector(".form-item-render"),lx=document.getElementById("name"),lM=document.querySelector(".sign-out-btn"),lU=document.querySelector(".sign-out-container"),lF=function(){lk.textContent="Sign up",lD.style.display="block"};lR.addEventListener("submit",e=>{e.preventDefault(),lk.textContent="Sign up";{let{value:e}=lN,{value:t}=lP,{value:i}=lA;""!==t&&""!==i&&""!==e&&uZ(e,t,i)}lk.textContent="Sign in";{let{value:e}=lP,{value:t}=lA;""!==e&&""!==t&&u0(e,t)}lR.reset(),lF()}),lM.addEventListener("click",function(){eZ(uQ).signOut().then(()=>{}).catch(e=>{})}),lO.addEventListener("click",function(){lk.textContent="Sign in",lD.style.display="none",lx.removeAttribute("required")}),lL.addEventListener("click",lF);const lj="@firebase/database",lq="1.0.2";/**
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
 */let lH="";/**
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
 */class lV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ex(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:eD(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class lB{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ej(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const lW=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new lV(t)}}catch(e){}return new lB},lz=lW("localStorage"),l$=lW("sessionStorage"),lK=new e8("@firebase/database"),lG=(d=1,function(){return d++}),lY=function(e){let t=eJ(e),i=new eG;i.update(t);let n=i.digest();return ep.encodeByteArray(n)},lX=function(...e){let t="";for(let i=0;i<e.length;i++){let n=e[i];Array.isArray(n)||n&&"object"==typeof n&&"number"==typeof n.length?t+=lX.apply(null,n):"object"==typeof n?t+=ex(n):t+=n,t+=" "}return t};let lJ=null,lQ=!0;const lZ=function(e,t){eh(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(lK.logLevel=rC.VERBOSE,lJ=lK.log.bind(lK),t&&l$.set("logging_enabled",!0)):"function"==typeof e?lJ=e:(lJ=null,l$.remove("logging_enabled"))},l0=function(...e){if(!0===lQ&&(lQ=!1,null===lJ&&!0===l$.get("logging_enabled")&&lZ(!0)),lJ){let t=lX.apply(null,e);lJ(t)}},l1=function(e){return function(...t){l0(e,...t)}},l2=function(...e){let t="FIREBASE INTERNAL ERROR: "+lX(...e);lK.error(t)},l4=function(...e){let t=`FIREBASE FATAL ERROR: ${lX(...e)}`;throw lK.error(t),Error(t)},l9=function(...e){let t="FIREBASE WARNING: "+lX(...e);lK.warn(t)},l6=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&l9("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},l5=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},l3=function(e){if(eP()||"complete"===document.readyState)e();else{let t=!1,i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&i()}),window.attachEvent("onload",i))}},l7="[MIN_NAME]",l8="[MAX_NAME]",he=function(e,t){if(e===t)return 0;{if(e===l7||t===l8)return -1;if(t===l7||e===l8)return 1;let i=hl(e),n=hl(t);return null!==i?null!==n?i-n==0?e.length-t.length:i-n:-1:null!==n?1:e<t?-1:1}},ht=function(e,t){return e===t?0:e<t?-1:1},hi=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+ex(t))},hn=function(e){if("object"!=typeof e||null===e)return ex(e);let t=[];for(let i in e)t.push(i);t.sort();let i="{";for(let n=0;n<t.length;n++)0!==n&&(i+=","),i+=ex(t[n])+":"+hn(e[t[n]]);return i+"}"},hr=function(e,t){let i=e.length;if(i<=t)return[e];let n=[];for(let r=0;r<i;r+=t)r+t>i?n.push(e.substring(r,i)):n.push(e.substring(r,r+t));return n};function hs(e,t){for(let i in e)e.hasOwnProperty(i)&&t(i,e[i])}const ho=function(e){let t,i,n,r,s;eh(!l5(e),"Invalid JSON number"),0===e?(i=0,n=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(i=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,n=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(i=0,n=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);for(s=11;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},ha=RegExp("^-?(0*)\\d{1,10}$"),hl=function(e){if(ha.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},hh=function(e){try{e()}catch(e){setTimeout(()=>{throw l9("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},hc=function(e,t){let i=setTimeout(e,t);return"number"==typeof i&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(i):"object"==typeof i&&i.unref&&i.unref(),i};/**
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
 */class hu{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){l9(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class hd{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(l0("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',l9(e)}}class hp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hp.OWNER="owner";const hf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hg="websocket",hm="long_polling";/**
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
 */class h_{constructor(e,t,i,n,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lz.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lz.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hy(e,t,i){let n;if(eh("string"==typeof t,"typeof type must == string"),eh("object"==typeof i,"typeof params must == object"),t===hg)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===hm)n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(i.ns=e.namespace);let r=[];return hs(i,(e,t)=>{r.push(e+"="+t)}),n+r.join("&")}/**
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
 */class hv{constructor(){this.counters_={}}incrementCounter(e,t=1){ej(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,i){if(!(i instanceof Object))return i;switch(i.constructor){case Date:return new Date(i.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return i}for(let n in i)i.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=e(t[n],i[n]));return t}(void 0,this.counters_)}}/**
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
 */const hw={},hb={};function hI(e){let t=e.toString();return hw[t]||(hw[t]=new hv),hw[t]}/**
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
 */class hT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&hh(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hC="start";class hE{constructor(e,t,i,n,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=l1(e),this.stats_=hI(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),hy(t,hm,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),l3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hS((...e)=>{let[t,i,n,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===hC)this.id=i,this.password=n;else if("close"===t)i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,i]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,i)},()=>{this.onClosed_()},this.urlFn);let e={};e[hC]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&hf.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hE.forceAllow_=!0}static forceDisallow(){hE.forceDisallow_=!0}static isAvailable(){return!eP()&&(!!hE.forceAllow_||!hE.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=ex(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=hr(eg(t),1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(eP())return;this.myDisconnFrame=document.createElement("iframe");let i={};i.dframe="t",i.id=e,i.pw=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=ex(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hS{constructor(e,t,i,n){if(this.onDisconnect=i,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,eP())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=lG(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=hS.createIFrame_();let i="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(i='<script>document.domain="'+document.domain+'";</script>');let n="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(e){l0("frame writing exception"),e.stack&&l0(e.stack),l0(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||l0("No IE domain setting required")}catch(i){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),i="",n=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+i.length<=1870){let e=this.pendingSegs.shift();i=i+"&seg"+n+"="+e.seg+"&ts"+n+"="+e.ts+"&d"+n+"="+e.d,n++}else break;return t+=i,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(i,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(n),i()})}addTag(e,t){eP()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{l0("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(e){}},Math.floor(1))}}let hk=null;"undefined"!=typeof MozWebSocket?hk=MozWebSocket:"undefined"!=typeof WebSocket&&(hk=WebSocket);class hR{constructor(e,t,i,n,r,s,o){this.connId=e,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=l1(this.connId),this.stats_=hI(t),this.connURL=hR.connectionURL_(t,s,o,n,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,n,r){let s={};return s.v="5",!eP()&&"undefined"!=typeof location&&location.hostname&&hf.test(location.hostname)&&(s.r="f"),t&&(s.s=t),i&&(s.ls=i),n&&(s.ac=n),r&&(s.p=r),hy(e,hg,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lz.set("previous_websocket_failure",!0);try{let e;if(eP()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${lH}/${X.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let i={},n=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;n&&(e.proxy={origin:n})}this.mySock=new hk(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){hR.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==hk&&!hR.forceDisallow_}static previouslyFailed(){return lz.isInMemoryStorage||!0===lz.get("previous_websocket_failure")}markConnectionHealthy(){lz.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=eD(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(eh(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=ex(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=hr(t,16384);i.length>1&&this.sendString_(String(i.length));for(let e=0;e<i.length;e++)this.sendString_(i[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hR.responsesRequiredToBeHealthy=2,hR.healthyTimeout=3e4;/**
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
 */class hN{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hE,hR]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=hR&&hR.isAvailable(),i=t&&!hR.previouslyFailed();if(e.webSocketOnly&&(t||l9("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[hR];else{let e=this.transports_=[];for(let t of hN.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);hN.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hN.globalTransportInitialized_=!1;class hP{constructor(e,t,i,n,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=l1("c:"+this.id+":"),this.transportManager_=new hN(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=hc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=hi("t",e),i=hi("d",e);if("c"===t)this.onSecondaryControl_(i);else if("d"===t)this.pendingDataMessages.push(i);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=hi("t",e),i=hi("d",e);"c"===t?this.onControl_(i):"d"===t&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=hi("t",e);if("d"in e){let i=e.d;if("h"===t){let e=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(i):"r"===t?this.onReset_(i):"e"===t?l2("Server Error: "+i):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):l2("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==i&&l9("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),hc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lz.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class hA{put(e,t,i,n){}merge(e,t,i,n){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class hO{constructor(e){this.allowedEvents_=e,this.listeners_={},eh(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let e=0;e<i.length;e++)i[e].callback.apply(i[e].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let n=this.getInitialEvent(e);n&&t.apply(i,n)}off(e,t,i){this.validateEventType_(e);let n=this.listeners_[e]||[];for(let e=0;e<n.length;e++)if(n[e].callback===t&&(!i||i===n[e].context)){n.splice(e,1);return}}validateEventType_(e){eh(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class hL extends hO{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||eR()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hL}getInitialEvent(e){return eh("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class hD{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function hx(){return new hD("")}function hM(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function hU(e){return e.pieces_.length-e.pieceNum_}function hF(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new hD(e.pieces_,t)}function hj(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function hq(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function hH(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let i=e.pieceNum_;i<e.pieces_.length-1;i++)t.push(e.pieces_[i]);return new hD(t,0)}function hV(e,t){let i=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)i.push(e.pieces_[t]);if(t instanceof hD)for(let e=t.pieceNum_;e<t.pieces_.length;e++)i.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&i.push(e[t])}return new hD(i,0)}function hB(e){return e.pieceNum_>=e.pieces_.length}function hW(e,t){let i=hM(e),n=hM(t);if(null===i)return t;if(i===n)return hW(hF(e),hF(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function hz(e,t){if(hU(e)!==hU(t))return!1;for(let i=e.pieceNum_,n=t.pieceNum_;i<=e.pieces_.length;i++,n++)if(e.pieces_[i]!==t.pieces_[n])return!1;return!0}function h$(e,t){let i=e.pieceNum_,n=t.pieceNum_;if(hU(e)>hU(t))return!1;for(;i<e.pieces_.length;){if(e.pieces_[i]!==t.pieces_[n])return!1;++i,++n}return!0}class hK{constructor(e,t){this.errorPrefix_=t,this.parts_=hq(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=eQ(this.parts_[e]);hG(this)}}function hG(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+hY(e))}function hY(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class hX extends hO{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new hX}getInitialEvent(e){return eh("visible"===e,"Unknown event type: "+e),[this.visible_]}}class hJ extends hA{constructor(e,t,i,n,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=hJ.nextPersistentConnectionId_++,this.log_=l1("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!eP())throw Error("Auth override specified in options, but not supported on non Node.js platforms");hX.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&hL.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let n=++this.requestNumber_,r={r:n,a:e,b:t};this.log_(ex(r)),eh(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[n]=i)}get(e){this.initConnection_();let t=new eS,i={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:i,onComplete:e=>{let i=e.d;"ok"===e.s?t.resolve(i):t.reject(i)}}),this.outstandingGetCount_++;let n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),t.promise}listen(e,t,i,n){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),eh(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),eh(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:n,hashFn:t,query:e,tag:i};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+i+" for "+n);let r={p:i};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;hJ.warnOnListenWarnings_(s,t),(this.listens.get(i)&&this.listens.get(i).get(n))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(i,n),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ej(e,"w")){let i=eq(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();l9(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||eF(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=eU(e)?"auth":"gauth",i={cred:e};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(t,i,t=>{let i=t.s,n=t.d||"error";this.authToken_===e&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,n))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+n),eh(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,n)&&this.connected_&&this.sendUnlisten_(i,n,e._queryObject,t)}sendUnlisten_(e,t,i,n){this.log_("Unlisten on "+e+" for "+t);let r={p:e};n&&(r.q=i,r.t=n),this.sendRequest("n",r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,n){let r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{n&&setTimeout(()=>{n(e.s,e.d)},Math.floor(0))})}put(e,t,i,n){this.putInternal("p",e,t,i,n)}merge(e,t,i,n){this.putInternal("m",e,t,i,n)}putInternal(e,t,i,n,r){this.initConnection_();let s={p:t,d:i};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:n}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(i.s,i.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ex(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):l2("Unrecognized action received from server: "+ex(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){eh(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+hJ.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,i())};this.realtime_={close:a,sendRequest:function(e){eh(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?l0("getToken() completed but was canceled"):(l0("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new hP(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,e=>{l9(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&l9(e),a())}}}interrupt(e){l0("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){l0("Resuming connection for reason: "+e),delete this.interruptReasons_[e],eH(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;i=t?t.map(e=>hn(e)).join("$"):"default";let n=this.removeListen_(e,i);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){let i;let n=new hD(e).toString();if(this.listens.has(n)){let e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){l0("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){l0("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";eP()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+lH.replace(/\./g,"-")]=1,eR()?e["framework.cordova"]=1:eN()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=hL.getInstance().currentlyOnline();return eH(this.interruptReasons_)&&e}}hJ.nextPersistentConnectionId_=0,hJ.nextConnectionId_=0;/**
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
 */class hQ{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new hQ(e,t)}}/**
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
 */class hZ{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new hQ(l7,e),n=new hQ(l7,t);return 0!==this.compare(i,n)}minPost(){return hQ.MIN}}class h0 extends hZ{static get __EMPTY_NODE(){return i}static set __EMPTY_NODE(e){i=e}compare(e,t){return he(e.name,t.name)}isDefinedOn(e){throw ec("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return hQ.MIN}maxPost(){return new hQ(l8,i)}makePost(e,t){return eh("string"==typeof e,"KeyIndex indexValue must always be a string."),new hQ(e,i)}toString(){return".key"}}const h1=new h0;/**
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
 */class h2{constructor(e,t,i,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,n&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class h4{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:h4.RED,this.left=null!=n?n:h9.EMPTY_NODE,this.right=null!=r?r:h9.EMPTY_NODE}copy(e,t,i,n,r){return new h4(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp_()}removeMin_(){if(this.left.isEmpty())return h9.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let i,n;if(i=this,0>t(e,i.key))i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===t(e,i.key)){if(i.right.isEmpty())return h9.EMPTY_NODE;n=i.right.min_(),i=i.copy(n.key,n.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,h4.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,h4.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}h4.RED=!0,h4.BLACK=!1;class h9{constructor(e,t=h9.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new h9(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,h4.BLACK,null,null))}remove(e){return new h9(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,h4.BLACK,null,null))}get(e){let t;let i=this.root_;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key)))return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,n=null;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key))){if(i.left.isEmpty()){if(n)return n.key;return null}for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}t<0?i=i.left:t>0&&(n=i,i=i.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new h2(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new h2(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new h2(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new h2(this.root_,null,this.comparator_,!0,e)}}/**
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
 */function h6(e,t){return he(e.name,t.name)}function h5(e,t){return he(e,t)}h9.EMPTY_NODE=new class{copy(e,t,i,n,r){return this}insert(e,t,i){return new h4(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const h3=function(e){return"number"==typeof e?"number:"+ho(e):"string:"+e},h7=function(e){if(e.isLeafNode()){let t=e.val();eh("string"==typeof t||"number"==typeof t||"object"==typeof t&&ej(t,".sv"),"Priority must be a string or number.")}else eh(e===n||e.isEmpty(),"priority of unexpected type.");eh(e===n||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class h8{constructor(e,t=h8.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,eh(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),h7(this.priorityNode_)}static set __childrenNodeConstructor(e){r=e}static get __childrenNodeConstructor(){return r}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new h8(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:h8.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return hB(e)?this:".priority"===hM(e)?this.priorityNode_:h8.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:h8.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=hM(e);return null===i?t:t.isEmpty()&&".priority"!==i?this:(eh(".priority"!==i||1===hU(e),".priority must be the last token in a path"),this.updateImmediateChild(i,h8.__childrenNodeConstructor.EMPTY_NODE.updateChild(hF(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+h3(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=ho(this.value_):e+=this.value_,this.lazyHash_=lY(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===h8.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof h8.__childrenNodeConstructor?-1:(eh(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,n=h8.VALUE_TYPE_ORDER.indexOf(t),r=h8.VALUE_TYPE_ORDER.indexOf(i);return(eh(n>=0,"Unknown leaf type: "+t),eh(r>=0,"Unknown leaf type: "+i),n!==r)?r-n:"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}h8.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ce=new class extends hZ{compare(e,t){let i=e.node.getPriority(),n=t.node.getPriority(),r=i.compareTo(n);return 0===r?he(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return hQ.MIN}maxPost(){return new hQ(l8,new h8("[PRIORITY-POST]",o))}makePost(e,t){return new hQ(t,new h8("[PRIORITY-POST]",s(e)))}toString(){return".priority"}},ct=Math.log(2);class ci{constructor(e){this.count=parseInt(Math.log(e+1)/ct,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cn=function(e,t,i,n){e.sort(t);let r=function(t,n){let s;let o=n-t;if(0===o)return null;if(1===o)return s=e[t],new h4(i?i(s):s,s.node,h4.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,n);return s=e[a],new h4(i?i(s):s,s.node,h4.BLACK,l,h)}};return new h9(n||t,function(t){let n=null,s=null,o=e.length,a=function(t,n){let s=o-t,a=o;o-=t;let h=r(s+1,a),c=e[s];l(new h4(i?i(c):c,c.node,n,null,h))},l=function(e){n?n.left=e:s=e,n=e};for(let e=0;e<t.count;++e){let i=t.nextBitIsOne(),n=Math.pow(2,t.count-(e+1));i?a(n,h4.BLACK):(a(n,h4.BLACK),a(n,h4.RED))}return s}(new ci(e.length)))},cr={};class cs{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return eh(cr&&ce,"ChildrenNode.ts has not been loaded"),a=a||new cs({".priority":cr},{".priority":ce})}get(e){let t=eq(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof h9?t:null}hasIndex(e){return ej(this.indexSet_,e.toString())}addIndex(e,t){let i;eh(e!==h1,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],r=!1,s=t.getIterator(hQ.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();i=r?cn(n,e.getCompare()):cr;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=i,new cs(h,l)}addToIndexes(e,t){return new cs(eV(this.indexes_,(i,n)=>{let r=eq(this.indexSet_,n);if(eh(r,"Missing index implementation for "+n),i===cr){if(!r.isDefinedOn(e.node))return cr;{let i=[],n=t.getIterator(hQ.Wrap),s=n.getNext();for(;s;)s.name!==e.name&&i.push(s),s=n.getNext();return i.push(e),cn(i,r.getCompare())}}{let n=t.get(e.name),r=i;return n&&(r=r.remove(new hQ(e.name,n))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new cs(eV(this.indexes_,i=>{if(i===cr)return i;{let n=t.get(e.name);return n?i.remove(new hQ(e.name,n)):i}}),this.indexSet_)}}class co{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&h7(this.priorityNode_),this.children_.isEmpty()&&eh(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return l||(l=new co(new h9(h5),null,cs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||l}updatePriority(e){return this.children_.isEmpty()?this:new co(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?l:t}}getChild(e){let t=hM(e);return null===t?this:this.getImmediateChild(t).getChild(hF(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(eh(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let i,n;let r=new hQ(e,t);t.isEmpty()?(i=this.children_.remove(e),n=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),n=this.indexMap_.addToIndexes(r,this.children_));let s=i.isEmpty()?l:this.priorityNode_;return new co(i,s,n)}}updateChild(e,t){let i=hM(e);if(null===i)return t;{eh(".priority"!==hM(e)||1===hU(e),".priority must be the last token in a path");let n=this.getImmediateChild(i).updateChild(hF(e),t);return this.updateImmediateChild(i,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,n=0,r=!0;if(this.forEachChild(ce,(s,o)=>{t[s]=o.val(e),i++,r&&co.INTEGER_REGEXP_.test(s)?n=Math.max(n,Number(s)):r=!1}),e||!r||!(n<2*i))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let i in t)e[i]=t[i];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+h3(this.getPriority().val())+":"),this.forEachChild(ce,(t,i)=>{let n=i.hash();""!==n&&(e+=":"+t+":"+n)}),this.lazyHash_=""===e?"":lY(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let n=this.resolveIndex_(i);if(!n)return this.children_.getPredecessorKey(e);{let i=n.getPredecessorKey(new hQ(e,t));return i?i.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new hQ(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new hQ(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,hQ.Wrap),n=i.peek();for(;null!=n&&0>t.compare(n,e);)i.getNext(),n=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,hQ.Wrap),n=i.peek();for(;null!=n&&t.compare(n,e)>0;)i.getNext(),n=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ca?-1:0}withIndex(e){if(e===h1||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new co(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===h1||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(ce),i=e.getIterator(ce),n=t.getNext(),r=i.getNext();for(;n&&r;){if(n.name!==r.name||!n.node.equals(r.node))return!1;n=t.getNext(),r=i.getNext()}return null===n&&null===r}}resolveIndex_(e){return e===h1?null:this.indexMap_.get(e.toString())}}co.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ca=new class extends co{constructor(){super(new h9(h5),co.EMPTY_NODE,cs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return co.EMPTY_NODE}isEmpty(){return!1}};function cl(e,t=null){if(null===e)return co.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),eh(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new h8(e,cl(t));if(e instanceof Array){let i=co.EMPTY_NODE;return hs(e,(t,n)=>{if(ej(e,t)&&"."!==t.substring(0,1)){let e=cl(n);(e.isLeafNode()||!e.isEmpty())&&(i=i.updateImmediateChild(t,e))}}),i.updatePriority(cl(t))}{let i=[],n=!1;if(hs(e,(e,t)=>{if("."!==e.substring(0,1)){let r=cl(t);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),i.push(new hQ(e,r)))}}),0===i.length)return co.EMPTY_NODE;let r=cn(i,h6,e=>e.name,h5);if(!n)return new co(r,cl(t),cs.Default);{let e=cn(i,ce.getCompare());return new co(r,cl(t),new cs({".priority":e},{".priority":ce}))}}}Object.defineProperties(hQ,{MIN:{value:new hQ(l7,co.EMPTY_NODE)},MAX:{value:new hQ(l8,ca)}}),h0.__EMPTY_NODE=co.EMPTY_NODE,h8.__childrenNodeConstructor=co,n=ca,o=ca,s=cl;/**
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
 */class ch extends hZ{constructor(e){super(),this.indexPath_=e,eh(!hB(e)&&".priority"!==hM(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),n=this.extractChild(t.node),r=i.compareTo(n);return 0===r?he(e.name,t.name):r}makePost(e,t){let i=cl(e);return new hQ(t,co.EMPTY_NODE.updateChild(this.indexPath_,i))}maxPost(){return new hQ(l8,co.EMPTY_NODE.updateChild(this.indexPath_,ca))}toString(){return hq(this.indexPath_,0).join("/")}}const cc=new /**
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
 */class extends hZ{compare(e,t){let i=e.node.compareTo(t.node);return 0===i?he(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return hQ.MIN}maxPost(){return hQ.MAX}makePost(e,t){return new hQ(t,cl(e))}toString(){return".value"}};function cu(e,t,i){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:i}}/**
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
 */class cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return eh(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(eh(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:l7}hasEnd(){return this.endSet_}getIndexEndValue(){return eh(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(eh(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:l8}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return eh(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){let e=new cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cp(e){let t;let i={};if(e.isDefault())return i;if(e.index_===ce?t="$priority":e.index_===cc?t="$value":e.index_===h1?t="$key":(eh(e.index_ instanceof ch,"Unrecognized index type!"),t=e.index_.toString()),i.orderBy=ex(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";i[t]=ex(e.indexStartValue_),e.startNameSet_&&(i[t]+=","+ex(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";i[t]=ex(e.indexEndValue_),e.endNameSet_&&(i[t]+=","+ex(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?i.limitToFirst=e.limit_:i.limitToLast=e.limit_),i}function cf(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let i=e.viewFrom_;""===i&&(i=e.isViewFromLeft()?"l":"r"),t.vf=i}return e.index_!==ce&&(t.i=e.index_.toString()),t}/**
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
 */class cg extends hA{constructor(e,t,i,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=n,this.log_=l1("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(eh(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,n){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=cg.getListenId_(e,i),o={};this.listens_[s]=o;let a=cp(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,i),eq(this.listens_,s)===o&&n(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let i=cg.getListenId_(e,t);delete this.listens_[i]}get(e){let t=cp(e._queryParams),i=e._path.toString(),n=new eS;return this.restRequest_(i+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(i,r,!1,null),n.resolve(r)):n.reject(Error(r))}),n.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ez(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=eD(o.responseText)}catch(e){l9("Failed to parse JSON response for "+s+": "+o.responseText)}i(null,e)}else 401!==o.status&&404!==o.status&&l9("Got unsuccessful REST response for "+s+" Status: "+o.status),i(o.status);i=null}},o.open("GET",s,!0),o.send()})}}/**
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
 */class cm{constructor(){this.rootNode_=co.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function c_(){return{value:null,children:new Map}}function cy(e,t,i){null!==e.value?i(t,e.value):function(e,t){e.children.forEach((e,i)=>{t(i,e)})}(e,(e,n)=>{cy(n,new hD(t.toString()+"/"+e),i)})}/**
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
 */class cv{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&hs(this.last_,(e,i)=>{t[e]=t[e]-i}),this.last_=e,t}}class cw{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new cv(e),hc(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;hs(e,(e,n)=>{n>0&&ej(this.statsToReport_,e)&&(t[e]=n,i=!0)}),i&&this.server_.reportStats(t),hc(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function cb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cT(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(f=w||(w={}))[f.OVERWRITE=0]="OVERWRITE",f[f.MERGE=1]="MERGE",f[f.ACK_USER_WRITE=2]="ACK_USER_WRITE",f[f.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
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
 */class cC{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=w.ACK_USER_WRITE,this.source=cb()}operationForChild(e){if(!hB(this.path))return eh(hM(this.path)===e,"operationForChild called for unrelated child."),new cC(hF(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return eh(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new hD(e));return new cC(hx(),t,this.revert)}}}/**
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
 */class cE{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=w.OVERWRITE}operationForChild(e){return hB(this.path)?new cE(this.source,hx(),this.snap.getImmediateChild(e)):new cE(this.source,hF(this.path),this.snap)}}/**
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
 */class cS{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=w.MERGE}operationForChild(e){if(!hB(this.path))return eh(hM(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cS(this.source,hF(this.path),this.children);{let t=this.children.subtree(new hD(e));return t.isEmpty()?null:t.value?new cE(this.source,hx(),t.value):new cS(this.source,hx(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ck{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(hB(e))return this.isFullyInitialized()&&!this.filtered_;let t=hM(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function cR(e,t,i,n,r,s){let o=n.filter(e=>e.type===i);o.sort((t,i)=>(function(e,t,i){if(null==t.childName||null==i.childName)throw ec("Should only compare child_ events.");let n=new hQ(t.childName,t.snapshotNode),r=new hQ(i.childName,i.snapshotNode);return e.index_.compare(n,r)})(e,t,i)),o.forEach(i=>{let n=("value"===i.type||"child_removed"===i.type||(i.prevName=s.getPredecessorChildName(i.childName,i.snapshotNode,e.index_)),i);r.forEach(r=>{r.respondsTo(i.type)&&t.push(r.createEvent(n,e.query_))})})}/**
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
 */function cN(e,t){return{eventCache:e,serverCache:t}}function cP(e,t,i,n){return cN(new ck(t,i,n),e.serverCache)}function cA(e,t,i,n){return cN(e.eventCache,new ck(t,i,n))}function cO(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function cL(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const cD=()=>(h||(h=new h9(ht)),h);class cx{constructor(e,t=cD()){this.value=e,this.children=t}static fromObject(e){let t=new cx(null);return hs(e,(e,i)=>{t=t.set(new hD(e),i)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:hx(),value:this.value};if(hB(e))return null;{let i=hM(e),n=this.children.get(i);if(null===n)return null;{let r=n.findRootMostMatchingPathAndValue(hF(e),t);return null!=r?{path:hV(new hD(i),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(hB(e))return this;{let t=hM(e),i=this.children.get(t);return null!==i?i.subtree(hF(e)):new cx(null)}}set(e,t){if(hB(e))return new cx(t,this.children);{let i=hM(e),n=(this.children.get(i)||new cx(null)).set(hF(e),t),r=this.children.insert(i,n);return new cx(this.value,r)}}remove(e){if(hB(e))return this.children.isEmpty()?new cx(null):new cx(null,this.children);{let t=hM(e),i=this.children.get(t);if(!i)return this;{let n;let r=i.remove(hF(e));return(n=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&n.isEmpty())?new cx(null):new cx(this.value,n)}}}get(e){if(hB(e))return this.value;{let t=hM(e),i=this.children.get(t);return i?i.get(hF(e)):null}}setTree(e,t){if(hB(e))return t;{let i;let n=hM(e),r=(this.children.get(n)||new cx(null)).setTree(hF(e),t);return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new cx(this.value,i)}}fold(e){return this.fold_(hx(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((n,r)=>{i[n]=r.fold_(hV(e,n),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,hx(),t)}findOnPath_(e,t,i){let n=!!this.value&&i(t,this.value);if(n)return n;if(hB(e))return null;{let n=hM(e),r=this.children.get(n);return r?r.findOnPath_(hF(e),hV(t,n),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,hx(),t)}foreachOnPath_(e,t,i){if(hB(e))return this;{this.value&&i(t,this.value);let n=hM(e),r=this.children.get(n);return r?r.foreachOnPath_(hF(e),hV(t,n),i):new cx(null)}}foreach(e){this.foreach_(hx(),e)}foreach_(e,t){this.children.inorderTraversal((i,n)=>{n.foreach_(hV(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class cM{constructor(e){this.writeTree_=e}static empty(){return new cM(new cx(null))}}function cU(e,t,i){if(hB(t))return new cM(new cx(i));{let n=e.writeTree_.findRootMostValueAndPath(t);if(null!=n){let r=n.path,s=n.value,o=hW(r,t);return s=s.updateChild(o,i),new cM(e.writeTree_.set(r,s))}{let n=new cx(i);return new cM(e.writeTree_.setTree(t,n))}}}function cF(e,t,i){let n=e;return hs(i,(e,i)=>{n=cU(n,hV(t,e),i)}),n}function cj(e,t){return hB(t)?cM.empty():new cM(e.writeTree_.setTree(t,new cx(null)))}function cq(e,t){return null!=cH(e,t)}function cH(e,t){let i=e.writeTree_.findRootMostValueAndPath(t);return null!=i?e.writeTree_.get(i.path).getChild(hW(i.path,t)):null}function cV(e){let t=[],i=e.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(ce,(e,i)=>{t.push(new hQ(e,i))}):e.writeTree_.children.inorderTraversal((e,i)=>{null!=i.value&&t.push(new hQ(e,i.value))}),t}function cB(e,t){if(hB(t))return e;{let i=cH(e,t);return new cM(null!=i?new cx(i):e.writeTree_.subtree(t))}}function cW(e){return e.writeTree_.isEmpty()}function cz(e,t){return function e(t,i,n){if(null!=i.value)return n.updateChild(t,i.value);{let r=null;return i.children.inorderTraversal((i,s)=>{".priority"===i?(eh(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):n=e(hV(t,i),s,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(hV(t,".priority"),r)),n}}(hx(),e.writeTree_,t)}function c$(e){return e.visible}function cK(e,t,i){let n=cM.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)h$(i,t)?n=cU(n,e=hW(i,t),s.snap):h$(t,i)&&(e=hW(t,i),n=cU(n,hx(),s.snap.getChild(e)));else if(s.children){if(h$(i,t))n=cF(n,e=hW(i,t),s.children);else if(h$(t,i)){if(hB(e=hW(t,i)))n=cF(n,hx(),s.children);else{let t=eq(s.children,hM(e));if(t){let i=t.getChild(hF(e));n=cU(n,hx(),i)}}}}else throw ec("WriteRecord should have .snap or .children")}}return n}function cG(e,t,i,n,r){if(n||r){let s=cB(e.visibleWrites,t);return!r&&cW(s)?i:r||null!=i||cq(s,hx())?cz(cK(e.allWrites,function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(h$(e.path,t)||h$(t,e.path))},t),i||co.EMPTY_NODE):null}{let n=cH(e.visibleWrites,t);if(null!=n)return n;{let n=cB(e.visibleWrites,t);return cW(n)?i:null!=i||cq(n,hx())?cz(n,i||co.EMPTY_NODE):null}}}function cY(e,t,i,n){return cG(e.writeTree,e.treePath,t,i,n)}function cX(e,t){return function(e,t,i){let n=co.EMPTY_NODE,r=cH(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ce,(e,t)=>{n=n.updateImmediateChild(e,t)}),n;if(!i)return cV(cB(e.visibleWrites,t)).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n;{let r=cB(e.visibleWrites,t);return i.forEachChild(ce,(e,t)=>{let i=cz(cB(r,new hD(e)),t);n=n.updateImmediateChild(e,i)}),cV(r).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}}(e.writeTree,e.treePath,t)}function cJ(e,t,i,n){return function(e,t,i,n,r){eh(n||r,"Either existingEventSnap or existingServerSnap must exist");let s=hV(t,i);if(cq(e.visibleWrites,s))return null;{let t=cB(e.visibleWrites,s);return cW(t)?r.getChild(i):cz(t,r.getChild(i))}}(e.writeTree,e.treePath,t,i,n)}function cQ(e,t){var i,n;return i=e.writeTree,n=hV(e.treePath,t),cH(i.visibleWrites,n)}function cZ(e,t,i){return function(e,t,i,n){let r=hV(t,i),s=cH(e.visibleWrites,r);return null!=s?s:n.isCompleteForChild(i)?cz(cB(e.visibleWrites,r),n.getNode().getImmediateChild(i)):null}(e.writeTree,e.treePath,t,i)}function c0(e,t){return c1(hV(e.treePath,t),e.writeTree)}function c1(e,t){return{treePath:e,writeTree:t}}/**
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
 */class c2{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;eh("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),eh(".priority"!==i,"Only non-priority child changes can be tracked.");let n=this.changeMap.get(i);if(n){let r=n.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(i,cu(i,e.snapshotNode,n.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(i);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(i,{type:"child_removed",snapshotNode:n.oldSnap,childName:i});else if("child_changed"===t&&"child_added"===r)this.changeMap.set(i,{type:"child_added",snapshotNode:e.snapshotNode,childName:i});else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(i,cu(i,e.snapshotNode,n.oldSnap));else throw ec("Illegal combination of changes: "+e+" occurred after "+n)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}const c4=new /**
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
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}};class c9{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new ck(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cZ(this.writes_,e,t)}}getChildAfterChild(e,t,i){var n;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:cL(this.viewCache_),s=function(e,t,i,n,r,s,o){let a;let l=cB(e.visibleWrites,t),h=cH(l,hx());if(null!=h)a=h;else{if(null==i)return[];a=cz(l,i)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),i=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o),r=i.getNext();for(;r&&e.length<1;)0!==t(r,n)&&e.push(r),r=i.getNext();return e}}((n=this.writes_).writeTree,n.treePath,r,t,0,i,e);return 0===s.length?null:s[0]}}function c6(e,t,i,n,r,s){let o=t.eventCache;if(null!=cQ(n,i))return t;{let a,l;if(hB(i)){if(eh(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let i=cL(t),r=cX(n,i instanceof co?i:co.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let i=cY(n,cL(t));a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}}else{let h=hM(i);if(".priority"===h){eh(1===hU(i),"Can't have a priority with additional path components");let r=o.getNode(),s=cJ(n,i,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let c;let u=hF(i);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=cJ(n,i,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=cZ(n,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,r,s):o.getNode()}}return cP(t,a,o.isFullyInitialized()||hB(i),e.filter.filtersNodes())}}function c5(e,t,i,n,r,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(hB(i))l=c.updateFullNode(h.getNode(),n,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(i,n);l=c.updateFullNode(h.getNode(),e,null)}else{let e=hM(i);if(!h.isCompleteForPath(i)&&hU(i)>1)return t;let r=hF(i),s=h.getNode().getImmediateChild(e).updateChild(r,n);l=".priority"===e?c.updatePriority(h.getNode(),s):c.updateChild(h.getNode(),e,s,r,c4,null)}let u=cA(t,l,h.isFullyInitialized()||hB(i),c.filtersNodes()),d=new c9(r,u,s);return c6(e,u,i,r,d,a)}function c3(e,t,i,n,r,s,o){let a,l;let h=t.eventCache,c=new c9(r,t,s);if(hB(i))l=e.filter.updateFullNode(t.eventCache.getNode(),n,o),a=cP(t,l,!0,e.filter.filtersNodes());else{let r=hM(i);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),n),a=cP(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=hF(i),u=h.getNode().getImmediateChild(r);if(hB(l))s=n;else{let e=c.getCompleteChild(r);s=null!=e?".priority"===hj(l)&&e.getChild(hH(l)).isEmpty()?e:e.updateChild(l,n):co.EMPTY_NODE}a=u.equals(s)?t:cP(t,e.filter.updateChild(h.getNode(),r,s,l,c,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function c7(e,t){return e.eventCache.isCompleteForChild(t)}function c8(e,t,i){return i.foreach((e,i)=>{t=t.updateChild(e,i)}),t}function ue(e,t,i,n,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=hB(i)?n:new cx(null).setTree(i,n);let c=t.serverCache.getNode();return l.children.inorderTraversal((i,n)=>{if(c.hasChild(i)){let l=c8(e,t.serverCache.getNode().getImmediateChild(i),n);h=c5(e,h,new hD(i),l,r,s,o,a)}}),l.children.inorderTraversal((i,n)=>{let l=!t.serverCache.isCompleteForChild(i)&&null===n.value;if(!c.hasChild(i)&&!l){let l=c8(e,t.serverCache.getNode().getImmediateChild(i),n);h=c5(e,h,new hD(i),l,r,s,o,a)}}),h}function ut(e,t,i,n){var r,s;t.type===w.MERGE&&null!==t.source.queryId&&(eh(cL(e.viewCache_),"We should always have a full cache before handling merges"),eh(cO(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,i,n,r){let s,o;let a=new c2;if(i.type===w.OVERWRITE)i.source.fromUser?s=c3(e,t,i.path,i.snap,n,r,a):(eh(i.source.fromServer,"Unknown source."),o=i.source.tagged||t.serverCache.isFiltered()&&!hB(i.path),s=c5(e,t,i.path,i.snap,n,r,o,a));else if(i.type===w.MERGE){var l,h;let c;i.source.fromUser?(l=i.path,h=i.children,c=t,h.foreach((i,s)=>{let o=hV(l,i);c7(t,hM(o))&&(c=c3(e,c,o,s,n,r,a))}),h.foreach((i,s)=>{let o=hV(l,i);c7(t,hM(o))||(c=c3(e,c,o,s,n,r,a))}),s=c):(eh(i.source.fromServer,"Unknown source."),o=i.source.tagged||t.serverCache.isFiltered(),s=ue(e,t,i.path,i.children,n,r,o,a))}else if(i.type===w.ACK_USER_WRITE)s=i.revert?function(e,t,i,n,r,s){let o;if(null!=cQ(n,i))return t;{let a;let l=new c9(n,t,r),h=t.eventCache.getNode();if(hB(i)||".priority"===hM(i)){let i;if(t.serverCache.isFullyInitialized())i=cY(n,cL(t));else{let e=t.serverCache.getNode();eh(e instanceof co,"serverChildren would be complete if leaf node"),i=cX(n,e)}a=e.filter.updateFullNode(h,i,s)}else{let r=hM(i),c=cZ(n,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=h.getImmediateChild(r)),(a=null!=c?e.filter.updateChild(h,r,c,hF(i),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,co.EMPTY_NODE,hF(i),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=cY(n,cL(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=cQ(n,hx()),cP(t,a,o,e.filter.filtersNodes())}}(e,t,i.path,n,r,a):function(e,t,i,n,r,s,o){if(null!=cQ(r,i))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=n.value){if(hB(i)&&l.isFullyInitialized()||l.isCompleteForPath(i))return c5(e,t,i,l.getNode().getChild(i),r,s,a,o);if(!hB(i))return t;{let n=new cx(null);return l.getNode().forEachChild(h1,(e,t)=>{n=n.set(new hD(e),t)}),ue(e,t,i,n,r,s,a,o)}}{let h=new cx(null);return n.foreach((e,t)=>{let n=hV(i,e);l.isCompleteForPath(n)&&(h=h.set(e,l.getNode().getChild(n)))}),ue(e,t,i,h,r,s,a,o)}}(e,t,i.path,i.affectedTree,n,r,a);else if(i.type===w.LISTEN_COMPLETE)s=function(e,t,i,n,r){let s=t.serverCache;return c6(e,cA(t,s.getNode(),s.isFullyInitialized()||hB(i),s.isFiltered()),i,n,c4,r)}(e,t,i.path,n,a);else throw ec("Unknown operation type: "+i.type);let c=a.getChanges();return function(e,t,i){let n=t.eventCache;if(n.isFullyInitialized()){let r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=cO(e);!(i.length>0)&&e.eventCache.isFullyInitialized()&&(!r||n.getNode().equals(s))&&n.getNode().getPriority().equals(s.getPriority())||i.push({type:"value",snapshotNode:cO(t)})}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,i,n);return r=e.processor_,eh((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),eh(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),eh(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,function(e,t,i,n){let r=n?[n]:e.eventRegistrations_;return function(e,t,i,n){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var i;s.push((i=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:i}))}}),cR(e,r,"child_removed",t,n,i),cR(e,r,"child_added",t,n,i),cR(e,r,"child_moved",s,n,i),cR(e,r,"child_changed",t,n,i),cR(e,r,"value",t,n,i),r}(e.eventGenerator_,t,i,r)}(e,a.changes,a.viewCache.eventCache.getNode(),null)}function ui(e,t,i,n){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return eh(null!=s,"SyncTree gave us an op for an invalid query."),ut(s,t,i,n)}{let r=[];for(let s of e.views.values())r=r.concat(ut(s,t,i,n));return r}}function un(e,t){let i=null;for(let n of e.views.values())i=i||function(e,t){let i=cL(e.viewCache_);return i&&(e.query._queryParams.loadsAllData()||!hB(t)&&!i.getImmediateChild(hM(t)).isEmpty())?i.getChild(t):null}(n,t);return i}class ur{constructor(e){this.listenProvider_=e,this.syncPointTree_=new cx(null),this.pendingWriteTree_={visibleWrites:cM.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function us(e,t,i=!1){let n=function(e,t){for(let i=0;i<e.allWrites.length;i++){let n=e.allWrites[i];if(n.writeId===t)return n}return null}(e.pendingWriteTree_,t);if(!function(e,t){let i=e.allWrites.findIndex(e=>e.writeId===t);eh(i>=0,"removeWrite called with nonexistent writeId.");let n=e.allWrites[i];e.allWrites.splice(i,1);let r=n.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=i&&function(e,t){if(e.snap)return h$(e.path,t);for(let i in e.children)if(e.children.hasOwnProperty(i)&&h$(hV(e.path,i),t))return!0;return!1}(t,n.path)?r=!1:h$(n.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=cK(e.allWrites,c$,hx()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):n.snap?e.visibleWrites=cj(e.visibleWrites,n.path):hs(n.children,t=>{e.visibleWrites=cj(e.visibleWrites,hV(n.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new cx(null);return null!=n.snap?t=t.set(hx(),!0):hs(n.children,e=>{t=t.set(new hD(e),!0)}),ul(e,new cC(n.path,t,i))}}function uo(e,t,i){return ul(e,new cE(cI(),t,i))}function ua(e,t,i){let n=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,i)=>{let n=un(i,hW(e,t));if(n)return n});return cG(n,t,r,i,!0)}function ul(e,t){var i;return function e(t,i,n,r){if(hB(t.path))return function e(t,i,n,r){let s=i.get(hx());null==n&&null!=s&&(n=un(s,hx()));let o=[];return i.children.inorderTraversal((i,s)=>{let a=n?n.getImmediateChild(i):null,l=c0(r,i),h=t.operationForChild(i);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(ui(s,t,r,n))),o}(t,i,n,r);{let s=i.get(hx());null==n&&null!=s&&(n=un(s,hx()));let o=[],a=hM(t.path),l=t.operationForChild(a),h=i.children.get(a);if(h&&l){let t=n?n.getImmediateChild(a):null,i=c0(r,a);o=o.concat(e(l,h,t,i))}return s&&(o=o.concat(ui(s,t,r,n))),o}}(t,e.syncPointTree_,null,(i=e.pendingWriteTree_,c1(hx(),i)))}function uh(e,t){return e.tagToQueryMap.get(t)}function uc(e){let t=e.indexOf("$");return eh(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new hD(e.substr(0,t))}}function uu(e,t,i){let n=e.syncPointTree_.get(t);return eh(n,"Missing sync point for query tag that we're tracking"),ui(n,i,c1(t,e.pendingWriteTree_),null)}/**
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
 */class ud{constructor(e){this.node_=e}getImmediateChild(e){return new ud(this.node_.getImmediateChild(e))}node(){return this.node_}}class up{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=hV(this.path_,e);return new up(this.syncTree_,t)}node(){return ua(this.syncTree_,this.path_)}}const uf=function(e,t,i){return e&&"object"==typeof e?(eh(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?ug(e[".sv"],t,i):"object"==typeof e[".sv"]?um(e[".sv"],t):void eh(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},ug=function(e,t,i){if("timestamp"===e)return i.timestamp;eh(!1,"Unexpected server value: "+e)},um=function(e,t,i){e.hasOwnProperty("increment")||eh(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let n=e.increment;"number"!=typeof n&&eh(!1,"Unexpected increment value: "+n);let r=t.node();if(eh(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;let s=r.getValue();return"number"!=typeof s?n:s+n};function u_(e,t,i){let n;let r=uf(e.getPriority().val(),t.getImmediateChild(".priority"),i);if(!e.isLeafNode())return n=e,r!==e.getPriority().val()&&(n=n.updatePriority(new h8(r))),e.forEachChild(ce,(e,r)=>{let s=u_(r,t.getImmediateChild(e),i);s!==r&&(n=n.updateImmediateChild(e,s))}),n;{let n=uf(e.getValue(),t,i);return n!==e.getValue()||r!==e.getPriority().val()?new h8(n,cl(r)):e}}/**
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
 */class uy{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function uv(e,t){let i=t instanceof hD?t:new hD(t),n=e,r=hM(i);for(;null!==r;){let e=eq(n.node.children,r)||{children:{},childCount:0};n=new uy(r,n,e),r=hM(i=hF(i))}return n}function uw(e){return e.node.value}function ub(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,i,n){let r=void 0===uw(n)&&!uI(n),s=ej(t.node.children,i);r&&s?(delete t.node.children[i],t.node.childCount--,e(t)):r||s||(t.node.children[i]=n.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function uI(e){return e.node.childCount>0}function uT(e,t){hs(e.node.children,(i,n)=>{t(new uy(i,e,n))})}function uC(e){return new hD(null===e.parent?e.name:uC(e.parent)+"/"+e.name)}/**
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
 */const uE=/[\[\].#$\/\u0000-\u001F\u007F]/,uS=/[\[\].#$\u0000-\u001F\u007F]/,uk=function(e){return"string"==typeof e&&0!==e.length&&!uE.test(e)},uR=function(e){var t;return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),"string"==typeof(t=e)&&0!==t.length&&!uS.test(t)},uN=function(e,t,i){let n=i instanceof hD?new hK(i,e):i;if(void 0===t)throw Error(e+"contains undefined "+hY(n));if("function"==typeof t)throw Error(e+"contains a function "+hY(n)+" with contents = "+t.toString());if(l5(t))throw Error(e+"contains "+t.toString()+" "+hY(n));if("string"==typeof t&&t.length>10485760/3&&eQ(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+hY(n)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let i=!1,r=!1;if(hs(t,(t,s)=>{if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!uk(t)))throw Error(e+" contains an invalid key ("+t+") "+hY(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=eQ(t),hG(n),uN(e,s,n),function(e){let t=e.parts_.pop();e.byteLength_-=eQ(t),e.parts_.length>0&&(e.byteLength_-=1)}(n)}),i&&r)throw Error(e+' contains ".value" child '+hY(n)+" in addition to actual children.")}},uP=function(e,t){let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!uk(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&!uR(i))throw Error(`${e} failed: url argument must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class uA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uO(e,t,i){!function(e,t){let i=null;for(let n=0;n<t.length;n++){let r=t[n],s=r.getPath();null===i||hz(s,i.path)||(e.eventLists_.push(i),i=null),null===i&&(i={events:[],path:s}),i.events.push(r)}i&&e.eventLists_.push(i)}(e,i),function(e,t){e.recursionDepth_++;let i=!0;for(let n=0;n<e.eventLists_.length;n++){let r=e.eventLists_[n];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let i=e.events[t];if(null!==i){e.events[t]=null;let n=i.getEventRunner();lJ&&l0("event: "+i.toString()),hh(n)}}}(e.eventLists_[n]),e.eventLists_[n]=null):i=!1)}i&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>h$(e,t)||h$(t,e))}class uL{constructor(e,t,i,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=c_(),this.transactionQueueTree_=new uy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uD(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new hD(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function ux(e,t,i,n,r){e.dataUpdateCount++;let s=new hD(t);i=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,i):i;let o=[];if(r){if(n){let t=eV(i,e=>cl(e));o=function(e,t,i,n){let r=uh(e,n);if(!r)return[];{let n=uc(r),s=n.path,o=n.queryId,a=hW(s,t),l=cx.fromObject(i);return uu(e,s,new cS(cT(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=cl(i);o=function(e,t,i,n){let r=uh(e,n);if(null==r)return[];{let n=uc(r),s=n.path,o=n.queryId,a=hW(s,t);return uu(e,s,new cE(cT(o),a,i))}}(e.serverSyncTree_,s,t,r)}}else if(n){let t=eV(i,e=>cl(e));o=function(e,t,i){let n=cx.fromObject(i);return ul(e,new cS(cI(),t,n))}(e.serverSyncTree_,s,t)}else{let t=cl(i);o=uo(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=uq(e,s)),uO(e.eventQueue_,a,o)}function uM(e,t){uU(e,"connected",t),!1===t&&function(e){uF(e,"onDisconnectEvents");let t=uD(e),i=c_();cy(e.onDisconnect_,hx(),(n,r)=>{let s=u_(r,new up(e.serverSyncTree_,n),t);!function e(t,i,n){if(hB(i))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(i,n);else{let r=hM(i);t.children.has(r)||t.children.set(r,c_()),e(t.children.get(r),i=hF(i),n)}}(i,n,s)});let n=[];cy(i,hx(),(t,i)=>{n=n.concat(uo(e.serverSyncTree_,t,i));let r=function(e,t){let i=uC(uH(e,t)),n=uv(e.transactionQueueTree_,t);return function(e,t,i){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(n,t=>{uW(e,t)}),uW(e,n),function e(t,i,n,r){n&&!r&&i(t),uT(t,t=>{e(t,i,!0,r)}),n&&r&&i(t)}(n,t=>{uW(e,t)}),i}(e,t);uq(e,r)}),e.onDisconnect_=c_(),uO(e.eventQueue_,hx(),n)}(e)}function uU(e,t,i){let n=new hD("/.info/"+t),r=cl(i);e.infoData_.updateSnapshot(n,r);let s=uo(e.infoSyncTree_,n,r);uO(e.eventQueue_,n,s)}function uF(e,...t){let i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),l0(i,...t)}function uj(e,t,i){return ua(e.serverSyncTree_,t,i)||co.EMPTY_NODE}function uq(e,t){let i=uH(e,t),n=uC(i),r=uV(e,i);return function(e,t,i){if(0===t.length)return;let n=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=hW(i,a.path),h=!1,c;if(eh(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,r=r.concat(us(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",r=r.concat(us(e.serverSyncTree_,a.currentWriteId,!0));else{let i=uj(e,a.path,s);a.currentInputSnapshot=i;let n=t[o].update(i.val());if(void 0!==n){uN("transaction failed: Data returned ",n,a.path);let t=cl(n);"object"==typeof n&&null!=n&&ej(n,".priority")||(t=t.updatePriority(i.getPriority()));let o=a.currentWriteId,l=uD(e),h=u_(t,new ud(i),l);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=h,a.currentWriteId=e.nextWriteId_++,s.splice(s.indexOf(o),1),r=(r=r.concat(function(e,t,i,n,r){var s,o;return(s=e.pendingWriteTree_,o=r,eh(n>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:n,visible:o}),o&&(s.visibleWrites=cU(s.visibleWrites,t,i)),s.lastWriteId=n,r)?ul(e,new cE(cb(),t,i)):[]}(e.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally))).concat(us(e.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(us(e.serverSyncTree_,a.currentWriteId,!0))}}uO(e.eventQueue_,i,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===c?n.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):n.push(()=>t[o].onComplete(Error(c),!1,null))))}uB(e,e.transactionQueueTree_);for(let e=0;e<n.length;e++)hh(n[e]);(function e(t,i=t.transactionQueueTree_){if(i||uB(t,i),uw(i)){let n=uV(t,i);eh(n.length>0,"Sending zero length transaction queue"),n.every(e=>0===e.status)&&function(t,i,n){let r=uj(t,i,n.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<n.length;e++){let t=n[e];eh(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=hW(i,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(i.toString(),a,r=>{uF(t,"transaction put response",{path:i.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<n.length;e++)n[e].status=2,s=s.concat(us(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();uB(t,uv(t.transactionQueueTree_,i)),e(t,t.transactionQueueTree_),uO(t.eventQueue_,i,s);for(let e=0;e<r.length;e++)hh(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{l9("transaction at "+i.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}uq(t,i)}},o)}(t,uC(i),n)}else uI(i)&&uT(i,i=>{e(t,i)})})(e,e.transactionQueueTree_)}(e,r,n),n}function uH(e,t){let i;let n=e.transactionQueueTree_;for(i=hM(t);null!==i&&void 0===uw(n);)n=uv(n,i),i=hM(t=hF(t));return n}function uV(e,t){let i=[];return function e(t,i,n){let r=uw(i);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);uT(i,i=>{e(t,i,n)})}(e,t,i),i.sort((e,t)=>e.order-t.order),i}function uB(e,t){let i=uw(t);if(i){let e=0;for(let t=0;t<i.length;t++)2!==i[t].status&&(i[e]=i[t],e++);i.length=e,ub(t,i.length>0?i:void 0)}uT(t,t=>{uB(e,t)})}function uW(e,t){let i=uw(t);if(i){let n=[],r=[],s=-1;for(let t=0;t<i.length;t++)3===i[t].status||(1===i[t].status?(eh(s===t-1,"All SENT items should be at beginning of queue."),s=t,i[t].status=3,i[t].abortReason="set"):(eh(0===i[t].status,"Unexpected transaction status in abort"),i[t].unwatcher(),r=r.concat(us(e.serverSyncTree_,i[t].currentWriteId,!0)),i[t].onComplete&&n.push(i[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?ub(t,void 0):i.length=s+1,uO(e.eventQueue_,uC(t),r);for(let e=0;e<n.length;e++)hh(n[e])}}const uz=function(e,t){let i=u$(e),n=i.namespace;"firebase.com"===i.domain&&l4(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===i.domain||l4("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||l6();let r="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new h_(i.host,i.secure,n,r,t,"",n!==i.subdomain),path:new hD(i.pathString)}},u$=function(e){let t="",i="",n="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(r=/**
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
 */function(e){let t="",i=e.split("/");for(let e=0;e<i.length;e++)if(i[e].length>0){let n=i[e];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(e){}t+="/"+n}return t}(e.substring(c,u)));let d=function(e){let t={};for(let i of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===i.length)continue;let n=i.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):l9(`Invalid query segment '${i}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())i="localhost";else if(p.split(".").length<=2)i=p;else{let e=t.indexOf(".");n=t.substring(0,e).toLowerCase(),i=t.substring(e+1),s=n}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:i,subdomain:n,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class uK{constructor(e,t,i,n){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=n}get key(){return hB(this._path)?null:hj(this._path)}get ref(){return new uG(this._repo,this._path)}get _queryIdentifier(){let e=hn(cf(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return cf(this._queryParams)}isEqual(e){if(!((e=eZ(e))instanceof uK))return!1;let t=this._repo===e._repo,i=hz(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&i&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let i=e.pieceNum_;i<e.pieces_.length;i++)""!==e.pieces_[i]&&(t+="/"+encodeURIComponent(String(e.pieces_[i])));return t||"/"}(this._path)}}class uG extends uK{constructor(e,t){super(e,t,new cd,!1)}get parent(){let e=hH(this._path);return null===e?null:new uG(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}eh(!c,"__referenceConstructor has already been defined"),c=uG,eh(!u,"__referenceConstructor has already been defined"),u=uG;const uY={};class uX{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,i){if(e.stats_=hI(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new cg(e.repoInfo_,(t,i,n,r)=>{ux(e,t,i,n,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>uM(e,!0),0);else{if(null!=i){if("object"!=typeof i)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{ex(i)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new hJ(e.repoInfo_,t,(t,i,n,r)=>{ux(e,t,i,n,r)},t=>{uM(e,t)},t=>{hs(t,(t,i)=>{uU(e,t,i)})},e.authTokenProvider_,e.appCheckProvider_,i),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let i=e.toString();return hb[i]||(hb[i]=t()),hb[i]}(e.repoInfo_,()=>new cw(e.stats_,e.server_)),e.infoData_=new cm,e.infoSyncTree_=new ur({startListening:(t,i,n,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=uo(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),uU(e,"connected",!1),e.serverSyncTree_=new ur({startListening:(t,i,n,r)=>(e.server_.listen(t,n,i,(i,n)=>{let s=r(i,n);uO(e.eventQueue_,t._path,s)}),[]),stopListening:(t,i)=>{e.server_.unlisten(t,i)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new uG(this._repo,hx())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let i=uY[t];i&&i[e.key]===e||l4(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&l4("Cannot call "+e+" on a deleted database.")}}hJ.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},hJ.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},lH=tE,tb(new e0("database",(e,{instanceIdentifier:t})=>(function(e,t,i,n,r){var s,o;let a,l,h,c,u=n||e.options.databaseURL;void 0===u&&(e.options.projectId||l4("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),l0("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=uz(u,r),p=d.repoInfo;void 0!==X&&X.env&&(h=X.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(c=!0,p=(d=uz(u=`http://${h}?ns=${p.namespace}`,r)).repoInfo):c=!d.repoInfo.secure;let f=r&&c?new hp(hp.OWNER):new hd(e.name,e.options,t);return uP("Invalid Firebase Database URL",d),hB(d.path)||l4("Database URL must point to the root of a Firebase Database (not including a child path)."),new uX((s=p,o=new hu(e.name,i),(a=uY[e.name])||(a={},uY[e.name]=a),(l=a[s.toURLString()])&&l4("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new uL(s,!1,f,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),tR(lj,lq,void 0),tR(lj,lq,"esm2017");const uJ=tS({apiKey:"AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU",authDomain:"book-project-8a976.firebaseapp.com",projectId:"book-project-8a976",storageBucket:"book-project-8a976.appspot.com",messagingSenderId:"595782127929",appId:"1:595782127929:web:e819e67d1654c476ec98e8"});!function(e,t){let i=tI("object"==typeof e?e:tk(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!i._initialized){let e=eT("firestore");e&&function(e,t,i,n={}){var r;let s=(e=function(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new aZ(aQ.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let i=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let i=(t=e).constructor?t.constructor.name:null;return i?`a custom ${i} object`:"an object"}}return"function"==typeof e?"a function":aJ()}(e);throw new aZ(aQ.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return e}(e,lC))._getSettings(),o=`${t}:${i}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&function(e){if(aK.logLevel<=rC.WARN){let t=[].map(aX);aK.warn(`Firestore (${a$}): ${e}`,...t)}}("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,i;if("string"==typeof n.mockUserToken)t=n.mockUserToken,i=az.MOCK_USER;else{t=/**
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
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[em(JSON.stringify({alg:"none",type:"JWT"})),em(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new aZ(aQ.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new az(s)}e._authCredentials=new a4(new a1(t,i))}}(i,...e)}}(uJ);const uQ=function(e=tk()){let t=tI(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
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
 */function(e,t){let i=tI(e,"auth");if(i.isInitialized()){let e=i.getImmediate();if(eB(i.getOptions(),null!=t?t:{}))return e;tW(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:ro,persistence:[nM,nv,nw]}),n=eE("authTokenSyncURL");if(n){let e=r_(n);eZ(i).beforeAuthStateChanged(e,()=>e(i.currentUser)),eZ(i).onIdTokenChanged(t=>e(t),void 0,void 0)}let r=eI("auth");return r&&function(e,t,i){let n=eZ(e);tK(n._canInitEmulator,n,"emulator-config-failed"),tK(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let r=!!(null==i?void 0:i.disableWarnings),s=i$(t),{host:o,port:a}=function(e){let t=i$(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){let e=r[1];return{host:e,port:iK(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:iK(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(i,`http://${r}`),i}(uJ),uZ=async function(e,t,i){try{nm(uQ,t,i).then(t=>{t.user,alert(`Your account: ${e} has been created`)})}catch(e){e.code,e.message}},u0=async function(e,t){try{nf(eZ(uQ),i8.credential(e,t)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&ng(uQ),e}).then(e=>{e.user,alert("Your logged in successfully")})}catch(e){console.log(e.code,e.message)}};eZ(uQ).onAuthStateChanged(e=>{e?(lU.style.display="flex",console.log("User is signed in:",e)):(lU.style.display="none",console.log("User is signed out"))},void 0,void 0);
//# sourceMappingURL=index.21cfbe63.js.map
