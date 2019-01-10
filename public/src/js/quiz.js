$(document).ready(()=>{
    // $("#myBtn").click(function(){
    //     $("#myModal").modal();
    // });

  
});
const check = () => {
    var form_valid = (document.getElementById('quiz_1').value == 'abcd' ||document.getElementById('quiz_1').value =='ehdrhehdfkr' );
    if (!form_valid) {
      $('quiz_1').addClass('is-invalid');
      return true;
    } else {
      window.location.href='./quiz_1.html';
      
      return false;
    }
  }