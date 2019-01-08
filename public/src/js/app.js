if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log(':^)', reg);
    // TODO
  }).catch(function(err) {
    console.log(':^(', err);
  });
 }

const check = (psw) => {
  var form_valid = (document.getElementById('psw').value == 'abcd' ||document.getElementById('psw').value =='ehdrhehdfkr' );
  if (!form_valid) {
    $('#psw').addClass('is-invalid');
    return true;
  } else {
    
    window.location.href='./quiz.html';
    return false;
  }
}

