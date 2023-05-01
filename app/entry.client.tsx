import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition((): void => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});

if ("serviceWorker" in navigator) {
  console.log("yay");
  window.addEventListener("load", async function swLoader() {
    console.log("woo");
    const registration = await navigator.serviceWorker.register("/sw.js");
    // console.log(registration.pushManager.)
  });
}
