self.addEventListener("install", (e) => {
  console.log("service worker installed");
  e.waitUntil(
    caches
      .open("offline")
      .then((cache) => {
        cache.addAll(["/", "/offline"]);
      })
      .catch(console.error)
  );
});

self.addEventListener("activate", (e) => {
  console.log("service worker active");
});

self.addEventListener("fetch", (e) => {
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
