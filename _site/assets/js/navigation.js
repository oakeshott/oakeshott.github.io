$(document).on("ready", function(){
  $('.side-nav-button').sideNav({
    menuWidth: 300, // Default is 240
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  $('.collection-item.avatar').hover(
      function() {
        $(this).addClass('blue-grey lighten-4');
      },
      function() {
        $(this).removeClass('blue-grey lighten-4');
      });
  $('.collection-item').hover(
      function() {
        $(this).addClass('blue-grey lighten-4');
      },
      function() {
        $(this).removeClass('blue-grey lighten-4');
      });
});
