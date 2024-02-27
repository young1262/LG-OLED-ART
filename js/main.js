/* 햄버거버튼 open*/ 
$('button').click(function(){
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


