var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
   
    autoplay: {
        delay:2300,
        disableOnInteraction: false,

    },
    loop:true,
  });