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
 
 
 $(document).ready(function() {
    var userLang = navigator.language || navigator.userLanguage;
 
    if ($('.' + userLang.split('-')[0]).length) {
        $('li').removeClass('active');
        $('.' + userLang.split('-')[0]).addClass('active');
    }
 
    $( ".img-sample" ).each(function(index) {
       $(this).attr("src", userLang.split('-')[0] + "/" + $(this).attr('src').split("/")[1]);
    })
 
    document.getElementsByTagName("html")[0].style.visibility = "visible";
 });
 
 
 particlesJS("particles-js", particlesConfig);var count_particles, stats, update; 
 
