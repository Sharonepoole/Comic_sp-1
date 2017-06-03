$('.carousel').carousel()


//comic carosel

<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="slick/slick.min.js"></script>


$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});
		

//video carosel


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

  $('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })
