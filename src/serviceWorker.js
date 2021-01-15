self.addEventListener('install', (event) => {
  const cacheName = 'static-shell-v1'
  const resourcesToPrecache = [
    '/',
    'index.html',
    'assets/apple-touch-icon.png',
    'assets/favicon.png',
    'assets/splash.png',
  ]

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(resourcesToPrecache)
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request) || fetch(event.request))
})
