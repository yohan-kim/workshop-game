$(document).ready(() => {
  // $("#myBtn").click(function(){
  //     $("#myModal").modal();
  // });


});
const check = (quiz) => {
  console.log(quiz);
  if (quiz === 'quiz_1') {
    var form_valid = (document.getElementById('quiz_1').value == 'abcd' || document.getElementById('quiz_1').value == 'ehdrhehdfkr');
  } else {
    var form_valid = (document.getElementById('quiz_2').value == 'abcde' || document.getElementById('quiz_2').value == 'ehdrhehdfkr');
  }
  if (!form_valid) {
    $(`#${quiz}`).addClass('is-invalid');
    return true;
  } else {
    window.location.href = `./${quiz}.html`;
    return false;
  }
}