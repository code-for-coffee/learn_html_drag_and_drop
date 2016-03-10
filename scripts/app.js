// global vars
var app = app || {};

$(document).ready(function() {

  app.simba = $('img');
  app.leftBox = $('#left-container');
  app.rightBox = $('#right-container');

  // drag and drop events
  // when we drag simba, he says 'hey, watch it'
  $(app.simba).on('drag', function(evt) {
    //console.log(evt);
    console.log('Hey, watch it! (Simba was dragged)');
  });

  $(app.simba).on('dragend', function(evt) {
    console.log('Hakuna matata');
  });

  // left box
  $(app.leftBox).on('dragover', function(evt) {
    evt.preventDefault();
    console.log('yo, you are in my lime green space!!!!!');
  });
  $(app.leftBox).on('dragleave', function(evt) {
    console.log('hey sorry.. i miss you :(');
  });
  $(app.leftBox).on('drop', function(evt) {
    $(this).append(app.simba);
    console.log('drop it like its hot');
    console.log(evt);
  });

  $(app.rightBox).on('dragover', function(evt) {
    evt.preventDefault();
    console.log('hey magenta welcomes all <3 <3 <3');
  });

  $(app.rightBox).on('dragleave', function(evt) {
    console.log('did the disney land food not sit well?');
  });

  $(app.rightBox).on('drop', function(evt) {
    console.log(evt);
    // target:
    console.log(evt.currentTarget);
    console.log('under the seeeaaaa under the sea');
    $(this).append(app.simba);
  });
  
  console.log("All resources are loaded");

});
