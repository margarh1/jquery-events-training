console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $('span').on('click', function() {
    
    var toBeAppended = '<li>You Clicked: ' + $(this).text() + ' at ' + Date.now();
    $('ul').append(toBeAppended);
  })

})
