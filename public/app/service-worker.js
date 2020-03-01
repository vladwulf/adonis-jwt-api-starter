"use strict";var precacheConfig=[["/app/service-worker.js","5af5135ec58554f86ac5b68979553e40"],["/app/static/css/app.083bbfaf9a56d8a3e378a12683a9dcb6.css","083bbfaf9a56d8a3e378a12683a9dcb6"],["/app/static/js/0.6c5d98e9b7fd8c81a8bd.js","1c0dc82afc51d61615973a97a6a89704"],["/app/static/js/1.24c0f5ef36d372111b3e.js","282bc6ced7bfae42536a25a0b96e0e0d"],["/app/static/js/10.04368686bce0aecb5dec.js","0a4090e226a6a76d2ba73e61bd886aab"],["/app/static/js/11.5acedc95e0f9572b7cff.js","5b4a3e1022e1d8179cb01919db0885d6"],["/app/static/js/12.098c759e7f3b14b14f9f.js","063826ee59e5f76cb13ef5ec2c9588ce"],["/app/static/js/2.b6bef85a541c9beb55b6.js","78950c00b28c71790e5b458c950b09ca"],["/app/static/js/3.3f36633c1383f2c54c2e.js","1a8042ae1321e5a3717b2d8e8d210d64"],["/app/static/js/4.2ca3dcf92722e0788738.js","a46118c88d3a7b48dda294a78989e382"],["/app/static/js/5.a1948f7739604065a444.js","a6b3e86d0d06925b502fe19b3880de5c"],["/app/static/js/6.c5a1be00352146ff1620.js","dccb74683b11a931521afa6d5afd84ad"],["/app/static/js/7.62102f2caa3e4b602035.js","f07986c238edcc1225233dfcee126bb3"],["/app/static/js/8.f6974f78ff8a02e4d4f2.js","8f03771b9350b2beb168c1c547171349"],["/app/static/js/9.bc2974e0ff7e9e42cdeb.js","c8edf2dd8f3f22f8020ded416cd184b9"],["/app/static/js/app.26546a6a18a08fb51839.js","cb4ad74a72adc47b40ee31f5e3af18ae"],["/app/static/js/manifest.9f2135bb2a399d25e17d.js","9f6f49663b0636da2034848ac97044de"],["/app/static/js/vendor.8f397b531c7d48f8cf1c.js","8bf35458045fbdebd32cb90ce7e8d704"]],cacheName="sw-precache-v3-adonify-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/app/",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});