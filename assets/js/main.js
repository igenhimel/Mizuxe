

$(document).ready(function () {

   $('.navbutton').click(function () { 
      $('#myNav').fadeToggle('slow');
   
     
   
   });
   new WOW().init();

   $("#myParent").parent().addClass("cards-border");
   $("#myParent-2").parent().addClass("cards-background");
   $("#myParent-3").parent().addClass("cards-border");
   $("#myParent-4").parent().addClass("cards-background");
   
});