var years = [
2003, 2004, 2005, 2006, 2007, 
2008, 2009, 2010, 2011, 2012, 
2013, 2014, 2015, 2016, 2017, 
2018, 2019, 2020, 2021, 2022, 2023]

var swiper = new Swiper(".swiper-container", {
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (years[index]) + '</span>';
      },
    dynamicBullets: true,
  },
  keyboard: true,
});

var swiper2004 = new Swiper(".nested-swiper", {
  direction: "vertical",
  navigation: {
    prevEl: ".swiper-button-prev",                       
    nextEl: ".swiper-button-next",
  },
  effect: "fade",
  keyboard: true,
  mousewheel: {
    releaseOnEdges: true,
  }
})
