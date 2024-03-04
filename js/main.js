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

//헤더 버튼누르면 해당 section으로 스크롤

const menuItems = document.querySelectorAll('nav > ul > li > a');
let num = 0;

menuItems.forEach(function(item,idx){
    item.onclick = function(e){
      e.preventDefault();

    //let tagetName = item.getAttribute('data-target');
    let tagetName = item.dataset.target;
    document.querySelector(tagetName).scrollIntoView({ 
    behavior:"smooth" })

    menuItems[num].classList.remove('on');
    

    num = idx;
    item.classList.add('on');
    
    }
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


