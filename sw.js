self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("calculator-cache").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./style.css",
                "./script.js",
                "./mathEngine.js"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
