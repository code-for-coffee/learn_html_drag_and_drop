
$(document).ready(function(evt) {
  console.log('Animations Boilerplate is a go.');

  // create some events to hide '.news' and '.weather'
  $('#weather-btn').click(function(evt) {
    // select '.weather' and .hide() it
    //$('.weather').hide();
    $('.weather').fadeOut();
  });
  // now hide '.news' and .hide() it
  $('#news-btn').click(function(evt) {
    //$('.news').hide();
    $('.news').fadeOut();
  });
  // what if we want to see them all again?
  $('#show-and-hide-btn').click(function(evt) {
    // we miss you! .show() to come back
    // $('.news').show();
    // $('.weather').show();
    $('.news').fadeIn();
    $('.weather').fadeIn();
  });
  // animation station
  $('#move-img').click(function(evt) {
    // .animate() - argument {}
    // .animate(propertiesObject, millisecondsToTake, callback)
    // $('img').animate({
    //   opacity: 0.8,
    //   width: '25%',
    //   borderWidth: '5px'
    // }, 1000, function() {
    //   console.log('Simba has been moved');
    // });
    $('img').animate({
      opacity: 0.8,
      width: '25%',
      borderWidth: '5px',
      top: '+=500px',
      left: '+=250px'
    }, 1000, function() {
      console.log('Simba has been moved');
      // then animate again!
      $('img').animate({
        opacity: 0.8,
        width: '25%',
        borderWidth: '5px',
        top: '-=500px',
        right: '-=900px'
      }, 500, function(evt) {
        console.log('Simba moved again!')
      })
    });
  });
});
