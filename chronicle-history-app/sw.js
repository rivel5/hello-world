const CACHE='chronicle-v2';
const FILES=['./','./index.html','./styles.css','./app.js','./lessons-bahamian.js','./lessons-caribbean.js','./lessons-world.js','./lessons-american.js','./manifest.webmanifest','./icons/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
