// SWIPER JS
var swiper = new Swiper(".mySwiper_two", {
    rewind: true,
    slidesPerView: 2,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper", {
    rewind: true,
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});