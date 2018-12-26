const check = (psw) => {
  var form_valid = (document.getElementById('psw').value == 'abcd');
  if (!form_valid) {
    alert('틀렸습니다. ㅠㅠ');
    return true;
  } else {
    
    window.location.href='./quiz.html';
    return false;
  }
}