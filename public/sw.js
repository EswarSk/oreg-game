const CACHE_NAME = "oregon-or-bust-v3";
const APP_SHELL = ["/", "/manifest.json", "/icon.svg"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, "/"));
    return;
  }

  if (url.pathname.startsWith("/_next/static/") || url.pathname === "/manifest.json" || url.pathname === "/icon.svg") {
    event.respondWith(cacheFirst(request));
  }
});

async function networkFirst(request, fallbackUrl) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request)) || (await cache.match(fallbackUrl)) || offlineResponse();
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  cache.put(request, response.clone());
  return response;
}

function offlineResponse() {
  return new Response(
    "<!doctype html><title>Oregon or Bust</title><meta name='viewport' content='width=device-width,initial-scale=1'><body style='margin:0;font-family:system-ui;background:#ECF4EE;color:#0C211B'><main style='min-height:100vh;display:grid;place-content:center;padding:24px;text-align:center'><h1>Oregon or Bust</h1><p>The trip app is saved, but this screen needs signal once to reopen. Try again when the connection comes back.</p></main></body>",
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
