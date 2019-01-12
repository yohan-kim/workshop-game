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
        '/quiz_1.html',
        '/src/images/start.png',
        '/src/images/background.png',
        '/src/images/button.png',
        '/src/images/quiz/bg.jpg',
        '/src/images/quiz/game-1.png',
        '/src/images/quiz/game.png',
        '/src/css/app.css',
        '/src/css/quiz_1.css',
        '/src/css/bootstrap.min.css',
        '/src/images/background.jpg',
        '/src/images/icons/icon.png',
        '/src/images/icons/icon-192.png',
        '/src/js/app.js',
        '/src/js/quiz.js',
        '/src/js/quiz_1.js',
        '/src/js/bootstrap.min.js',
        '/src/js/jquery-3.3.1.min.js',
        'https://fonts.googleapis.com/css?family=Roboto:400,700',
        "https://fonts.googleapis.com/icon?family=Material+Icons"
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