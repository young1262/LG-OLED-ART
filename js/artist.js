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



import products from "../artist.json" assert {type:'json'}
console.log(products)


const createItem = (product) => {
  const ulEl = document.querySelector('ul.artist_in')
  const li = document.createElement('li');
  const a = document.createElement('a')
  const img = document.createElement('img');
  const p = document.createElement('p');

  li.setAttribute('id',product.id)
  a.setAttribute('href','damien.html')
  img.src = product.img
  p.innerText = product.name

  li.append(a,p);
  a.append(img);
  ulEl.append(li);
}
function importData() {
  products.data.map((item) => {
    if (!document.getElementById(item.id)) { // 동일한 item이 계속 추가되는것을 방지
      createItem(item)
    }

  })
}

window.addEventListener('load', importData)



