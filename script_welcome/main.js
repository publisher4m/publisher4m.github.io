// ------------------------------------------------------------------------------------------------------------------------------------- //
// **********************************************************| 슬라이드 옵션 |********************************************************** //
// ------------------------------------------------------------------------------------------------------------------------------------- //
$('.one-time').slick({
    // slide: 'div',		        //슬라이드 되어야 할 태그 ex) div, li 
    infinite: true,             // 무한 반복 옵션
    speed: 300,                 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    adaptiveHeight: true,
    slidesToShow: 1,            // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1,          // 스크롤 한번에 움직일 컨텐츠 개수
    autoplay: false,            // 자동 스크롤 사용 여부
    autoplaySpeed: 8000,        // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 
    pauseOnHover : true,		// 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정

    vertical : true,		    // 세로 방향 슬라이드 옵션
    verticalSwiping: true,      // 세로 방향 스와이프 옵션

    // arrows: false,               // 옆으로 이동하는 화살표 표시 여부
    // prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		    // 이전 화살표 모양 설정
	// nextArrow : "<button type='button' class='slick-next'>Next</button>",		        // 다음 화살표 모양 설정

	// dots : true,                 // 스크롤바 아래 점으로 페이지네이션 여부
    // dotsClass : "slick-dots", 	// 아래 나오는 페이지네이션(점) css class 지정
    // draggable : true,            // 드래그 가능 여부 
    // centerMode: true,            // 센터모드

    // responsive: [                // 반응형 웹 구현 옵션
    //     {  
    //         breakpoint: 960,     //화면 사이즈 960px
    //         settings: {
    //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //             slidesToShow:3 
    //         } 
    //     },
    //     { 
    //         breakpoint: 768,     //화면 사이즈 768px
    //         settings: {	
    //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //             slidesToShow:2 
    //         } 
    //     }
    // ]
});

var mainSlider = $('.one-time');
var innerText = $('.con-wrap');

mainSlider.on('scroll', function(e) {
    e.preventDefault();
  
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  });
  
  innerText.on('scroll', function(e) {
      e.stopPropagation();
  })

  $(function(){
    var curDown = false,
        curYPos = 0,
        curXPos = 0;
    
    $(window).mousemove(function(m){
      if(curDown){
        window.scrollBy(curXPos - m.pageX, curYPos - m.pageY)
      }
    });
    
    $(window).mousedown(function(m){
      curYPos = m.pageY;
      curXPos = m.pageX;
      curDown = true;
    });
    
    $(window).mouseup(function(){
      curDown = false;
    });
  })
  

// ------------------------------------------------------------------------------------------------------------------------------------------ //
// **********************************************************| 스와이프 조작 팝업 |********************************************************** //
// ------------------------------------------------------------------------------------------------------------------------------------------ //
$(document).ready( () => {
    $('.swipe-box').addClass('on');

    if ($('.swipe-box').hasClass('on')) {
        setTimeout(() => {
            $('.swipe-box').removeClass('on');
        }, 3000)
    }

    $('.swipe-box').on('click', () => {
        $('.swipe-box').removeClass('on');
    })
});

