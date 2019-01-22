window.addEventListener('load', function () {
    window.history.pushState({
        noBackExitsApp: true
    }, '')
})

window.addEventListener('popstate', function (event) {
    if (event.state && event.state.noBackExitsApp) {
        window.history.pushState({
            noBackExitsApp: true
        }, '')
    }
})


var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
