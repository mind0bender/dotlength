const offlineAsstes = ["/offline", "/assets/images/offline.svg"];

self.addEventListener("install", (e) => {
  console.log("service worker installed");
  if (!caches.has("offline")) {
    e.waitUntil(
      caches
        .open("offline")
        .then((cache) => {
          cache.addAll(offlineAsstes);
        })
        .catch(console.error)
    );
  }
});

self.addEventListener("activate", (e) => {
  console.log("service worker active");
});

self.addEventListener("fetch", (e) => {
  if (location.hostname == "localhost") {
    return;
  }
  e.respondWith(
    caches
      .match(e.request)
      .then((cachedRes) => {
        return (
          cachedRes ||
          fetch(e.request).catch(() => {
            return Response.redirect("/offline", 302);
          })
        );
      })
      .catch(console.error)
  );
});
