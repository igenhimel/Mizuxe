
$(document).ready(function () {

   $('.navbutton').click(function () { 
      $('#myNav').fadeToggle('slow');
   });
 
   new WOW().init();

   $("#myParent").parent().addClass("cards-border");
   $("#myParent-2").parent().addClass("cards-background");
   $("#myParent-3").parent().addClass("cards-border");
   $("#myParent-4").parent().addClass("cards-background");

   $(".owl-carousel").owlCarousel({
      items:1,
      margin:20,
      responsiveClass:true,
      autoplaySpeed:600,
      autoplay:false,
      loop:true,
      responsive:{
         1200:{
            items:4
         },
         992:{
            items:3,
            autoplay:true,
         },
         768:{
            items:2,
            autoplay:true,
         },
         576:{

            items:1,
            autoplay:true,
         }

      }

   });
   
});


