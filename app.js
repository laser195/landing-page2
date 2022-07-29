const jarallaxEls = document.querySelectorAll('.jarallax')
const btnMob = document.getElementById('btn-mob')
const cardsOne = document.querySelector('frist-cards')
const navOne = document.querySelector('#nav-2')
const llist = document.querySelector('#dropdown')
const btn = document.querySelector('#dropdownMenuButton1')
const list = document.querySelector('#dropdown-menu')
const header = document.querySelector('header')

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items: 1,
      loop:true,
      margin:10,
      autoHeight:true,
      autoplay:true,
      autoplayTimeout:2000,
      animatout:'backOutDown',
      nav:false
      
    
});
$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
    });
  });
  


      console.log(llist);
      llist.addEventListener('mouseover',()=>{
        console.log(111);
        btn.classList.add('show')
        list.classList.add('show')
      })
      llist.addEventListener('mouseleave',()=>{
        console.log(111);
        btn.classList.remove('show')
        list.classList.remove('show')
      })

      ScrollOut({
        targets: ".sticky-header",
        offset: 100,
      });

      if(navOne.getElementsByClassName.position=='fixed'){
        cardsOne.getElementsByClassName.position='absolute'
      }





jarallax(jarallaxEls, {
	speed: 0.2,
})
const jara2 = document.getElementById('jarallax-container-0')
jarallax(jara2, {
	speed: 0.2,
})

const dropmenu = ()=>{
  console.log(123);
  navOne.classList.toggle('dddd')
  navOne.classList.toggle('mob')
  header.classList.toggle('hederBack')
}

btnMob.addEventListener('click',dropmenu)
