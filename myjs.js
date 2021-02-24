var menuBar = document.querySelector(".fa-bars");
var drop = document.querySelector(".navbar ul");
var navBar = document.querySelector(".navbar");



menuBar.addEventListener("click",function() {
    drop.classList.toggle("dropdown");
});

anime({
    targets: '.header, .page-1 p',

    opacity: [
        {value: 0, duration: 1200},
        {value: 1, duration: 1000}
    ],

    translateX: [
      {value: -500, duration: 800},
      {value: 0, duration: 800}
    ],

    delay: 0 // All properties except 'scale' inherit 250ms delay
  });


  var images = document.querySelector(".image");
  anime({
    targets: images,
    translateX: -1500,
    delay: 1000,
    easing: 'easeInOutSine',
    direction:'reverse'
  });   