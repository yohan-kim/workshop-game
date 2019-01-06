self.addEventListener('install', event => {
  console.log('[ServiceWorker] Service Worker 등록,....', event);
  event.waitUntil(
    caches.open('static')
    .then(cache => {
      console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
        '/index.html',
        '/quiz.html',
        '/src/css/app.css',
        '/src/css/bootstrap.min.css',
        '/src/images/background.jpg',
        '/src/images/icons/icon.png',
        '/src/images/icons/icon-192.png',
        '/src/js/app.js',
        '/src/js/bootstrap.min.js',
        '/src/js/jquery-3.3.1.min.js'
      ])
    })
  )
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] ServiceWorker 활성화,....', event)
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] ServiceWorker fetching..,....', event)
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response;
      } else {
        return fetch(event.response);
      }
    })
  )
});