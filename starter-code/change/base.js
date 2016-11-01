console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  var numOne;
  var numTwo;

  $('.add').on('focusout', function() {
    if ($(this).prop('valueAsNumber')) {
      if ($(this).prop('id') === 'left') {
        numOne = $(this).prop('valueAsNumber');
      } else if ($(this).prop('id') === 'right') {
        numTwo = $(this).prop('valueAsNumber');
      }
    }
    if ((numOne !== undefined) && (numOne !== 0) && (numTwo !== undefined) && (numTwo !== 0)) {
      $('#total').prop('valueAsNumber', numOne + numTwo);
      console.log($('#total').prop('valueAsNumber'));
    };
  });

  $('button').on('click', function() {
    $('input').prop('valueAsNumber', null);
    var numOne = null;
    var numTwo = null;
  });

})
  