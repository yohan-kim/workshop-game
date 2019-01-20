var CACHE_STATIC_NAME = 'static-v13';
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
        '/src/images/quiz/bg.jpg',
        '/src/images/quiz/game-1.png',
        '/src/images/quiz/game.png',
        '/src/css/app.css',
        '/src/css/quiz_1.css',
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
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        'https://s3.ap-northeast-2.amazonaws.com/test.innoboost/khao.pdf'
      ])
    })
  )
});


self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
    .then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
          console.log('[Service Worker] Removing old cache.', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  var url = 'https://httpbin.org/get';

  if (event.requset.url.indexOf(url) > -1) {
    event.respondWith(
      caches.open(CACHE_DYNAMIC_NAME)
      .then(function (cache) {
        return fetch(event.request)
          .then(function (res) {
            cache.put(event.request, res.clone());
            return res;
          });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function (res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function (cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function (err) {
              return caches.open(CACHE_STATIC_NAME)
                .then(function (cache) {
                  return cache.match('/offline.html');
                });
            });
        }
      })
    );
  }
});