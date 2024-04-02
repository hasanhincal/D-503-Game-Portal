// owl carosel 
$(document).ready(function(){
            
    let owl =  $(".owl-carousel").owlCarousel({
      autoplay: false,
      dots: true,
      dotsData: true,
      loop:true,
      nav:false,
      items: 1,

      });

      $('.owl-dot').click(function() {
        owl.trigger('to.owl.carousel',[$(this).index(),1000])
      })
    
    });

    // open-close menu

    $('#check').change(function(){
      if($(this).is(':checked')){
        $('.navHeader').addClass('active');
      } else {
        $('.navHeader').removeClass('active');
      }
    });