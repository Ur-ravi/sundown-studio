const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page4Animation(){
    var elemC =document.querySelector(".elem-container")
elemC.addEventListener("mouseenter",function(){
    document.querySelector(".fixed-image").style.display="block";
})
elemC.addEventListener("mouseleave",function(){
    document.querySelector(".fixed-image").style.display="none";
})


var elems =document.querySelectorAll(".element")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image= e.getAttribute("data-image")
        document.querySelector(".fixed-image").style.backgroundImage = `url(${image})`
    })
})
}
    //SWIPER IN JAVASCRIPT

    function swiperAnimation(){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 100,
          });
    }

    swiperAnimation();
    page4Animation();

var menu= document.querySelector("nav h3")
var full= document.querySelector(".navHover")
 var navImg= document.querySelector("nav img")
 var flag =0;
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top= 0
        navImg.style.opacity=0
        flag=1
    }
    else{
        full.style.top= "-100%" 
        navImg.style.opacity=1
        flag=0
    }
})