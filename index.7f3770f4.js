let e,t;var i,n,r,s,o,a,l=globalThis,h={},c={},u=l.parcelRequired7c6;async function d(e){return'<li class="category-item js-current-category" data-category="All Categories">All Categories</li>'+e.data.map(({list_name:e})=>`<li class="category-item" data-category="${e}">${e}</li>`).join("")}async function f(e){return await Promise.all(e.map(async({list_name:e,books:t})=>`
    <div class="book-category-container">
    <h3 class="js-book-category">${e}</h3>
    <ul class='books-list'>${await g(t)}</ul>
    <button class="button see-more" data-js="${e}" aria-label="See more">See more</button>
    </div>
    `))}function p(){let e=window.screen.width;return e<768?"mobile":e<1280?"tablet":e<1440?"desktop":"desktopXl"}null==u&&((u=function(e){if(e in h)return h[e].exports;if(e in c){var t=c[e];delete c[e];var i={id:e,exports:{}};return h[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){c[e]=t},l.parcelRequired7c6=u),u.register,u("3gP5N");const g=async function(e){return"mobile"===p()?v(e.slice(0,1)):"tablet"===p()?v(e.slice(0,3)):"desktop"===p()?v(e.slice(0,4)):v(e)};async function m(e,t){let i=e.split(" "),n=Math.ceil(i.length/2),r=i.slice(0,n).join(" "),s=i.slice(n).join(" ");return`
  <h2 class="books-title">${r} <span class="books-colortitle">${s}</span></h2>
  <ul class="books-list">${await v(t)}</ul>
  <button class="button all-categories__btn" data-js="All Categories" aria-label="All categories">All Categories</button>
`}async function v(e){return e.map(({author:e,book_image:t,title:i,description:n,_id:r})=>`
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
    `).join("")}async function y(e){let t=document.querySelector(".js-current-category");t&&t.classList.remove("js-current-category");let i=document.querySelector(`li[data-category="${e}"]`);i?i.classList.add("js-current-category"):console.error(`Element with category "${e}" not found.`)}var w=(u("3gP5N"),u("3gP5N"));const b=document.getElementById("bookImage"),_=document.getElementById("bookTitle"),I=document.getElementById("bookAuthor"),E=document.getElementById("bookDescription"),T=document.querySelector(".link-amazon"),S=document.querySelector(".link-apple");async function k(e){let{data:t}=await (0,w.getBookByID)(e);b.attributes.src.value=t.book_image,_.textContent=t.title,I.textContent=t.author,E.insertAdjacentHTML("beforeend",t.description),console.log(t.description),T.attributes.href.value=t.buy_links[0].url,S.attributes.href.value=t.buy_links[1].url;let i=document.getElementById("toggleShoppingList"),n=JSON.parse(localStorage.getItem("shoppingListArray")),r=!1;n&&(r=-1!==n.indexOf(e)),i.textContent=r?"Remove from the shopping list":"Add to the shopping list",i.onclick=()=>{n?((r=-1!==n.indexOf(e))?(n.splice(n.indexOf(e),1),localStorage.setItem("shoppingListArray",JSON.stringify(n)),i.textContent="Add to the shopping list"):(n.push(e),localStorage.setItem("shoppingListArray",JSON.stringify(n)),i.textContent="Remove from the shopping list"),0===n.length&&localStorage.removeItem("shoppingListArray")):(i.textContent="Remove from the shopping list",(n=[]).push(e),localStorage.setItem("shoppingListArray",JSON.stringify(n)))}}function C(e){let t=document.querySelector("[data-modal]");document.querySelector("[data-modal-window]");let i=document.querySelector("[data-modal-close]");e.target.closest("[data-modal-close]")===i&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",C),document.body.removeEventListener("keyup",A))}function A(e){let t=document.querySelector("[data-modal]");27==e.keyCode&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",C),document.body.removeEventListener("keyup",A))}function R(){window.scrollTo({top:0,left:0,behavior:"smooth"})}const O=document.querySelector(".books-container"),N=document.querySelector(".category-list");!async function(){try{let e=await (0,w.getCategoryList)();N.insertAdjacentHTML("beforeend",await d(e))}catch(e){}try{let e=await (0,w.getTopBooks)();O.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>'),O.insertAdjacentHTML("beforeend",(await f(e.data)).join(""))}catch(e){}}();const P=async function(e){if(e.preventDefault(),e.target.classList.contains("category-item")){if(O.innerHTML="","All Categories"===e.target.dataset.category){try{let t=await (0,w.getTopBooks)();O.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>'),O.insertAdjacentHTML("beforeend",(await f(t.data)).join("")),y(e.target.dataset.category)}catch(e){}return}try{let{data:t}=await (0,w.getOneCategory)(e.target.dataset.category);O.insertAdjacentHTML("beforeend",await m(e.target.dataset.category,t)),y(e.target.dataset.category)}catch(e){}}},L=async function(e){e.preventDefault();let t=e.target.closest(".books__item");t&&(k(t.attributes.id.value),function(){let e=document.querySelector("[data-modal]");e.classList.add("is-active"),document.body.classList.add("no-scroll"),e.addEventListener("click",C),document.body.addEventListener("keyup",A)}());let i=e.target.classList.contains("see-more"),n=e.target.classList.contains("all-categories__btn"),r=e.target.dataset.js;if(i){R(),O.innerHTML="";try{let{data:e}=await (0,w.getOneCategory)(r);O.insertAdjacentHTML("beforeend",await m(r,e)),y(r)}catch(e){}}else if(n){R(),O.innerHTML="";try{O.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>');let e=await (0,w.getTopBooks)();O.insertAdjacentHTML("beforeend",(await f(e.data)).join("")),y(r)}catch(e){}}};N.addEventListener("click",P),O.addEventListener("click",L),u("9npD5"),u("3WmGK"),u("iB7wN"),u("8h5e4");const D=document.querySelector(".form-wrapper"),M=document.querySelector(".sign-up"),U=document.querySelector(".au-modal-close");document.querySelector("#name"),document.querySelector('input[type="email"]'),document.querySelector('input[type="password"]'),D.style.display="none",M.onclick=()=>void(D.style.display="block"),U.onclick=()=>void(D.style.display="none");/**
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
 */var x={},j=x={};function F(){throw Error("setTimeout has not been defined")}function V(){throw Error("clearTimeout has not been defined")}function B(e){if(nY===setTimeout)return setTimeout(e,0);if((nY===F||!nY)&&setTimeout)return nY=setTimeout,setTimeout(e,0);try{return nY(e,0)}catch(t){try{return nY.call(null,e,0)}catch(t){return nY.call(this,e,0)}}}!function(){try{nY="function"==typeof setTimeout?setTimeout:F}catch(e){nY=F}try{nQ="function"==typeof clearTimeout?clearTimeout:V}catch(e){nQ=V}}();var H=[],$=!1,z=-1;function W(){$&&nZ&&($=!1,nZ.length?H=nZ.concat(H):z=-1,H.length&&K())}function K(){if(!$){var e=B(W);$=!0;for(var t=H.length;t;){for(nZ=H,H=[];++z<t;)nZ&&nZ[z].run();z=-1,t=H.length}nZ=null,$=!1,function(e){if(nQ===clearTimeout)return clearTimeout(e);if((nQ===V||!nQ)&&clearTimeout)return nQ=clearTimeout,clearTimeout(e);try{nQ(e)}catch(t){try{return nQ.call(null,e)}catch(t){return nQ.call(this,e)}}}(e)}}function q(e,t){this.fun=e,this.array=t}function G(){}j.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];H.push(new q(e,t)),1!==H.length||$||B(K)},q.prototype.run=function(){this.fun.apply(null,this.array)},j.title="browser",j.browser=!0,j.env={},j.argv=[],j.version="",j.versions={},j.on=G,j.addListener=G,j.once=G,j.off=G,j.removeListener=G,j.removeAllListeners=G,j.emit=G,j.prependListener=G,j.prependOnceListener=G,j.listeners=function(e){return[]},j.binding=function(e){throw Error("process.binding is not supported")},j.cwd=function(){return"/"},j.chdir=function(e){throw Error("process.chdir is not supported")},j.umask=function(){return 0};/**
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
 */const X=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},J=function(e){let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},Y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),n.push(i[h],i[c],i[u],i[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(X(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):J(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],s=t<e.length?i[e.charAt(t)]:0,o=++t<e.length?i[e.charAt(t)]:64,a=++t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new Q;let l=r<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Q extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z=function(e){let t=X(e);return Y.encodeByteArray(t,!0)},ee=function(e){return Z(e).replace(/\./g,"")},et=function(e){try{return Y.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},ei=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==l)return l;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,en=()=>{if(void 0===x||void 0===x.env)return;let e=void 0;if(e)return JSON.parse(e)},er=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&et(e[1]);return t&&JSON.parse(t)},es=()=>{try{return ei()||en()||er()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eo=e=>{var t,i;return null===(i=null===(t=es())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},ea=e=>{let t=eo(e);if(!t)return;let i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),n]:[t.substring(0,i),n]},el=()=>{var e;return null===(e=es())||void 0===e?void 0:e.config},eh=e=>{var t;return null===(t=es())||void 0===t?void 0:t[`_${e}`]};/**
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
 */class ec{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}/**
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
 */function eu(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class ed extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,ed.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ef.prototype.create)}}class ef{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(ep,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new ed(n,o,i)}}const ep=/\{\$([^}]+)}/g;function eg(e,t){if(e===t)return!0;let i=Object.keys(e),n=Object.keys(t);for(let r of i){if(!n.includes(r))return!1;let i=e[r],s=t[r];if(em(i)&&em(s)){if(!eg(i,s))return!1}else if(i!==s)return!1}for(let e of n)if(!i.includes(e))return!1;return!0}function em(e){return null!==e&&"object"==typeof e}/**
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
 */function ev(e){let t=[];for(let[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function ey(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}function ew(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}class eb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(n.next=e_),void 0===n.error&&(n.error=e_),void 0===n.complete&&(n.complete=e_);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e_(){}/**
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
 */function eI(e){return e&&e._delegate?e._delegate:e}class eE{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const eT="[DEFAULT]";/**
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
 */class eS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ec;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eT})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e=eT){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eT){return this.instances.has(e)}getOptions(e=eT){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[e,t]of this.instancesDeferred.entries())i===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===eT?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}return i||null}normalizeInstanceIdentifier(e=eT){return this.component?this.component.multipleInstances?e:eT:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class ek{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const eC=[];(nX=n0||(n0={}))[nX.DEBUG=0]="DEBUG",nX[nX.VERBOSE=1]="VERBOSE",nX[nX.INFO=2]="INFO",nX[nX.WARN=3]="WARN",nX[nX.ERROR=4]="ERROR",nX[nX.SILENT=5]="SILENT";const eA={debug:n0.DEBUG,verbose:n0.VERBOSE,info:n0.INFO,warn:n0.WARN,error:n0.ERROR,silent:n0.SILENT},eR=n0.INFO,eO={[n0.DEBUG]:"log",[n0.VERBOSE]:"log",[n0.INFO]:"info",[n0.WARN]:"warn",[n0.ERROR]:"error"},eN=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=eO[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eP{constructor(e){this.name=e,this._logLevel=eR,this._logHandler=eN,this._userLogHandler=null,eC.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n0))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n0.DEBUG,...e),this._logHandler(this,n0.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n0.VERBOSE,...e),this._logHandler(this,n0.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n0.INFO,...e),this._logHandler(this,n0.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n0.WARN,...e),this._logHandler(this,n0.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n0.ERROR,...e),this._logHandler(this,n0.ERROR,...e)}}const eL=(e,t)=>t.some(t=>e instanceof t),eD=new WeakMap,eM=new WeakMap,eU=new WeakMap,ex=new WeakMap,ej=new WeakMap;let eF={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return eM.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eU.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return eV(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eV(i){var n;if(i instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(eV(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eD.set(t,e)}).catch(()=>{}),ej.set(t,e),t}(i);if(ex.has(i))return ex.get(i);let r="function"==typeof(n=i)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(eB(this),e),eV(eD.get(this))}:function(...e){return eV(n.apply(eB(this),e))}:function(e,...t){let i=n.call(eB(this),e,...t);return eU.set(i,e.sort?e.sort():[e]),eV(i)}:(n instanceof IDBTransaction&&function(e){if(eM.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});eM.set(e,t)}(n),eL(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,eF):n;return r!==i&&(ex.set(i,r),ej.set(r,i)),r}const eB=e=>ej.get(e),eH=["get","getKey","getAll","getAllKeys","count"],e$=["put","add","delete","clear"],ez=new Map;function eW(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ez.get(t))return ez.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=e$.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||eH.includes(i)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return ez.set(t,s),s}eF={...nG=eF,get:(e,t,i)=>eW(e,t)||nG.get(e,t,i),has:(e,t)=>!!eW(e,t)||nG.has(e,t)};/**
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
 */class eK{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eq="@firebase/app",eG="0.9.25",eX=new eP("@firebase/app"),eJ="[DEFAULT]",eY={[eq]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eQ=new Map,eZ=new Map;function e0(e){let t=e.name;if(eZ.has(t))return eX.debug(`There were multiple attempts to register component ${t}.`),!1;for(let i of(eZ.set(t,e),eQ.values()))!function(e,t){try{e.container.addComponent(t)}catch(i){eX.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}function e1(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}const e2=new ef("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class e9{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new eE("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw e2.create("app-deleted",{appName:this._name})}}/**
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
 */const e4="10.7.1";function e6(e,t={}){let i=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:eJ,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw e2.create("bad-app-name",{appName:String(r)});if(i||(i=el()),!i)throw e2.create("no-options");let s=eQ.get(r);if(s){if(eg(i,s.options)&&eg(n,s.config))return s;throw e2.create("duplicate-app",{appName:r})}let o=new ek(r);for(let e of eZ.values())o.addComponent(e);let a=new e9(i,n,o);return eQ.set(r,a),a}function e5(e=eJ){let t=eQ.get(e);if(!t&&e===eJ&&el())return e6();if(!t)throw e2.create("no-app",{appName:e});return t}function e7(e,t,i){var n;let r=null!==(n=eY[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eX.warn(e.join(" "));return}e0(new eE(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const e3="firebase-heartbeat-store";let e8=null;function te(){return e8||(e8=(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=eV(o);return n&&o.addEventListener("upgradeneeded",e=>{n(eV(o.result),e.oldVersion,e.newVersion,eV(o.transaction),e)}),i&&o.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(e3)}}).catch(e=>{throw e2.create("idb-open",{originalErrorMessage:e.message})})),e8}async function tt(e){try{let t=await te();return await t.transaction(e3).objectStore(e3).get(tn(e))}catch(e){if(e instanceof ed)eX.warn(e.message);else{let t=e2.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eX.warn(t.message)}}}async function ti(e,t){try{let i=(await te()).transaction(e3,"readwrite"),n=i.objectStore(e3);await n.put(t,tn(e)),await i.done}catch(e){if(e instanceof ed)eX.warn(e.message);else{let t=e2.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eX.warn(t.message)}}}function tn(e){return`${e.name}!${e.options.appId}`}class tr{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new to(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=ts();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=ts(),{heartbeatsToSend:i,unsentEntries:n}=function(e,t=1024){let i=[],n=e.slice();for(let r of e){let e=i.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),ta(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),ta(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),r=ee(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ts(){return new Date().toISOString().substring(0,10)}class to{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await tt(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return ti(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return ti(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function ta(e){return ee(JSON.stringify({version:2,heartbeats:e})).length}function tl(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}function th(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}e0(new eE("platform-logger",e=>new eK(e),"PRIVATE")),e0(new eE("heartbeat",e=>new tr(e),"PRIVATE")),e7(eq,eG,""),e7(eq,eG,"esm2017"),e7("fire-js",""),e7("firebase","10.7.1","app"),"function"==typeof SuppressedError&&SuppressedError;const tc=new ef("auth","Firebase",th()),tu=new eP("@firebase/auth");function td(e,...t){tu.logLevel<=n0.ERROR&&tu.error(`Auth (${e4}): ${e}`,...t)}/**
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
 */function tf(e,...t){throw tg(e,...t)}function tp(e,...t){return tg(e,...t)}function tg(e,...t){if("string"!=typeof e){let i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return tc.create(e,...t)}function tm(e,t,...i){if(!e)throw tg(t,...i)}function tv(e){let t="INTERNAL ASSERTION FAILED: "+e;throw td(t),Error(t)}/**
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
 */function ty(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tw(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 */class tb{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||tv("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eu())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===tw()||"https:"===tw()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function t_(e,t){e.emulator||tv("Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class tI{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void tv("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void tv("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void tv("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},tT=new tb(3e4,6e4);function tS(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tk(e,t,i,n,r={}){return tC(e,r,async()=>{let r={},s={};n&&("GET"===t?s=n:r={body:JSON.stringify(n)});let o=ev(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),tI.fetch()(tR(e,e.config.apiHost,i,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function tC(e,t,i){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},tE),t);try{let t=new tO(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();let s=await r.json();if("needConfirmation"in s)throw tN(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{let[t,i]=(r.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw tN(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw tN(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw tN(e,"user-disabled",s);let o=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw new ef("auth","Firebase",Object.assign(Object.assign({},th()),{[o]:i})).create(o,{appName:e.name});tf(e,o)}}catch(t){if(t instanceof ed)throw t;tf(e,"network-request-failed",{message:String(t)})}}async function tA(e,t,i,n,r={}){let s=await tk(e,t,i,n,r);return"mfaPendingCredential"in s&&tf(e,"multi-factor-auth-required",{_serverResponse:s}),s}function tR(e,t,i,n){let r=`${t}${i}?${n}`;return e.config.emulator?t_(e.config,r):`${e.config.apiScheme}://${r}`}class tO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(tp(this.auth,"network-request-failed")),tT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tN(e,t,i){let n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);let r=tp(e,t,n);return r.customData._tokenResponse=i,r}function tP(e){return void 0!==e&&void 0!==e.enterprise}class tL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function tD(e,t){return tk(e,"GET","/v2/recaptchaConfig",tS(e,t))}/**
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
 */async function tM(e,t){return tk(e,"POST","/v1/accounts:delete",t)}async function tU(e,t){return tk(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function tx(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function tj(e,t=!1){let i=eI(e),n=await i.getIdToken(t),r=tV(n);tm(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");let s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:tx(tF(r.auth_time)),issuedAtTime:tx(tF(r.iat)),expirationTime:tx(tF(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function tF(e){return 1e3*Number(e)}function tV(e){let[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return td("JWT malformed, contained fewer than 3 sections"),null;try{let e=et(i);if(!e)return td("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return td("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
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
 */async function tB(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof ed&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
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
 */class tH{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class t${constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tx(this.lastLoginAt),this.creationTime=tx(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tz(e){var t;let i=e.auth,n=await e.getIdToken(),r=await tB(e,tU(i,{idToken:n}));tm(null==r?void 0:r.users.length,i,"internal-error");let s=r.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,i=tl(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],a=[...e.providerData.filter(e=>!o.some(t=>t.providerId===e.providerId)),...o],l=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new t$(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&h})}async function tW(e){let t=eI(e);await tz(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
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
 */async function tK(e,t){let i=await tC(e,{},async()=>{let i=ev({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,s=tR(e,n,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",tI.fetch()(s,{method:"POST",headers:o,body:i})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function tq(e,t){return tk(e,"POST","/v2/accounts:revokeToken",tS(e,t))}/**
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
 */class tG{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){tm(e.idToken,"internal-error"),tm(void 0!==e.idToken,"internal-error"),tm(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=tV(e);return tm(t,"internal-error"),tm(void 0!==t.exp,"internal-error"),tm(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(tm(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:n,expiresIn:r}=await tK(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new tG;return i&&(tm("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),n&&(tm("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(tm("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tG,this.toJSON())}_performRefresh(){return tv("not implemented")}}/**
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
 */function tX(e,t){tm("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tJ{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=tl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tH(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new t$(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await tB(this,this.stsTokenManager.getToken(this.auth,e));return tm(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tj(this,e)}reload(){return tW(this)}_assign(e){this!==e&&(tm(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new tJ(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){tm(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await tz(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await tB(this,tM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,o,a,l,h;let c=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;tm(y&&I,e,"internal-error");let E=tG.fromJSON(this.name,I);tm("string"==typeof y,e,"internal-error"),tX(c,e.name),tX(u,e.name),tm("boolean"==typeof w,e,"internal-error"),tm("boolean"==typeof b,e,"internal-error"),tX(d,e.name),tX(f,e.name),tX(p,e.name),tX(g,e.name),tX(m,e.name),tX(v,e.name);let T=new tJ({uid:y,auth:e,email:u,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return _&&Array.isArray(_)&&(T.providerData=_.map(e=>Object.assign({},e))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,i=!1){let n=new tG;n.updateFromServerResponse(t);let r=new tJ({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await tz(r),r}}/**
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
 */const tY=new Map;function tQ(e){e instanceof Function||tv("Expected a class definition");let t=tY.get(e);return t?t instanceof e||tv("Instance stored in cache mismatched with class"):(t=new e,tY.set(e,t)),t}/**
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
 */class tZ{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function t0(e,t,i){return`firebase:${e}:${t}:${i}`}tZ.type="NONE";class t1{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:n,name:r}=this.auth;this.fullUserKey=t0(this.userKey,n.apiKey,r),this.fullPersistenceKey=t0("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tJ._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new t1(tQ(tZ),e,i);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=n[0]||tQ(tZ),s=t0(i,e.config.apiKey,e.name),o=null;for(let i of t)try{let t=await i._get(s);if(t){let n=tJ._fromJSON(e,t);i!==r&&(o=n),r=i;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length&&(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new t1(r,e,i)}}/**
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
 */function t2(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(t5(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(t9(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(t3(t))return"Blackberry";if(t8(t))return"Webos";if(t4(t))return"Safari";if((t.includes("chrome/")||t6(t))&&!t.includes("edge/"))return"Chrome";if(t7(t))return"Android";let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"}function t9(e=eu()){return/firefox\//i.test(e)}function t4(e=eu()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function t6(e=eu()){return/crios\//i.test(e)}function t5(e=eu()){return/iemobile/i.test(e)}function t7(e=eu()){return/android/i.test(e)}function t3(e=eu()){return/blackberry/i.test(e)}function t8(e=eu()){return/webos/i.test(e)}function ie(e=eu()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function it(e=eu()){return ie(e)||t7(e)||t8(e)||t3(e)||/windows phone/i.test(e)||t5(e)}/**
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
 */function ii(e,t=[]){let i;switch(e){case"Browser":i=t2(eu());break;case"Worker":i=`${t2(eu())}-${e}`;break;default:i=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${e4}/${n}`}/**
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
 */class ir{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=t=>new Promise((i,n)=>{try{let n=e(t);i(n)}catch(e){n(e)}});i.onAbort=t,this.queue.push(i);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
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
 */async function is(e,t={}){return tk(e,"GET","/v2/passwordPolicy",tS(e,t))}class io{constructor(e){var t,i,n,r;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,n,r,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(i=a.meetsMaxPasswordLength)||void 0===i||i),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let i;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class ia{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new il(this),this.idTokenSubscription=new il(this),this.beforeStateQueue=new ir(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tQ(t)),this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await t1.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(null==o?void 0:o.user)&&(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(tm(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tz(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?eI(e):null;return t&&tm(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&tm(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tQ(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new io(await is(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ef("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await tq(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&tQ(e)||this._popupRedirectResolver;tm(t,this,"argument-error"),this.redirectPersistenceManager=await t1.create(this,[tQ(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(tm(o,this,"internal-error"),o.then(()=>{s||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,i,n);return()=>{s=!0,r()}}{let i=e.addObserver(t);return()=>{s=!0,i()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return tm(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ii(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){tu.logLevel<=n0.WARN&&tu.warn(`Auth (${e4}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class il{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let i=new eb(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return tm(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ih(e){return new Promise((t,i)=>{var n,r;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=tp("internal-error");t.customData=e,i(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(s)})}function ic(e){return`__${e}${Math.floor(1e6*Math.random())}`}class iu{constructor(e){this.type="recaptcha-enterprise",this.auth=eI(e)}async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{tD(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new tL(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function n(t,i,n){let r=window.grecaptcha;tP(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{i(this.auth).then(i=>{if(!t&&tP(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}ih("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function id(e,t,i,n=!1){let r;let s=new iu(e);try{r=await s.verify(i)}catch(e){r=await s.verify(i,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ip(e,t,i,n){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r||!r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async r=>{if("auth/missing-recaptcha-token"!==r.code)return Promise.reject(r);{console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let r=await id(e,t,i,"getOobCode"===i);return n(e,r)}});{let r=await id(e,t,i,"getOobCode"===i);return n(e,r)}}function ig(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function im(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 */class iv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tv("not implemented")}_getIdTokenResponse(e){return tv("not implemented")}_linkToIdToken(e,t){return tv("not implemented")}_getReauthenticationResolver(e){return tv("not implemented")}}async function iy(e,t){return tk(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function iw(e,t){return tA(e,"POST","/v1/accounts:signInWithPassword",tS(e,t))}/**
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
 */async function ib(e,t){return tA(e,"POST","/v1/accounts:signInWithEmailLink",tS(e,t))}async function i_(e,t){return tA(e,"POST","/v1/accounts:signInWithEmailLink",tS(e,t))}/**
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
 */class iI extends iv{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new iI(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new iI(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ip(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",iw);case"emailLink":return ib(e,{email:this._email,oobCode:this._password});default:tf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ip(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iy);case"emailLink":return i_(e,{idToken:t,email:this._email,oobCode:this._password});default:tf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function iE(e,t){return tA(e,"POST","/v1/accounts:signInWithIdp",tS(e,t))}class iT extends iv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new iT(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=tl(t,["providerId","signInMethod"]);if(!i||!n)return null;let s=new iT(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return iE(e,this.buildRequest())}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,iE(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,iE(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ev(t)}return e}}/**
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
 */async function iS(e,t){return tk(e,"POST","/v1/accounts:sendVerificationCode",tS(e,t))}async function ik(e,t){return tA(e,"POST","/v1/accounts:signInWithPhoneNumber",tS(e,t))}async function iC(e,t){let i=await tA(e,"POST","/v1/accounts:signInWithPhoneNumber",tS(e,t));if(i.temporaryProof)throw tN(e,"account-exists-with-different-credential",i);return i}const iA={USER_NOT_FOUND:"user-not-found"};async function iR(e,t){return tA(e,"POST","/v1/accounts:signInWithPhoneNumber",tS(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),iA)}/**
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
 */class iO extends iv{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new iO({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new iO({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ik(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return iC(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return iR(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new iO({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}class iN{constructor(e){var t,i,n,r,s,o;let a=ey(ew(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(i=a.oobCode)&&void 0!==i?i:null,c=/**
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
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);tm(l&&h&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=h,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=ey(ew(e)).link,i=t?ey(ew(t)).deep_link_id:null,n=ey(ew(e)).deep_link_id;return(n?ey(ew(n)).link:null)||n||i||t||e}(e);try{return new iN(t)}catch(e){return null}}}/**
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
 */class iP{constructor(){this.providerId=iP.PROVIDER_ID}static credential(e,t){return iI._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=iN.parseLink(t);return tm(i,"argument-error"),iI._fromEmailAndCode(e,i.code,i.tenantId)}}iP.PROVIDER_ID="password",iP.EMAIL_PASSWORD_SIGN_IN_METHOD="password",iP.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class iL{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class iD extends iL{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class iM extends iD{constructor(){super("facebook.com")}static credential(e){return iT._fromParams({providerId:iM.PROVIDER_ID,signInMethod:iM.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return iM.credentialFromTaggedObject(e)}static credentialFromError(e){return iM.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return iM.credential(e.oauthAccessToken)}catch(e){return null}}}iM.FACEBOOK_SIGN_IN_METHOD="facebook.com",iM.PROVIDER_ID="facebook.com";/**
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
 */class iU extends iD{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return iT._fromParams({providerId:iU.PROVIDER_ID,signInMethod:iU.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return iU.credentialFromTaggedObject(e)}static credentialFromError(e){return iU.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return iU.credential(t,i)}catch(e){return null}}}iU.GOOGLE_SIGN_IN_METHOD="google.com",iU.PROVIDER_ID="google.com";/**
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
 */class ix extends iD{constructor(){super("github.com")}static credential(e){return iT._fromParams({providerId:ix.PROVIDER_ID,signInMethod:ix.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ix.credentialFromTaggedObject(e)}static credentialFromError(e){return ix.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ix.credential(e.oauthAccessToken)}catch(e){return null}}}ix.GITHUB_SIGN_IN_METHOD="github.com",ix.PROVIDER_ID="github.com";/**
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
 */class ij extends iD{constructor(){super("twitter.com")}static credential(e,t){return iT._fromParams({providerId:ij.PROVIDER_ID,signInMethod:ij.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ij.credentialFromTaggedObject(e)}static credentialFromError(e){return ij.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ij.credential(t,i)}catch(e){return null}}}ij.TWITTER_SIGN_IN_METHOD="twitter.com",ij.PROVIDER_ID="twitter.com";/**
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
 */class iF{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){return new iF({user:await tJ._fromIdTokenResponse(e,i,n),providerId:iV(i),_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){return await e._updateTokensIfNecessary(i,!0),new iF({user:e,providerId:iV(i),_tokenResponse:i,operationType:t})}}function iV(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class iB extends ed{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,iB.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new iB(e,t,i,n)}}function iH(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw iB._fromErrorAndOperation(e,i,t,n);throw i})}async function i$(e,t,i=!1){let n=await tB(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return iF._forOperation(e,"link",n)}/**
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
 */async function iz(e,t,i=!1){let{auth:n}=e,r="reauthenticate";try{let s=await tB(e,iH(n,r,t,e),i);tm(s.idToken,n,"internal-error");let o=tV(s.idToken);tm(o,n,"internal-error");let{sub:a}=o;return tm(e.uid===a,n,"user-mismatch"),iF._forOperation(e,r,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&tf(n,"user-mismatch"),e}}/**
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
 */async function iW(e,t,i=!1){let n="signIn",r=await iH(e,n,t),s=await iF._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}new WeakMap;const iK="__sak";/**
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
 */class iq{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(iK,"1"),this.storage.removeItem(iK),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class iG extends iq{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
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
 */function(){let e=eu();return t4(e)||ie(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=it(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);(function(){let e=eu();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iG.type="LOCAL";/**
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
 */class iX extends iq{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}iX.type="SESSION";/**
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
 */class iJ{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new iJ(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:i});let s=Array.from(r).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */function iY(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}iJ.receivers=[];/**
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
 */class iQ{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let n,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=iY("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},i);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(h),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
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
 */function iZ(){return window}/**
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
 */function i0(){return void 0!==iZ().WorkerGlobalScope&&"function"==typeof iZ().importScripts}async function i1(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
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
 */const i2="firebaseLocalStorageDb",i9="firebaseLocalStorage",i4="fbase_key";class i6{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function i5(e,t){return e.transaction([i9],t?"readwrite":"readonly").objectStore(i9)}function i7(){let e=indexedDB.open(i2,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(i9,{keyPath:i4})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(i9)?t(i):(i.close(),await new i6(indexedDB.deleteDatabase(i2)).toPromise(),t(await i7()))})})}async function i3(e,t,i){return new i6(i5(e,!0).put({[i4]:t,value:i})).toPromise()}async function i8(e,t){let i=i5(e,!1).get(t),n=await new i6(i).toPromise();return void 0===n?null:n.value}function ne(e,t){return new i6(i5(e,!0).delete(t)).toPromise()}class nt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await i7()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=iJ._getInstance(i0()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await i1(),!this.activeServiceWorker)return;this.sender=new iQ(this.activeServiceWorker);let i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await i7();return await i3(e,iK,"1"),await ne(e,iK),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>i3(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>i8(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ne(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new i6(i5(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;if(0!==e.length)for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function ni(e,t,i){var n,r,s;let o=await i.verify();try{let a;if(tm("string"==typeof o,e,"argument-error"),tm("recaptcha"===i.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a)return tm("enroll"===t.type,e,"internal-error"),(await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},tk(e,"POST","/v2/accounts/mfaEnrollment:start",tS(e,r)))).phoneSessionInfo.sessionInfo;{tm("signin"===t.type,e,"internal-error");let i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;return tm(i,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:o}},tk(e,"POST","/v2/accounts/mfaSignIn:start",tS(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await iS(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{i._reset()}}nt.type="LOCAL",ic("rcb"),new tb(3e4,6e4);/**
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
 */class nn{constructor(e){this.providerId=nn.PROVIDER_ID,this.auth=eI(e)}verifyPhoneNumber(e,t){return ni(this.auth,e,eI(t))}static credential(e,t){return iO._fromVerification(e,t)}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?iO._fromTokenResponse(t,i):null}}nn.PROVIDER_ID="phone",nn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class nr extends iv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return iE(e,this._buildIdpRequest())}_linkToIdToken(e,t){return iE(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return iE(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ns(e){return iW(e.auth,new nr(e),e.bypassAuthState)}function no(e){let{auth:t,user:i}=e;return tm(i,t,"internal-error"),iz(i,new nr(e),e.bypassAuthState)}async function na(e){let{auth:t,user:i}=e;return tm(i,t,"internal-error"),i$(i,new nr(e),e.bypassAuthState)}/**
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
 */class nl{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ns;case"linkViaPopup":case"linkViaRedirect":return na;case"reauthViaPopup":case"reauthViaRedirect":return no;default:tf(this.auth,"internal-error")}}resolve(e){this.pendingPromise||tv("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||tv("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nh=new tb(2e3,1e4);class nc extends nl{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,nc.currentPopupAction&&nc.currentPopupAction.cancel(),nc.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return tm(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||tv("Popup operations only handle one event");let e=iY();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tp(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nc.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tp(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nh.get())};e()}}nc.currentPopupAction=null;const nu=new Map;class nd extends nl{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=nu.get(this.auth._key());if(!e){try{let t=await nf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}nu.set(this.auth._key(),e)}return this.bypassAuthState||nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nf(e,t){let i=t0("pendingRedirect",t.config.apiKey,t.name),n=tQ(e._redirectPersistence);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}function np(e,t){nu.set(e._key(),t)}async function ng(e,t,i=!1){let n=eI(e),r=t?tQ(t):(tm(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new nd(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ny(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ny(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(tp(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nv(e))}saveEventToCache(e){this.cachedEventUids.add(nv(e)),this.lastProcessedEventTime=Date.now()}}function nv(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ny({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function nw(e,t={}){return tk(e,"GET","/v1/projects",t)}/**
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
 */const nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n_=/^https?/;async function nI(e){if(e.config.emulator)return;let{authorizedDomains:t}=await nw(e);for(let e of t)try{if(function(e){let t=ty(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!n_.test(i))return!1;if(nb.test(e))return n===e;let r=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}(e))return}catch(e){}tf(e,"unauthorized-domain")}/**
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
 */const nE=new tb(3e4,6e4);function nT(){let e=iZ().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let nS=null;/**
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
 */const nk=new tb(5e3,15e3),nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function nR(e){let t=await (nS=nS||new Promise((t,i)=>{var n,r,s;function o(){nT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nT(),i(tp(e,"network-request-failed"))},timeout:nE.get()})}if(null===(r=null===(n=iZ().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=iZ().gapi)||void 0===s?void 0:s.load)o();else{let t=ic("iframefcb");return iZ()[t]=()=>{gapi.load?o():i(tp(e,"network-request-failed"))},ih(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e))}}).catch(e=>{throw nS=null,e})),i=iZ().gapi;return tm(i,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;tm(t.authDomain,e,"auth-domain-config-required");let i=t.emulator?t_(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:e4},r=nA.get(e.config.apiHost);r&&(n.eid=r);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${ev(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({setHideOnLeave:!1});let r=tp(e,"network-request-failed"),s=iZ().setTimeout(()=>{n(r)},nk.get());function o(){iZ().clearTimeout(s),i(t)}t.ping(o).then(o,()=>{n(r)})}))}/**
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
 */const nO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class nN{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}const nP=encodeURIComponent("fac");async function nL(e,t,i,n,r,s){tm(e.config.authDomain,e,"auth-domain-config-required"),tm(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:e4,eventId:r};if(t instanceof iL)for(let[i,n]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[i]=n;if(t instanceof iD){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];let a=await e._getAppCheckToken(),l=a?`#${nP}=${encodeURIComponent(a)}`:"";return`${function({config:e}){return e.emulator?t_(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${ev(o).slice(1)}${l}`}/**
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
 */const nD="webStorageSupport",nM=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iX,this._completeRedirectFn=ng,this._overrideRedirectResult=np}async _openPopup(e,t,i,n){var r;(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager)||tv("_initialize() not called before _openPopup()");let s=await nL(e,t,i,ty(),n);return function(e,t,i,n=500,r=600){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},nO),{width:n.toString(),height:r.toString(),top:s,left:o}),h=eu().toLowerCase();i&&(a=t6(h)?"_blank":i),t9(h)&&(t=t||"http://localhost",l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=eu()){var t;return ie(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",a),new nN(null);let u=window.open(t||"",a,c);tm(u,e,"popup-blocked");try{u.focus()}catch(e){}return new nN(u)}(e,s,iY())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=await nL(e,t,i,ty(),n),iZ().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(i||tv("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await nR(e),i=new nm(e);return t.register("authEvent",t=>(tm(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nD,{type:nD},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[nD];void 0!==r&&t(!!r),tf(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return it()||t4()||ie()}};class nU{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return tv("unexpected MultiFactorSessionType")}}}class nx extends nU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nx(e)}_finalizeEnroll(e,t,i){return tk(e,"POST","/v2/accounts/mfaEnrollment:finalize",tS(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return tk(e,"POST","/v2/accounts/mfaSignIn:finalize",tS(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class nj extends nU{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new nj(t,void 0,e)}static _fromEnrollmentId(e,t){return new nj(t,e)}async _finalizeEnroll(e,t,i){return tm(void 0!==this.secret,e,"argument-error"),tk(e,"POST","/v2/accounts/mfaEnrollment:finalize",tS(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){tm(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let i={verificationCode:this.otp};return tk(e,"POST","/v2/accounts/mfaSignIn:finalize",tS(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}class nF{constructor(e,t,i,n,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new nF(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var i;let n=!1;return(nV(e)||nV(t))&&(n=!0),n&&(nV(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),nV(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function nV(e){return void 0===e||(null==e?void 0:e.length)===0}var nB="@firebase/auth",nH="1.5.1";/**
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
 */class n${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){tm(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const nz=eh("authIdTokenMaxAge")||300;let nW=null;const nK=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>nz)return;let r=null==i?void 0:i.token;nW!==r&&(nW=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function nq(e=e5()){let t=e1(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
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
 */function(e,t){let i=e1(e,"auth");if(i.isInitialized()){let e=i.getImmediate();if(eg(i.getOptions(),null!=t?t:{}))return e;tf(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:nM,persistence:[nt,iG,iX]}),n=eh("authTokenSyncURL");if(n){let e=nK(n);eI(i).beforeAuthStateChanged(e,()=>e(i.currentUser)),eI(i).onIdTokenChanged(t=>e(t),void 0,void 0)}let r=eo("auth");return r&&function(e,t,i){let n=eI(e);tm(n._canInitEmulator,n,"emulator-config-failed"),tm(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let r=!!(null==i?void 0:i.disableWarnings),s=ig(t),{host:o,port:a}=function(e){let t=ig(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){let e=r[1];return{host:e,port:im(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:im(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(i,`http://${r}`),i}nJ="Browser",e0(new eE("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=i.options;tm(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});let a=new ia(i,n,r,{apiKey:s,authDomain:o,clientPlatform:nJ,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ii(nJ)});return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(tQ);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),e0(new eE("auth-internal",e=>new n$(eI(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),e7(nB,nH,/**
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
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(nJ)),e7(nB,nH,"esm2017");var nG,nX,nJ,nY,nQ,nZ,n0,n1,n2="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==l?l:"undefined"!=typeof self?self:{},n9={},n4=n4||{},n6=n2||self;function n5(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function n7(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function n3(e,t,i){return e.call.apply(e.bind,arguments)}function n8(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function re(e,t,i){return(re=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n3:n8).apply(null,arguments)}function rt(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ri(e,t){function i(){}i.prototype=t.prototype,e.$=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.ac=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function rn(){this.s=this.s,this.o=this.o}rn.prototype.s=!1,rn.prototype.sa=function(){this.s||(this.s=!0,this.N())},rn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return -1};function rs(e){let t=e.length;if(0<t){let i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function ro(e,t){for(let t=1;t<arguments.length;t++){let i=arguments[t];if(n5(i)){let t=e.length||0,n=i.length||0;e.length=t+n;for(let r=0;r<n;r++)e[t+r]=i[r]}else e.push(i)}}function ra(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ra.prototype.h=function(){this.defaultPrevented=!0};var rl=function(){if(!n6.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};n6.addEventListener("test",e,t),n6.removeEventListener("test",e,t)}catch(e){}return e}();function rh(e){return/^[\s\xa0]*$/.test(e)}function rc(){var e=n6.navigator;return e&&(e=e.userAgent)?e:""}function ru(e){return -1!=rc().indexOf(e)}function rd(e){return rd[" "](e),e}rd[" "]=function(){};var rf=ru("Opera"),rp=ru("Trident")||ru("MSIE"),rg=ru("Edge"),rm=rg||rp,rv=ru("Gecko")&&!(-1!=rc().toLowerCase().indexOf("webkit")&&!ru("Edge"))&&!(ru("Trident")||ru("MSIE"))&&!ru("Edge"),ry=-1!=rc().toLowerCase().indexOf("webkit")&&!ru("Edge");function rw(){var e=n6.document;return e?e.documentMode:void 0}e:{var rb,r_="",rI=(rb=rc(),rv?/rv:([^\);]+)(\)|;)/.exec(rb):rg?/Edge\/([\d\.]+)/.exec(rb):rp?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(rb):ry?/WebKit\/(\S+)/.exec(rb):rf?/(?:Version)[ \/]?(\S+)/.exec(rb):void 0);if(rI&&(r_=rI?rI[1]:""),rp){var rE=rw();if(null!=rE&&rE>parseFloat(r_)){n=String(rE);break e}}n=r_}var rT=n6.document&&rp&&(rw()||parseInt(n,10))||void 0;function rS(e,t){if(ra.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rv){e:{try{rd(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:rk[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&rS.$.h.call(this)}}ri(rS,ra);var rk={2:"touch",3:"pen",4:"mouse"};rS.prototype.h=function(){rS.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var rC="closure_listenable_"+(1e6*Math.random()|0),rA=0;function rR(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.la=r,this.key=++rA,this.fa=this.ia=!1}function rO(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function rN(e,t,i){for(let n in e)t.call(i,e[n],n,e)}function rP(e){let t={};for(let i in e)t[i]=e[i];return t}const rL="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rD(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t])e[i]=n[i];for(let t=0;t<rL.length;t++)i=rL[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function rM(e){this.src=e,this.g={},this.h=0}function rU(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],s=rr(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(rO(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function rx(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&!!i==s.capture&&s.la==n)return r}return -1}rM.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=rx(e,t,n,r);return -1<o?(t=e[o],i||(t.ia=!1)):((t=new rR(t,this.src,s,!!n,r)).ia=i,e.push(t)),t};var rj="closure_lm_"+(1e6*Math.random()|0),rF={};function rV(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var o=n7(r)?!!r.capture:!!r,a=rz(e);if(a||(e[rj]=a=new rM(e)),(i=a.add(t,i,n,o,s)).proxy)return i;if(n=function e(t){return r$.call(e.src,e.listener,t)},i.proxy=n,n.src=e,n.listener=i,e.addEventListener)rl||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(rH(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return i}function rB(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[rC])rU(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(rH(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=rz(t))?(rU(i,e),0==i.h&&(i.src=null,t[rj]=null)):rO(e)}}}function rH(e){return e in rF?rF[e]:rF[e]="on"+e}function r$(e,t){if(e.fa)e=!0;else{t=new rS(t,this);var i=e.listener,n=e.la||e.src;e.ia&&rB(e),e=i.call(n,t)}return e}function rz(e){return(e=e[rj])instanceof rM?e:null}var rW="__closure_events_fn_"+(1e9*Math.random()>>>0);function rK(e){return"function"==typeof e?e:(e[rW]||(e[rW]=function(t){return e.handleEvent(t)}),e[rW])}function rq(){rn.call(this),this.i=new rM(this),this.S=this,this.J=null}function rG(e,t){var i,n=e.J;if(n)for(i=[];n;n=n.J)i.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new ra(t,e);else if(t instanceof ra)t.target=t.target||e;else{var r=t;rD(t=new ra(n,e),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=t.g=i[s];r=rX(o,n,!0,t)&&r}if(r=rX(o=t.g=e,n,!0,t)&&r,r=rX(o,n,!1,t)&&r,i)for(s=0;s<i.length;s++)r=rX(o=t.g=i[s],n,!1,t)&&r}function rX(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==i){var a=o.listener,l=o.la||o.src;o.ia&&rU(e.i,o),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}ri(rq,rn),rq.prototype[rC]=!0,rq.prototype.removeEventListener=function(e,t,i,n){!function e(t,i,n,r,s){if(Array.isArray(i))for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);else(r=n7(r)?!!r.capture:!!r,n=rK(n),t&&t[rC])?(t=t.i,(i=String(i).toString())in t.g&&-1<(n=rx(o=t.g[i],n,r,s))&&(rO(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[i],t.h--))):t&&(t=rz(t))&&(i=t.g[i.toString()],t=-1,i&&(t=rx(i,n,r,s)),(n=-1<t?i[t]:null)&&rB(n))}(this,e,t,i,n)},rq.prototype.N=function(){if(rq.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)rO(i[n]);delete t.g[e],t.h--}}this.J=null},rq.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},rq.prototype.P=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var rJ=n6.JSON.stringify,rY=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new rQ,e=>e.reset());class rQ{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let rZ,r0=!1,r1=new class{constructor(){this.h=this.g=null}add(e,t){let i=rY.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}},r2=()=>{let e=n6.Promise.resolve(void 0);rZ=()=>{e.then(r9)}};var r9=()=>{let e;for(var t;e=null,r1.g&&(e=r1.g,r1.g=r1.g.next,r1.g||(r1.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){n6.setTimeout(()=>{throw e},0)}(e)}rY.j(t),100>rY.h&&(rY.h++,t.next=rY.g,rY.g=t)}r0=!1};function r4(e,t){rq.call(this),this.h=e||1,this.g=t||n6,this.j=re(this.qb,this),this.l=Date.now()}function r6(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function r5(e,t,i){if("function"==typeof e)i&&(e=re(e,i));else if(e&&"function"==typeof e.handleEvent)e=re(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:n6.setTimeout(e,t||0)}ri(r4,rq),(n1=r4.prototype).ga=!1,n1.T=null,n1.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rG(this,"tick"),this.ga&&(r6(this),this.start()))}},n1.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n1.N=function(){r4.$.N.call(this),r6(this),delete this.g};class r7 extends rn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=r5(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let i=t.h;t.h=null,t.m.apply(null,i)}(this)}N(){super.N(),this.g&&(n6.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function r3(e){rn.call(this),this.h=e,this.g={}}ri(r3,rn);var r8=[];function se(e,t,i,n){Array.isArray(i)||(i&&(r8[0]=i.toString()),i=r8);for(var r=0;r<i.length;r++){var s=function e(t,i,n,r,s){if(r&&r.once)return function e(t,i,n,r,s){if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=rK(n),t&&t[rC]?t.P(i,n,n7(r)?!!r.capture:!!r,s):rV(t,i,n,!0,r,s)}(t,i,n,r,s);if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=rK(n),t&&t[rC]?t.O(i,n,n7(r)?!!r.capture:!!r,s):rV(t,i,n,!1,r,s)}(t,i[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function st(e){rN(e.g,function(e,t){this.g.hasOwnProperty(t)&&rB(e)},e),e.g={}}function si(){this.g=!0}function sn(e,t,i,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i){for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}}return rJ(i)}catch(e){return t}}(e,i)+(n?" "+n:"")})}r3.prototype.N=function(){r3.$.N.call(this),st(this)},r3.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},si.prototype.Ea=function(){this.g=!1},si.prototype.info=function(){};var sr={},ss=null;function so(){return ss=ss||new rq}function sa(e){ra.call(this,sr.Ta,e)}function sl(e){let t=so();rG(t,new sa(t))}function sh(e,t){ra.call(this,sr.STAT_EVENT,e),this.stat=t}function sc(e){let t=so();rG(t,new sh(t,e))}function su(e,t){ra.call(this,sr.Ua,e),this.size=t}function sd(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return n6.setTimeout(function(){e()},t)}sr.Ta="serverreachability",ri(sa,ra),sr.STAT_EVENT="statevent",ri(sh,ra),sr.Ua="timingevent",ri(su,ra);var sf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sg(){}function sm(e){return e.h||(e.h=e.i())}function sv(){}sg.prototype.h=null;var sy={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sw(){ra.call(this,"d")}function sb(){ra.call(this,"c")}function s_(){}function sI(e,t,i,n){this.l=e,this.j=t,this.m=i,this.W=n||1,this.U=new r3(this),this.P=sT,e=rm?125:void 0,this.V=new r4(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sE}function sE(){this.i=null,this.g="",this.h=!1}ri(sw,ra),ri(sb,ra),ri(s_,sg),s_.prototype.g=function(){return new XMLHttpRequest},s_.prototype.i=function(){return{}},s=new s_;var sT=45e3,sS={},sk={};function sC(e,t,i){e.L=1,e.A=sW(sV(t)),e.u=i,e.S=!0,sA(e,null)}function sA(e,t){e.G=Date.now(),sN(e),e.B=sV(e.A);var i=e.B,n=e.W;Array.isArray(n)||(n=[String(n)]),s4(i.i,"t",n),e.o=0,i=e.l.J,e.h=new sE,e.g=oq(e.l,i?t:null,!e.u),0<e.O&&(e.M=new r7(re(e.Pa,e,e.g),e.O)),se(e.U,e.g,"readystatechange",e.nb),t=e.I?rP(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),sl(),function(e,t,i,n,r,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+o})}(e.j,e.v,e.B,e.m,e.W,e.u)}function sR(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function sO(e,t,i){let n=!0,r;for(;!e.J&&e.o<i.length;)if((r=function(e,t){var i=e.o,n=t.indexOf("\n",i);return -1==n?sk:isNaN(i=Number(t.substring(i,n)))?sS:(n+=1)+i>t.length?sk:(t=t.slice(n,n+i),e.o=n+i,t)}(e,i))==sk){4==t&&(e.s=4,sc(14),n=!1),sn(e.j,e.m,null,"[Incomplete Response]");break}else if(r==sS){e.s=4,sc(15),sn(e.j,e.m,i,"[Invalid Chunk]"),n=!1;break}else sn(e.j,e.m,r,null),sU(e,r);sR(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=i.length||e.h.h||(e.s=1,sc(16),n=!1),e.i=e.i&&n,n?0<i.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),oF(t),t.M=!0,sc(11))):(sn(e.j,e.m,i,"[Invalid Chunked Response]"),sM(e),sD(e))}function sN(e){e.Y=Date.now()+e.P,sP(e,e.P)}function sP(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=sd(re(e.lb,e),t)}function sL(e){e.C&&(n6.clearTimeout(e.C),e.C=null)}function sD(e){0==e.l.H||e.J||oH(e.l,e)}function sM(e){sL(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,r6(e.V),st(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function sU(e,t){try{var i=e.l;if(0!=i.H&&(i.g==e||ot(i.i,e))){if(!e.K&&ot(i.i,e)&&3==i.H){try{var n=i.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(i.g.G+3e3<e.G)oB(i),oN(i);else break e}oj(i),sc(18)}}else i.Fa=r[1],0<i.Fa-i.V&&37500>r[2]&&i.G&&0==i.A&&!i.v&&(i.v=sd(re(i.ib,i),6e3));if(1>=oe(i.i)&&i.oa){try{i.oa()}catch(e){}i.oa=void 0}}else oz(i,11)}else if((e.K||i.g==e)&&oB(i),!rh(t))for(r=i.Ja.g.parse(t),t=0;t<r.length;t++){let a=r[t];if(i.V=a[0],a=a[1],2==i.H){if("c"==a[0]){i.K=a[1],i.pa=a[2];let t=a[3];null!=t&&(i.ra=t,i.l.info("VER="+i.ra));let r=a[4];null!=r&&(i.Ga=r,i.l.info("SVER="+i.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(oi(s,s.h),s.h=null))}if(n.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,sz(n.I,n.F,e))}}if(i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-e.G,i.l.info("Handshake RTT: "+i.S+"ms")),(n=i).wa=oK(n,n.J?n.pa:null,n.Y),e.K){on(n.i,e);var o=n.L;o&&e.setTimeout(o),e.C&&(sL(e),sN(e)),n.g=e}else ox(n);0<i.j.length&&oL(i)}else"stop"!=a[0]&&"close"!=a[0]||oz(i,7)}else 3==i.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?oz(i,7):oO(i):"noop"!=a[0]&&i.h&&i.h.Aa(a),i.A=0)}}sl(4)}catch(e){}}function sx(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(n5(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(n5(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}for(let n in t=[],i=0,e)t[i++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(n5(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e),r=n.length,s=0;s<r;s++)t.call(void 0,n[s],i&&i[s],e)}(n1=sI.prototype).setTimeout=function(e){this.P=e},n1.nb=function(e){e=e.target;let t=this.M;t&&3==oT(e)?t.l():this.Pa(e)},n1.Pa=function(e){try{if(e==this.g)e:{let c=oT(this.g);var t=this.g.Ia();let u=this.g.da();if(!(3>c)&&(3!=c||rm||this.g&&(this.h.h||this.g.ja()||oS(this.g)))){this.J||4!=c||7==t||(8==t||0>=u?sl(3):sl(2)),sL(this);var i=this.g.da();this.ca=i;t:if(sR(this)){var n=oS(this.g);e="";var r=n.length,s=4==oT(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){sM(this),sD(this);var o="";break t}this.h.i=new n6.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==i,function(e,t,i,n,r,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+s+" "+o})}(this.j,this.v,this.B,this.m,this.W,c,i),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rh(a)){var h=a;break t}}h=null}if(i=h)sn(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sU(this,i);else{this.i=!1,this.s=3,sc(12),sM(this),sD(this);break e}}this.S?(sO(this,c,o),rm&&this.i&&3==c&&(se(this.U,this.V,"tick",this.mb),this.V.start())):(sn(this.j,this.m,o,null),sU(this,o)),4==c&&sM(this),this.i&&!this.J&&(4==c?oH(this.l,this):(this.i=!1,sN(this)))}else(function(e){let t={};e=(e.g&&2<=oT(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(rh(e[n]))continue;var i=function(e){var t=1;e=e.split(":");let i=[];for(;0<t&&e.length;)i.push(e.shift()),t--;return e.length&&i.push(e.join(":")),i}(e[n]);let r=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();let s=t[r]||[];t[r]=s,s.push(i)}!function(e,t){for(let i in e)t.call(void 0,e[i],i,e)}(t,function(e){return e.join(", ")})})(this.g),400==i&&0<o.indexOf("Unknown SID")?(this.s=3,sc(12)):(this.s=0,sc(13)),sM(this),sD(this)}}}catch(e){}finally{}},n1.mb=function(){if(this.g){var e=oT(this.g),t=this.g.ja();this.o<t.length&&(sL(this),sO(this,e,t),this.i&&4!=e&&sN(this))}},n1.cancel=function(){this.J=!0,sM(this)},n1.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(sl(),sc(17)),sM(this),this.s=2,sD(this)):sP(this,this.Y-e)};var sj=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sF(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof sF){this.h=e.h,sB(this,e.j),this.s=e.s,this.g=e.g,sH(this,e.m),this.l=e.l;var t=e.i,i=new s0;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),s$(this,i),this.o=e.o}else e&&(t=String(e).match(sj))?(this.h=!1,sB(this,t[1]||"",!0),this.s=sK(t[2]||""),this.g=sK(t[3]||"",!0),sH(this,t[4]),this.l=sK(t[5]||"",!0),s$(this,t[6]||"",!0),this.o=sK(t[7]||"")):(this.h=!1,this.i=new s0(null,this.h))}function sV(e){return new sF(e)}function sB(e,t,i){e.j=i?sK(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function sH(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function s$(e,t,i){var n,r;t instanceof s0?(e.i=t,n=e.i,(r=e.h)&&!n.j&&(s1(n),n.i=null,n.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(s2(this,t),s4(this,i,e))},n)),n.j=r):(i||(t=sq(t,sQ)),e.i=new s0(t,e.h))}function sz(e,t,i){e.i.set(t,i)}function sW(e){return sz(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function sK(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function sq(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,sG),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function sG(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}sF.prototype.toString=function(){var e=[],t=this.j;t&&e.push(sq(t,sX,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(sq(t,sX,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(sq(i,"/"==i.charAt(0)?sY:sJ,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",sq(i,sZ)),e.join("")};var sX=/[#\/\?@]/g,sJ=/[#\?:]/g,sY=/[#\?]/g,sQ=/[#\?@]/g,sZ=/#/g;function s0(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function s1(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function s2(e,t){s1(e),t=s6(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function s9(e,t){return s1(e),t=s6(e,t),e.g.has(t)}function s4(e,t,i){s2(e,t),0<i.length&&(e.i=null,e.g.set(s6(e,t),rs(i)),e.h+=i.length)}function s6(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(n1=s0.prototype).add=function(e,t){s1(this),this.i=null,e=s6(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},n1.forEach=function(e,t){s1(this),this.g.forEach(function(i,n){i.forEach(function(i){e.call(t,i,n,this)},this)},this)},n1.ta=function(){s1(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let n=0;n<t.length;n++){let r=e[n];for(let e=0;e<r.length;e++)i.push(t[n])}return i},n1.Z=function(e){s1(this);let t=[];if("string"==typeof e)s9(this,e)&&(t=t.concat(this.g.get(s6(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},n1.set=function(e,t){return s1(this),this.i=null,s9(this,e=s6(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n1.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},n1.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var n=t[i];let s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var r=s;""!==o[n]&&(r+="="+encodeURIComponent(String(o[n]))),e.push(r)}}return this.i=e.join("&")};var s5=class{constructor(e,t){this.g=e,this.map=t}};function s7(e){this.l=e||s3,e=n6.PerformanceNavigationTiming?0<(e=n6.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(n6.g&&n6.g.Ka&&n6.g.Ka()&&n6.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var s3=10;function s8(e){return!!e.h||!!e.g&&e.g.size>=e.j}function oe(e){return e.h?1:e.g?e.g.size:0}function ot(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function oi(e,t){e.g?e.g.add(t):e.h=t}function on(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function or(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let i of e.g.values())t=t.concat(i.F);return t}return rs(e.i)}s7.prototype.cancel=function(){if(this.i=or(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var os=class{stringify(e){return n6.JSON.stringify(e,void 0)}parse(e){return n6.JSON.parse(e,void 0)}};function oo(){this.g=new os}function oa(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function ol(e){this.l=e.ec||null,this.j=e.ob||!1}function oh(e,t){rq.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=oc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ri(ol,sg),ol.prototype.g=function(){return new oh(this.l,this.j)},ol.prototype.i=(i={},function(){return i}),ri(oh,rq);var oc=0;function ou(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function od(e){e.readyState=4,e.l=null,e.j=null,e.A=null,of(e)}function of(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(n1=oh.prototype).open=function(e,t){if(this.readyState!=oc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,of(this)},n1.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||n6).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},n1.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,od(this)),this.readyState=oc},n1.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,of(this)),this.g&&(this.readyState=3,of(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==n6.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ou(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},n1.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?od(this):of(this),3==this.readyState&&ou(this)}},n1.Za=function(e){this.g&&(this.response=this.responseText=e,od(this))},n1.Ya=function(e){this.g&&(this.response=e,od(this))},n1.ka=function(){this.g&&od(this)},n1.setRequestHeader=function(e,t){this.v.append(e,t)},n1.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n1.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var i=t.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(oh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var op=n6.JSON.parse;function og(e){rq.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=om,this.L=this.M=!1}ri(og,rq);var om="",ov=/^https?$/i,oy=["POST","PUT"];function ow(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ob(e),oI(e)}function ob(e){e.F||(e.F=!0,rG(e,"complete"),rG(e,"error"))}function o_(e){if(e.h&&void 0!==n4&&(!e.C[1]||4!=oT(e)||2!=e.da())){if(e.v&&4==oT(e))r5(e.La,0,e);else if(rG(e,"readystatechange"),4==oT(e)){e.h=!1;try{let o=e.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,i,n=!0;break;default:n=!1}if(!(t=n)){if(i=0===o){var r=String(e.I).match(sj)[1]||null;!r&&n6.self&&n6.self.location&&(r=n6.self.location.protocol.slice(0,-1)),i=!ov.test(r?r.toLowerCase():"")}t=i}if(t)rG(e,"complete"),rG(e,"success");else{e.m=6;try{var s=2<oT(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",ob(e)}}finally{oI(e)}}}}function oI(e,t){if(e.g){oE(e);let i=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||rG(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function oE(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(n6.clearTimeout(e.A),e.A=null)}function oT(e){return e.g?e.g.readyState:0}function oS(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case om:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ok(e){let t="";return rN(e,function(e,i){t+=i+":"+e+"\r\n"}),t}function oC(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=ok(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):sz(e,t,i))}function oA(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function oR(e){this.Ga=0,this.j=[],this.l=new si,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oA("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oA("baseRetryDelayMs",5e3,e),this.hb=oA("retryDelaySeedMs",1e4,e),this.eb=oA("forwardChannelMaxRetries",2,e),this.xa=oA("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new s7(e&&e.concurrentRequestLimit),this.Ja=new oo,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function oO(e){if(oP(e),3==e.H){var t=e.W++,i=sV(e.I);if(sz(i,"SID",e.K),sz(i,"RID",t),sz(i,"TYPE","terminate"),oM(e,i),(t=new sI(e,e.l,t)).L=2,t.A=sW(sV(i)),i=!1,n6.navigator&&n6.navigator.sendBeacon)try{i=n6.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!i&&n6.Image&&((new Image).src=t.A,i=!0),i||(t.g=oq(t.l,null),t.g.ha(t.A)),t.G=Date.now(),sN(t)}oW(e)}function oN(e){e.g&&(oF(e),e.g.cancel(),e.g=null)}function oP(e){oN(e),e.u&&(n6.clearTimeout(e.u),e.u=null),oB(e),e.i.cancel(),e.m&&("number"==typeof e.m&&n6.clearTimeout(e.m),e.m=null)}function oL(e){if(!s8(e.i)&&!e.m){e.m=!0;var t=e.Na;rZ||r2(),r0||(rZ(),r0=!0),r1.add(t,e),e.C=0}}function oD(e,t){var i;i=t?t.m:e.W++;let n=sV(e.I);sz(n,"SID",e.K),sz(n,"RID",i),sz(n,"AID",e.V),oM(e,n),e.o&&e.s&&oC(n,e.o,e.s),i=new sI(e,e.l,i,e.C+1),null===e.o&&(i.I=e.s),t&&(e.j=t.F.concat(e.j)),t=oU(e,i,1e3),i.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),oi(e.i,i),sC(i,n,t)}function oM(e,t){e.na&&rN(e.na,function(e,i){sz(t,i,e)}),e.h&&sx({},function(e,i){sz(t,i,e)})}function oU(e,t,i){i=Math.min(e.j.length,i);var n=e.h?re(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+i];-1==t?0<i?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<i;o++){let i=r[o].g,a=r[o].map;if(0>(i-=t))t=Math.max(0,r[o].g-100),s=!1;else try{!function(e,t,i){let n=i||"";try{sx(e,function(e,i){let r=e;n7(e)&&(r=rJ(e)),t.push(n+i+"="+encodeURIComponent(r))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+i+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,i),t.F=e,n}function ox(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;rZ||r2(),r0||(rZ(),r0=!0),r1.add(t,e),e.A=0}}function oj(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=sd(re(e.Ma,e),o$(e,e.A)),e.A++,!0)}function oF(e){null!=e.B&&(n6.clearTimeout(e.B),e.B=null)}function oV(e){e.g=new sI(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=sV(e.wa);sz(t,"RID","rpc"),sz(t,"SID",e.K),sz(t,"AID",e.V),sz(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&sz(t,"TO",e.qa),sz(t,"TYPE","xmlhttp"),oM(e,t),e.o&&e.s&&oC(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var i=e.g;e=e.pa,i.L=1,i.A=sW(sV(t)),i.u=null,i.S=!0,sA(i,e)}function oB(e){null!=e.v&&(n6.clearTimeout(e.v),e.v=null)}function oH(e,t){var i=null;if(e.g==t){oB(e),oF(e),e.g=null;var n=2}else{if(!ot(e.i,t))return;i=t.F,on(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){i=t.u?t.u.length:0,t=Date.now()-t.G;var r,s=e.C;rG(n=so(),new su(n,i)),oL(e)}else ox(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==n&&(r=t,!(oe(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=sd(re(e.Na,e,r),o$(e,e.C)),e.C++,!0)))||2==n&&oj(e)))switch(i&&0<i.length&&((t=e.i).i=t.i.concat(i)),s){case 1:oz(e,5);break;case 4:oz(e,10);break;case 3:oz(e,6);break;default:oz(e,2)}}}function o$(e,t){let i=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(i*=2),i*t}function oz(e,t){if(e.l.info("Error code "+t),2==t){var i=null;e.h&&(i=null);var n=re(e.pb,e);i||(i=new sF("//www.google.com/images/cleardot.gif"),n6.location&&"http"==n6.location.protocol||sB(i,"https"),sW(i)),function(e,t){let i=new si;if(n6.Image){let n=new Image;n.onload=rt(oa,i,n,"TestLoadImage: loaded",!0,t),n.onerror=rt(oa,i,n,"TestLoadImage: error",!1,t),n.onabort=rt(oa,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=rt(oa,i,n,"TestLoadImage: timeout",!1,t),n6.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n)}else sc(2);e.H=0,e.h&&e.h.za(t),oW(e),oP(e)}function oW(e){if(e.H=0,e.ma=[],e.h){let t=or(e.i);(0!=t.length||0!=e.j.length)&&(ro(e.ma,t),ro(e.ma,e.j),e.i.i.length=0,rs(e.j),e.j.length=0),e.h.ya()}}function oK(e,t,i){var n=i instanceof sF?sV(i):new sF(i);if(""!=n.g)t&&(n.g=t+"."+n.g),sH(n,n.m);else{var r=n6.location;n=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new sF(null);n&&sB(s,n),t&&(s.g=t),r&&sH(s,r),i&&(s.l=i),n=s}return i=e.F,t=e.Da,i&&t&&sz(n,i,t),sz(n,"VER",e.ra),oM(e,n),n}function oq(e,t,i){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new og(e.Ha&&!e.va?new ol({ob:i}):e.va)).Oa(e.J),t}function oG(){}function oX(){if(rp&&!(10<=Number(rT)))throw Error("Environmental error: no available transport.")}function oJ(e,t){rq.call(this),this.g=new oR(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!rh(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rh(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new oZ(this)}function oY(e){sw.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function oQ(){sb.call(this),this.status=1}function oZ(e){this.g=e}function o0(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function o1(e,t,i){i||(i=0);var n=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)n[r]=t.charCodeAt(i++)|t.charCodeAt(i++)<<8|t.charCodeAt(i++)<<16|t.charCodeAt(i++)<<24;else for(r=0;16>r;++r)n[r]=t[i++]|t[i++]<<8|t[i++]<<16|t[i++]<<24;t=e.g[0],i=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^i&(r^s))+n[0]+3614090360&4294967295;o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[1]+3905402710&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[2]+606105819&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[3]+3250441966&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[4]+4118548399&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[5]+1200080426&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[6]+2821735955&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[7]+4249261313&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[8]+1770035416&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[9]+2336552879&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[10]+4294925233&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[11]+2304563134&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[12]+1804603682&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[13]+4254626195&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[14]+2792965006&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[15]+1236535329&4294967295,i=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(i^r))+n[1]+4129170786&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[0]+3921069994&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[5]+3593408605&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[4]+3889429448&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[9]+568446438&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[8]+1163531501&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[13]+2850285829&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[12]+2368359562&4294967295,o=t+((i=r+(o<<20&4294967295|o>>>12))^r^s)+n[5]+4294588738&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[8]+2272392833&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[11]+1839030562&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[14]+4259657740&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[1]+2763975236&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[4]+1272893353&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[7]+4139469664&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[10]+3200236656&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[13]+681279174&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[0]+3936430074&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[3]+3572445317&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[6]+76029189&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[9]+3654602809&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[12]+3873151461&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[15]+530742520&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[2]+3299628645&4294967295,i=r+(o<<23&4294967295|o>>>9),o=t+(r^(i|~s))+n[0]+4096336452&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[5]+4237533241&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[12]+1700485571&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[1]+2240044497&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[8]+1873313359&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[13]+1309151649&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[4]+4149444226&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function o2(e,t){this.h=t;for(var i=[],n=!0,r=e.length-1;0<=r;r--){var s=0|e[r];n&&s==t||(i[r]=s,n=!1)}this.g=i}(n1=og.prototype).Oa=function(e){this.M=e},n1.ha=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():s.g(),this.C=this.u?sm(this.u):sm(s),this.g.onreadystatechange=re(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){ow(this,e);return}if(e=i||"",i=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())i.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,o]of(n=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),r=n6.FormData&&e instanceof n6.FormData,!(0<=rr(oy,t))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var o;oE(this),0<this.B&&((this.L=(o=this.g,rp&&"number"==typeof o.timeout&&void 0!==o.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=re(this.ua,this)):this.A=r5(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ow(this,e)}},n1.ua=function(){void 0!==n4&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rG(this,"timeout"),this.abort(8))},n1.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,rG(this,"complete"),rG(this,"abort"),oI(this))},n1.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oI(this,!0)),og.$.N.call(this)},n1.La=function(){this.s||(this.G||this.v||this.l?o_(this):this.kb())},n1.kb=function(){o_(this)},n1.isActive=function(){return!!this.g},n1.da=function(){try{return 2<oT(this)?this.g.status:-1}catch(e){return -1}},n1.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n1.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),op(t)}},n1.Ia=function(){return this.m},n1.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(n1=oR.prototype).ra=8,n1.H=1,n1.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new sI(this,this.l,e),s=this.s;if(this.U&&(s?rD(s=rP(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,i=0;i<this.j.length;i++){t:{var n=this.j[i];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.j.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=oU(this,r,t),sz(i=sV(this.I),"RID",e),sz(i,"CVER",22),this.F&&sz(i,"X-HTTP-Session-Id",this.F),oM(this,i),s&&(this.O?t="headers="+encodeURIComponent(String(ok(s)))+"&"+t:this.o&&oC(i,this.o,s)),oi(this.i,r),this.bb&&sz(i,"TYPE","init"),this.P?(sz(i,"$req",t),sz(i,"SID","null"),r.aa=!0,sC(r,i,null)):sC(r,i,t),this.H=2}}else 3==this.H&&(e?oD(this,e):0==this.j.length||s8(this.i)||oD(this))}},n1.Ma=function(){if(this.u=null,oV(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=sd(re(this.jb,this),e)}},n1.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,sc(10),oN(this),oV(this))},n1.ib=function(){null!=this.v&&(this.v=null,oN(this),oj(this),sc(19))},n1.pb=function(e){e?(this.l.info("Successfully pinged google.com"),sc(2)):(this.l.info("Failed to ping google.com"),sc(1))},n1.isActive=function(){return!!this.h&&this.h.isActive(this)},(n1=oG.prototype).Ba=function(){},n1.Aa=function(){},n1.za=function(){},n1.ya=function(){},n1.isActive=function(){return!0},n1.Va=function(){},oX.prototype.g=function(e,t){return new oJ(e,t)},ri(oJ,rq),oJ.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,i=this.h||void 0;sc(0),e.Y=t,e.na=i||{},e.G=e.aa,e.I=oK(e,null,e.Y),oL(e)},oJ.prototype.close=function(){oO(this.g)},oJ.prototype.u=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=rJ(e),e=i);t.j.push(new s5(t.fb++,e)),3==t.H&&oL(t)},oJ.prototype.N=function(){this.g.h=null,delete this.j,oO(this.g),delete this.g,oJ.$.N.call(this)},ri(oY,sw),ri(oQ,sb),ri(oZ,oG),oZ.prototype.Ba=function(){rG(this.g,"a")},oZ.prototype.Aa=function(e){rG(this.g,new oY(e))},oZ.prototype.za=function(e){rG(this.g,new oQ)},oZ.prototype.ya=function(){rG(this.g,"b")},ri(o0,function(){this.blockSize=-1}),o0.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},o0.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var i=t-this.blockSize,n=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=i;)o1(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[r++]=e.charCodeAt(s++),r==this.blockSize){o1(this,n),r=0;break}}else for(;s<t;)if(n[r++]=e[s++],r==this.blockSize){o1(this,n),r=0;break}}this.h=r,this.i+=t},o0.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var i=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&i,i/=256;for(this.j(e),e=Array(16),t=i=0;4>t;++t)for(var n=0;32>n;n+=8)e[i++]=this.g[t]>>>n&255;return e};var o9={};function o4(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(o9,e)?o9[e]:o9[e]=new o2([0|e],0>e?-1:0):new o2([0|e],0>e?-1:0)}function o6(e){if(isNaN(e)||!isFinite(e))return o7;if(0>e)return ai(o6(-e));for(var t=[],i=1,n=0;e>=i;n++)t[n]=e/i|0,i*=o5;return new o2(t,0)}var o5=4294967296,o7=o4(0),o3=o4(1),o8=o4(16777216);function ae(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function at(e){return -1==e.h}function ai(e){for(var t=e.g.length,i=[],n=0;n<t;n++)i[n]=~e.g[n];return new o2(i,~e.h).add(o3)}function an(e,t){return e.add(ai(t))}function ar(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function as(e,t){this.g=e,this.h=t}function ao(e,t){if(ae(t))throw Error("division by zero");if(ae(e))return new as(o7,o7);if(at(e))return t=ao(ai(e),t),new as(ai(t.g),ai(t.h));if(at(t))return t=ao(e,ai(t)),new as(ai(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var i=o3,n=t;0>=n.X(e);)i=aa(i),n=aa(n);var r=al(i,1),s=al(n,1);for(n=al(n,2),i=al(i,2);!ae(n);){var o=s.add(n);0>=o.X(e)&&(r=r.add(i),s=o),n=al(n,1),i=al(i,1)}return t=an(e,r.R(t)),new as(r,t)}for(r=o7;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(i=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=o6(i)).R(t);at(o)||0<o.X(e);)i-=n,o=(s=o6(i)).R(t);ae(s)&&(s=o3),r=r.add(s),e=an(e,o)}return new as(r,e)}function aa(e){for(var t=e.g.length+1,i=[],n=0;n<t;n++)i[n]=e.D(n)<<1|e.D(n-1)>>>31;return new o2(i,e.h)}function al(e,t){var i=t>>5;t%=32;for(var n=e.g.length-i,r=[],s=0;s<n;s++)r[s]=0<t?e.D(s+i)>>>t|e.D(s+i+1)<<32-t:e.D(s+i);return new o2(r,e.h)}(n1=o2.prototype).ea=function(){if(at(this))return-ai(this).ea();for(var e=0,t=1,i=0;i<this.g.length;i++){var n=this.D(i);e+=(0<=n?n:o5+n)*t,t*=o5}return e},n1.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(ae(this))return"0";if(at(this))return"-"+ai(this).toString(e);for(var t=o6(Math.pow(e,6)),i=this,n="";;){var r=ao(i,t).g,s=((0<(i=an(i,r.R(t))).g.length?i.g[0]:i.h)>>>0).toString(e);if(ae(i=r))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},n1.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n1.X=function(e){return at(e=an(this,e))?-1:ae(e)?0:1},n1.abs=function(){return at(this)?ai(this):this},n1.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0,r=0;r<=t;r++){var s=n+(65535&this.D(r))+(65535&e.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);n=o>>>16,s&=65535,o&=65535,i[r]=o<<16|s}return new o2(i,-2147483648&i[i.length-1]?-1:0)},n1.R=function(e){if(ae(this)||ae(e))return o7;if(at(this))return at(e)?ai(this).R(ai(e)):ai(ai(this).R(e));if(at(e))return ai(this.R(ai(e)));if(0>this.X(o8)&&0>e.X(o8))return o6(this.ea()*e.ea());for(var t=this.g.length+e.g.length,i=[],n=0;n<2*t;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<e.g.length;r++){var s=this.D(n)>>>16,o=65535&this.D(n),a=e.D(r)>>>16,l=65535&e.D(r);i[2*n+2*r]+=o*l,ar(i,2*n+2*r),i[2*n+2*r+1]+=s*l,ar(i,2*n+2*r+1),i[2*n+2*r+1]+=o*a,ar(i,2*n+2*r+1),i[2*n+2*r+2]+=s*a,ar(i,2*n+2*r+2)}for(n=0;n<t;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=t;n<2*t;n++)i[n]=0;return new o2(i,0)},n1.gb=function(e){return ao(this,e).h},n1.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)&e.D(n);return new o2(i,this.h&e.h)},n1.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)|e.D(n);return new o2(i,this.h|e.h)},n1.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)^e.D(n);return new o2(i,this.h^e.h)},oX.prototype.createWebChannel=oX.prototype.g,oJ.prototype.send=oJ.prototype.u,oJ.prototype.open=oJ.prototype.m,oJ.prototype.close=oJ.prototype.close,sf.NO_ERROR=0,sf.TIMEOUT=8,sf.HTTP_ERROR=6,sp.COMPLETE="complete",sv.EventType=sy,sy.OPEN="a",sy.CLOSE="b",sy.ERROR="c",sy.MESSAGE="d",rq.prototype.listen=rq.prototype.O,og.prototype.listenOnce=og.prototype.P,og.prototype.getLastError=og.prototype.Sa,og.prototype.getLastErrorCode=og.prototype.Ia,og.prototype.getStatus=og.prototype.da,og.prototype.getResponseJson=og.prototype.Wa,og.prototype.getResponseText=og.prototype.ja,og.prototype.send=og.prototype.ha,og.prototype.setWithCredentials=og.prototype.Oa,o0.prototype.digest=o0.prototype.l,o0.prototype.reset=o0.prototype.reset,o0.prototype.update=o0.prototype.j,o2.prototype.add=o2.prototype.add,o2.prototype.multiply=o2.prototype.R,o2.prototype.modulo=o2.prototype.gb,o2.prototype.compare=o2.prototype.X,o2.prototype.toNumber=o2.prototype.ea,o2.prototype.toString=o2.prototype.toString,o2.prototype.getBits=o2.prototype.D,o2.fromNumber=o6,o2.fromString=function e(t,i){if(0==t.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==t.charAt(0))return ai(e(t.substring(1),i));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=o6(Math.pow(i,8)),r=o7,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),i);8>o?(o=o6(Math.pow(i,o)),r=r.R(o).add(o6(a))):r=(r=r.R(n)).add(o6(a))}return r},n9.createWebChannelTransport=function(){return new oX},n9.getStatEventTarget=function(){return so()},n9.ErrorCode=sf,n9.EventType=sp,n9.Event=sr,n9.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},n9.FetchXmlHttpFactory=ol,n9.WebChannel=sv,n9.XhrIo=og,n9.Md5=o0;var ah=n9.Integer=o2;const ac="@firebase/firestore";/**
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
 */class au{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}au.UNAUTHENTICATED=new au(null),au.GOOGLE_CREDENTIALS=new au("google-credentials-uid"),au.FIRST_PARTY=new au("first-party-uid"),au.MOCK_USER=new au("mock-user");/**
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
 */let ad="10.7.0";/**
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
 */const af=new eP("@firebase/firestore");function ap(e,...t){if(af.logLevel<=n0.DEBUG){let i=t.map(am);af.debug(`Firestore (${ad}): ${e}`,...i)}}function ag(e,...t){if(af.logLevel<=n0.ERROR){let i=t.map(am);af.error(`Firestore (${ad}): ${e}`,...i)}}function am(e){if("string"==typeof e)return e;try{/**
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
 */function av(e="Unexpected state"){let t=`FIRESTORE (${ad}) INTERNAL ASSERTION FAILED: `+e;throw ag(t),Error(t)}/**
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
 */const ay={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition",UNAVAILABLE:"unavailable"};class aw extends ed{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ab{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class a_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(au.UNAUTHENTICATED))}shutdown(){}}class aE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class aT{constructor(e){this.t=e,this.currentUser=au.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i,n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve(),r=new ab;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ab,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{ap("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(ap("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ab)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(ap("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||av(),new a_(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||av(),new au(e)}}class aS{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=au.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ak{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new aS(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(au.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let i=e=>{null!=e.error&&ap("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.R;return this.R=e.token,ap("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};let n=e=>{ap("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):ap("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||av(),this.R=e.token,new aC(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class aR{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let n=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function aO(e,t){return e<t?-1:e>t?1:0}/**
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
 */class aN{constructor(e,t,i){void 0===t?t=0:t>e.length&&av(),void 0===i?i=e.length-t:i>e.length-t&&av(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===aN.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof aN?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let n=0;n<i;n++){let i=e.get(n),r=t.get(n);if(i<r)return -1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class aP extends aN{construct(e,t,i){return new aP(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new aw(ay.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(e=>e.length>0))}return new aP(t)}static emptyPath(){return new aP([])}}/**
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
 */class aL{constructor(e){this.path=e}static fromPath(e){return new aL(aP.fromString(e))}static fromName(e){return new aL(aP.fromString(e).popFirst(5))}static empty(){return new aL(aP.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===aP.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return aP.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new aL(new aP(e.slice()))}}function aD(e){return"IndexedDbTransactionError"===e.name}/**
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
 */class aM{constructor(e,t){this.comparator=e,this.root=t||ax.EMPTY}insert(e,t){return new aM(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ax.BLACK,null,null))}remove(e){return new aM(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ax.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){let n=this.comparator(e,i.key);if(0===n)return t+i.left.size;n<0?i=i.left:(t+=i.left.size+1,i=i.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aU(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aU(this.root,e,this.comparator,!1)}getReverseIterator(){return new aU(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aU(this.root,e,this.comparator,!0)}}class aU{constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ax{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:ax.RED,this.left=null!=n?n:ax.EMPTY,this.right=null!=r?r:ax.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,n,r){return new ax(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return ax.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let i,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return ax.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ax.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ax.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw av();let e=this.left.check();if(e!==this.right.check())throw av();return e+(this.isRed()?0:1)}}ax.EMPTY=null,ax.RED=!0,ax.BLACK=!1,ax.EMPTY=new class{constructor(){this.size=0}get key(){throw av()}get value(){throw av()}get color(){throw av()}get left(){throw av()}get right(){throw av()}copy(e,t,i,n,r){return this}insert(e,t,i){return new ax(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class aj{constructor(e){this.comparator=e,this.data=new aM(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new aF(this.data.getIterator())}getIteratorFrom(e){return new aF(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof aj)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new aj(this.comparator);return t.data=e,t}}class aF{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class aV extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class aB{constructor(e){this.binaryString=e}static fromBase64String(e){return new aB(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new aV("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new aB(function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return aO(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function aH(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}aB.EMPTY_BYTE_STRING=new aB(""),new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
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
 */class a${constructor(e,t,i,n,r,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class az{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new az("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof az&&e.projectId===this.projectId&&e.database===this.database}}new aM(aL.comparator),new aM(aL.comparator),new aM(aL.comparator),new aj(aL.comparator),new aj(aO),(a=o||(o={}))[a.OK=0]="OK",a[a.CANCELLED=1]="CANCELLED",a[a.UNKNOWN=2]="UNKNOWN",a[a.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",a[a.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",a[a.NOT_FOUND=5]="NOT_FOUND",a[a.ALREADY_EXISTS=6]="ALREADY_EXISTS",a[a.PERMISSION_DENIED=7]="PERMISSION_DENIED",a[a.UNAUTHENTICATED=16]="UNAUTHENTICATED",a[a.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",a[a.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",a[a.ABORTED=10]="ABORTED",a[a.OUT_OF_RANGE=11]="OUT_OF_RANGE",a[a.UNIMPLEMENTED=12]="UNIMPLEMENTED",a[a.INTERNAL=13]="INTERNAL",a[a.UNAVAILABLE=14]="UNAVAILABLE",a[a.DATA_LOSS=15]="DATA_LOSS",new ah([4294967295,4294967295],0);/**
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
 */class aW{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){var i;if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(aH(e.integerValue));else if("doubleValue"in e){let i=aH(e.doubleValue);isNaN(i)?this.Tt(t,13):(this.Tt(t,15),0===i&&1/i==-1/0?t.Et(0):t.Et(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Tt(t,20),"string"==typeof i?t.dt(i):(t.dt(`${i.seconds||""}`),t.Et(i.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt("string"==typeof(i=e.bytesValue)?aB.fromBase64String(i):aB.fromUint8Array(i)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.Tt(t,45),t.Et(i.latitude||0),t.Et(i.longitude||0)}else"mapValue"in e?"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):av()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let i=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(i)))this.At(e,t),this.Pt(i[e],t)}yt(e,t){let i=e.values||[];for(let e of(this.Tt(t,50),i))this.Pt(e,t)}ft(e,t){this.Tt(t,37),aL.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}aW.St=new aW,new Uint8Array(0);class aK{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new aK(e,aK.DEFAULT_COLLECTION_PERCENTILE,aK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}function aq(){return"undefined"!=typeof document?document:null}/**
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
 */aK.DEFAULT_COLLECTION_PERCENTILE=10,aK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,aK.DEFAULT=new aK(41943040,aK.DEFAULT_COLLECTION_PERCENTILE,aK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),aK.DISABLED=new aK(-1,0,0);/**
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
 */class aG{constructor(e,t,i=1e3,n=1.5,r=6e4){this.si=e,this.timerId=t,this.Fo=i,this.Mo=n,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();let t=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),n=Math.max(0,t-i);n>0&&ap("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class aX{constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new ab,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,n,r){let s=new aX(e,t,Date.now()+i,n,r);return s.start(i),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new aw(ay.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class aJ{constructor(e,t,i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=au.UNAUTHENTICATED,this.clientId=aR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async e=>{ap("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(ap("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new aw(ay.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new ab;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let t=function(e,t){if(ag("AsyncQueue",`${t}: ${e}`),aD(e))return new aw(ay.UNAVAILABLE,`${t}: ${e}`);throw e}(i,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}/**
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
 */function aY(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const aQ=new Map;/**
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
 */class aZ{constructor(e){var t,i;if(void 0===e.host){if(void 0!==e.ssl)throw new aw(ay.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new aw(ay.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,i,n){if(!0===t&&!0===n)throw new aw(ay.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aY(null!==(i=e.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new aw(ay.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new aw(ay.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new aw(ay.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,i;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class a0{constructor(e,t,i,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aZ({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new aw(ay.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new aw(ay.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aZ(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new aI;switch(e.type){case"firstParty":return new ak(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new aw(ay.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=aQ.get(e);t&&(ap("ComponentProvider","Removing Datastore"),aQ.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class a1{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new aG(this,"async_queue_retry"),this.iu=()=>{let e=aq();e&&ap("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};let e=aq();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;let t=aq();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});let t=new ab;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!aD(e))throw e;ap("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){let t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{let t;throw this.eu=e,this.tu=!1,ag("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,i){this.su(),this.ru.indexOf(e)>-1&&(t=0);let n=aX.createAndSchedule(this,e,t,i,e=>this.au(e));return this.Xa.push(n),n}su(){this.eu&&av()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(let t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{for(let t of(this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Xa))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){let t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class a2 extends a0{constructor(e,t,i,n){super(e,t,i,n),this.type="firestore",this._queue=new a1,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||function(e){var t,i,n,r;let s=e._freezeSettings(),o=(r=e._databaseId,new a$(r,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,aY(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new aJ(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(i=s.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(this),this._firestoreClient.terminate()}}RegExp("[~\\*/\\[\\]]"),new WeakMap,function(e=!0){ad=e4,e0(new eE("firestore",(t,{instanceIdentifier:i,options:n})=>{let r=t.getProvider("app").getImmediate(),s=new a2(new aT(t.getProvider("auth-internal")),new aA(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new aw(ay.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new az(e.options.projectId,t)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),e7(ac,"4.4.0",void 0),e7(ac,"4.4.0","esm2017")}();const a9=function(e,t){let i=e1("object"==typeof e?e:e5(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!i._initialized){let e=ea("firestore");e&&function(e,t,i,n={}){var r;let s=(e=function(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new aw(ay.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let i=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let i=(t=e).constructor?t.constructor.name:null;return i?`a custom ${i} object`:"an object"}}return"function"==typeof e?"a function":av()}(e);throw new aw(ay.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return e}(e,a0))._getSettings(),o=`${t}:${i}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&function(e){if(af.logLevel<=n0.WARN){let t=[].map(am);af.warn(`Firestore (${ad}): ${e}`,...t)}}("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,i;if("string"==typeof n.mockUserToken)t=n.mockUserToken,i=au.MOCK_USER;else{t=/**
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
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ee(JSON.stringify({alg:"none",type:"JWT"})),ee(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new aw(ay.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new au(s)}e._authCredentials=new aE(new a_(t,i))}}(i,...e)}return i}(e6({apiKey:"AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU",authDomain:"book-project-8a976.firebaseapp.com",projectId:"book-project-8a976",storageBucket:"book-project-8a976.appspot.com",messagingSenderId:"595782127929",appId:"1:595782127929:web:e819e67d1654c476ec98e8"}));nq(),console.log(a9),nq(),signUpWithEmail("Kamil","kamil@test.com","test123");
//# sourceMappingURL=index.7f3770f4.js.map
