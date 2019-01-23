var CACHE_STATIC_NAME = 'static-v1';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';

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
        '/src/images/1.png',
        '/src/images/2.png',
        '/src/images/3.png',
        '/src/images/4.png',
        '/src/images/5.png',
        '/src/images/6.png',
        '/src/images/7.png',
        '/src/images/8.png',
        '/src/images/info_1.png',
        '/src/images/info_2.png',
        '/src/images/quiz/bg.jpg',
        '/src/images/quiz/game-1.png',
        '/src/images/quiz/game.png',
        '/src/css/app.css',
        '/src/css/quiz_1.css',
        '/src/css/quiz.css',
        '/src/css/bootstrap.min.css',
        '/src/images/background.jpg',
        '/src/images/icons/icon.png',
        '/src/images/icons/icon-192.png',
        '/src/images/quiz/ear.jpg',
        '/src/images/quiz/earing.png',
        '/src/images/quiz/game-1.png',
        '/src/images/quiz/game.png',
        '/src/images/quiz/hair.png',
        '/src/images/quiz/hand.png',
        '/src/images/quiz/selfi.png',
        '/src/images/button.png',
        '/src/images/title.png',
        '/src/js/app.js',
        '/src/js/core.js',
        '/src/js/quiz.js',
        '/src/js/quiz-1.js',
        '/src/js/bootstrap.min.js',
        '/src/js/jquery-3.3.1.min.js',
        'https://fonts.googleapis.com/css?family=Roboto:400,700',
      ])
    })
  )
});


self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request);
        }
      })
  );
});