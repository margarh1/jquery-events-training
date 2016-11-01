console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var currentlyRunning = false;
  var startTime;
  var endTime;

  $(document).on('keypress', function() {
    if (currentlyRunning === false) {
      startTime = Date.now();
      currentlyRunning = true;
    } else {
      endTime = Date.now();
      currentlyRunning = false;
      var secondsTotal = ((endTime - startTime)/1000).toFixed(2) + ' seconds';
      $('#total-time').text(secondsTotal);
    }
  })
})
