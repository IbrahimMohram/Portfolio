
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



let options = {
  strings: [``,`<span class="welcome-home">i'm</span> Ibrahim Moharam` ,`<span class="welcome-home">i'm</span>  Front-end Developer`],
  typeSpeed: 50,
  smartBackspace: true, // Default value
  backSpeed:40,
  loop:true
};

let typed = new Typed('#typing', options);


let aboutOffset = $("#about").offset().top;
$(window).scroll(function(){
  let wScroll = $(window).scrollTop();
  if(wScroll>aboutOffset - $("#main-nav").innerHeight()){
    $("#main-nav").css("backgroundColor" , `rgba(0 , 0 , 0 ,1)`);

    $(".progress-anmati").addClass("progress-anmation");

  }
  else{
    $("#main-nav").css("backgroundColor" , "transparent");
    $(".progress-anmati").removeClass("progress-anmation");

  }


});

$("a[href^='#']").click(function(e){
    let aHref = $(e.target).attr('href');
    let sectionOffset =$(aHref).offset().top;
    $("html , body").animate({scrollTop:sectionOffset},2000)
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
  $(document).ready(function(){
    $('.portfolio-item').isotope(function(){
        itemSelector:'.item-port'
      });
  
  
  
    $('.filterGallery ul li').click(function(){
      $('.filterGallery ul li').removeClass('active');
      $(this).addClass('active');

  
      var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
          filter: selector,
  
        })
        return false;
    });
  });

