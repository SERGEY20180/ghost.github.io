$(document).ready(function(){
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  mMenuBtn.on("click",function(){
      mMenu.toggleClass("active");
      $("body").toggleClass("no-scroll");
  });
   //initialize swiper when document ready
   var mySwiper = new Swiper ('.swiper-container', {
    
    loop: true,
  })
});