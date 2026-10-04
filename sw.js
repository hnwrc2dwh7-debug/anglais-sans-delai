const CACHE="anglais-sans-blocage-v40";
const FILES=["./","./style.css","./app.js","./advanced.js"];
self.addEventListener("install",event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await Promise.all(FILES.map(async file=>{const response=await fetch(`${file}?precache=${CACHE}`,{cache:"reload"});if(!response.ok)throw new Error(`Impossible de mettre en cache ${file} (${response.status}).`);await cache.put(file,response)}));await self.skipWaiting()})()));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("anglais-sans-blocage-")&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  if(event.request.mode==="navigate"){
    const path=new URL(event.request.url).pathname,homePath=new URL("./",self.location.href).pathname,indexPath=new URL("./index.html",self.location.href).pathname,isAppPage=path===homePath||path===indexPath;
    event.respondWith(fetch(event.request).then(response=>{if(response.ok&&isAppPage){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put("./",copy))}return response}).catch(()=>caches.match("./")));
    return;
  }
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response})));
});
