define(['jquery', 'bootstrap' ], function($, bootstrap) {

  console.log("Loaded main!");

  var copy = $(".day-row").clone();
  
  for( var i = 0; i < 50; i++ ) {
    $('.bill-flow-container').append( copy.clone() );
  }

  $('.social-bar').affix();
});
