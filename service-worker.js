const casheName = "pwa-inside-out-v1";
const fileCashed = [
  "/",
  "/index.html",
  "/about.html",
  //   "/blog.html",
  "/style.css",
  "/main.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(casheName).then((cache) => {
      return cache.addAll(fileCashed);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== casheName) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request).catch(() => {
          console.warn(
            `[SW] Resource not cached and you're offline: ${event.request.url}`
          );
          return new Response(" You're offline and this file is not cached.", {
            status: 503,
            statusText: "Offline",
          });
        });
      }
    })
  );
});


