var particlesConfig = {
   "particles": {
      "number": {
         "value": 80,
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
            "color": "#000000"
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
         "opacity": 0.4,
         "width": 1
      },
      "move": {
         "enable": true,
         "speed": 2,
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
            "enable": false,
            "mode": "repulse"
         },
         "onclick": {
            "enable": false,
            "mode": "repulse"
         },
         "resize": true,
         "onresize": {
            "enable": true,
            "density_auto": true,
            "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
         }
      },
      "modes": {
         "grab": {
            "distance": 400,
            "line_linked": {
               "opacity": 1
            }
         },
         "bubble": {
            "distance": 73.08695,
            "size": 4.060386,
            "duration": 2,
            "opacity": 0.3248309,
            "speed": 3
         },
         "repulse": {
            "distance": 16.241545,
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
};

var SLIDE_TIME = 6;
var STARTING_TIME = 1;

$(document).ready(function() {
   var userLang = navigator.language || navigator.userLanguage;

   if ($('.' + userLang.split('-')[0]).length) {
       $('li').removeClass('active');
       $('.' + userLang.split('-')[0]).addClass('active');
   }

   $( ".imgB1" ).each(function(index) {
      $(this).attr("src", userLang.split('-')[0] + "/" + $(this).attr('src').split("/")[1]);
   })

   setInterval(function(){
      $( ".firstimg" ).each(function(index) {
         $(this).remove()
      })
   }, 6000);

   var iteration = 0;

   // animate(iteration);

   setInterval(function(){
      iteration++;
      animate(iteration);
   }, (STARTING_TIME + 7 * SLIDE_TIME) * 1000);

   document.getElementsByTagName("html")[0].style.visibility = "visible";
});

// function animate(iteration) {
//    $( "[class*='slidetext']" ).each(function(index) {
//       $(this).css("position", "relative");
//       $(this).css("animation", "slide 10s linear forwards");
//       $(this).css("animation-delay", (STARTING_TIME + iteration * (7 * SLIDE_TIME)) + index * SLIDE_TIME + "s");

//       $(this).css("opacity", "0");
//       $(this).css("position", "absolute");         // ENABLE FOR VIDEO
//       // $(this).css("margin-top", "300px");          // ENABLE FOR VIDEO
//    })


//    $( "[class*='slideimg']" ).each(function(index) {
//       $(this).css("animation", "appear 1s linear forwards");
//       $(this).css("animation-delay", (STARTING_TIME + iteration * (7 * SLIDE_TIME)) + index * SLIDE_TIME + "s");

//       $(this).css("opacity", "0");
//    })
// }



particlesJS("particles-js", particlesConfig);var count_particles, stats, update; 


$(document).ready(function(){
   $('.carousel').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      variableWidth: false,
      centerMode: true,
      slidesToShow: 1,
      mobileFirst: true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
 });



 // fix Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.
 window.chrome.runtime.sendMessage(
   EXTENSION_ID,
   { message:"---" }, // jsonable message
   (result) => {
     if (!window.chrome.runtime.lastError) {
        // message processing code goes here
     } else {
       // error handling code goes here
     }
   }
 );
});