self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("offline")
      .then((cache) => {
        cache.addAll(["/", "/offline"]);
      })
      .catch(console.error)
  );
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
