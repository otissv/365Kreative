if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),f={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/NQZtWW2zKAkNjRSHt1-ow/_buildManifest.js",revision:"36e59fe401666eba8802ffe069f06356"},{url:"/_next/static/NQZtWW2zKAkNjRSHt1-ow/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/252.cd01cc6693aaaa5f.js",revision:"cd01cc6693aaaa5f"},{url:"/_next/static/chunks/29.54df797eb750332d.js",revision:"54df797eb750332d"},{url:"/_next/static/chunks/295.4a810c3ce4ad5702.js",revision:"4a810c3ce4ad5702"},{url:"/_next/static/chunks/380.8f9f36747cd16d7c.js",revision:"8f9f36747cd16d7c"},{url:"/_next/static/chunks/420.bfbc678f531b21c0.js",revision:"bfbc678f531b21c0"},{url:"/_next/static/chunks/512.15a93dce8beb70ae.js",revision:"15a93dce8beb70ae"},{url:"/_next/static/chunks/673.c448e40874c68ccf.js",revision:"c448e40874c68ccf"},{url:"/_next/static/chunks/681.a0fb9f53dca66560.js",revision:"a0fb9f53dca66560"},{url:"/_next/static/chunks/777.efaa68063d7ad62b.js",revision:"efaa68063d7ad62b"},{url:"/_next/static/chunks/829.cff7b84569953418.js",revision:"cff7b84569953418"},{url:"/_next/static/chunks/843.0ea1ed93fea119a7.js",revision:"0ea1ed93fea119a7"},{url:"/_next/static/chunks/853.9d525f4d54d9002a.js",revision:"9d525f4d54d9002a"},{url:"/_next/static/chunks/925.3586b3b066316732.js",revision:"3586b3b066316732"},{url:"/_next/static/chunks/app/(features)/contact/thank-you/page-a2ffe5cec93ea945.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/app/(features)/subscribe/thank-you/page-51f917a98b15b0ef.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/app/(features)/subscribe/unsubscribe/page-196746e6d222657d.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/app/(features)/subscribe/verify/page-d1d7e7ae0704c51f.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/app/_not-found-295aefde1d08e0cb.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/app/layout-eff0ee463aed45fd.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/app/page-0b3ed10be3f7a908.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/app/playground/page-4e7f39eaac5cafeb.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/main-77bdb00a66830afc.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/main-app-4b05d46bbc4db16a.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/pages/_app-d36ec77008dc846c.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/pages/_error-2e03502a9964ad72.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f584a2095018a738.js",revision:"NQZtWW2zKAkNjRSHt1-ow"},{url:"/_next/static/css/99a2840e301808c9.css",revision:"99a2840e301808c9"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/fallback-ce627215c0e4a9af.js",revision:"d084615ea1d3cecbe1a5ab3609bf610c"},{url:"/icons/icon-192x192.png",revision:"09c992cdfac48f10ef3e35cdce643b79"},{url:"/icons/icon-384x384.png",revision:"b4dbfe34ea9e7400fe05c821dda651b0"},{url:"/icons/icon-512x512.png",revision:"09ae86791b7be46452d5d78208c2d9eb"},{url:"/images/365K.svg",revision:"bc9087eff47dec4c36929a99841a048d"},{url:"/images/Home-Kanti-Ria.webp",revision:"cdd3098abba53f2261569d17b406dd7a"},{url:"/images/Yogini-studio-mobile.webp",revision:"6724cb814b20cc66d3775ff35c93f3aa"},{url:"/images/ania-avatar.webp",revision:"31b345ef7e73d61fc2d2a858952421ff"},{url:"/images/fallback.png",revision:"636b3250ed0c322464994bacf906dfdc"},{url:"/images/kanti-avatar.webp",revision:"b7d2c47146e37760ae117006ca87d565"},{url:"/images/kanti-project.webp",revision:"94aa1c34813dbfea1e23c047f85ef906"},{url:"/images/success.webp",revision:"4caddb422744ea57426b0cd9fb242286"},{url:"/images/ux.webp",revision:"7d126f15968fb874fabc20409e278548"},{url:"/images/web-design-collaboration.webp",revision:"a32500e666b3524bc8e189948ffb2641"},{url:"/images/workstation.webp",revision:"9cdcca62bc677778c1ac927763f17974"},{url:"/images/yogini-project.webp",revision:"37c03d8e90f2ead73184ab0a68938807"},{url:"/manifest.json",revision:"e2246c85db0eb21c2e2bfee706cf3dad"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));