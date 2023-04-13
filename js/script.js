// -----------------------------------------------------
// Navigation
// -----------------------------------------------------
// The below code is for navigation on mobile layout
var navOpen = false; // Navigation is close at start that is why navOpen is false
document.getElementById('menu-bar').onclick = function(){
    if(navOpen){
        // When Navigation is open navOpen = true and if its open then on next click it should be closed. The below is closed code
        document.getElementById('navigation-block').classList.remove('open');
        navOpen = false; // this is to declare that navigation is close now
    }
    else{
        // When Navigation is close navOpen = false and if its close then on next click it should be open. The below is open code
        document.getElementById('navigation-block').classList.add('open');
        navOpen = true; // this is to declare that navigation is open now
    }
}


// -----------------------------------------------------
// Slider
// -----------------------------------------------------
var sliderSet = 1;
document.getElementById('slick-prev').onclick = function(){
    if(sliderSet == 1){
        document.getElementById('slide3').classList.remove('prev', 'next');
        document.getElementById('slide3').classList.add('active');
        document.getElementById('slide1').classList.remove('prev', 'active');
        document.getElementById('slide1').classList.add('next');
        document.getElementById('slide2').classList.remove('next', 'active');
        document.getElementById('slide2').classList.add('prev');
        sliderSet = 3;
    }
    else if(sliderSet == 2){
        document.getElementById('slide1').classList.remove('prev', 'next');
        document.getElementById('slide1').classList.add('active');
        document.getElementById('slide2').classList.remove('prev', 'active');
        document.getElementById('slide2').classList.add('next');
        document.getElementById('slide3').classList.remove('next', 'active');
        document.getElementById('slide3').classList.add('prev');
        sliderSet = 1;
    }
    else{
        document.getElementById('slide2').classList.remove('prev', 'next');
        document.getElementById('slide2').classList.add('active');
        document.getElementById('slide3').classList.remove('prev', 'active');
        document.getElementById('slide3').classList.add('next');
        document.getElementById('slide1').classList.remove('next', 'active');
        document.getElementById('slide1').classList.add('prev');
        sliderSet = 2;
    }
}


document.getElementById('slick-next').onclick = function(){
    if(sliderSet == 1){
        document.getElementById('slide2').classList.remove('prev', 'next');
        document.getElementById('slide2').classList.add('active');
        document.getElementById('slide3').classList.remove('prev', 'active');
        document.getElementById('slide3').classList.add('next');
        document.getElementById('slide1').classList.remove('next', 'active');
        document.getElementById('slide1').classList.add('prev');
        sliderSet = 2;
    }
    else if(sliderSet == 2){
        document.getElementById('slide3').classList.remove('prev', 'next');
        document.getElementById('slide3').classList.add('active');
        document.getElementById('slide1').classList.remove('prev', 'active');
        document.getElementById('slide1').classList.add('next');
        document.getElementById('slide2').classList.remove('next', 'active');
        document.getElementById('slide2').classList.add('prev');
        sliderSet = 3;
    }
    else{
        document.getElementById('slide1').classList.remove('prev', 'next');
        document.getElementById('slide1').classList.add('active');
        document.getElementById('slide2').classList.remove('prev', 'active');
        document.getElementById('slide2').classList.add('next');
        document.getElementById('slide3').classList.remove('next', 'active');
        document.getElementById('slide3').classList.add('prev');
        sliderSet = 1;
    }
}