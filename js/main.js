/* 햄버거버튼 open*/ 
$('.open').click(function(){
  $('.subNav').animate({right:0});
})

/* close */ 
$('.close').click(function(){
  $('.subNav').animate({right:'-100%'});
})

/* header */ 
const header = document.querySelector('header');

window.addEventListener('scroll',function(){
  header.classList.add('on')
  if(this.window.scrollY == 0) header.classList.remove('on')
})

/* top Btn */ 
$(window).scroll(function(){
  let sct = $(window).scrollTop();

  if(sct){
      $('.top_btn').fadeIn();
  }else{
      $('.top_btn').fadeOut();
  }
});
$('.top_btn').click(function(){
  $('html,body').animate({
      scrollTop: 0
  },500);
});


