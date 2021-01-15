self.addEventListener('install', (event) => {
  const cacheName = 'static-shell-2021-01-14 21.13.06'
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
