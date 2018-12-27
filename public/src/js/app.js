const check = (psw) => {
  var form_valid = (document.getElementById('psw').value == 'abcd');
  if (!form_valid) {
    $('#psw').addClass('is-invalid');
    return true;
  } else {
    
    window.location.href='./quiz.html';
    return false;
  }
}