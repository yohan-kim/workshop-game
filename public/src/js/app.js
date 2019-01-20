if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function (reg) {
    console.log(':^)', reg);
    // TODO
  }).catch(function (err) {
    console.log(':^(', err);
  });
}

const check = (psw) => {
  var form_valid = (document.getElementById('psw').value == 'abcd' || document.getElementById('psw').value == 'ehdrhehdfkr');
  if (!form_valid) {
    $('#psw').addClass('is-invalid');
    return true;
  } else {

    window.location.href = './quiz.html';
    return false;
  }
}

// 구글맵 내 API key
// const apiKey = 'AIzaSyCAB45ZI_1rBze5_66ijV7-Ur88iptCR08';
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}