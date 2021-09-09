$(function(){

  // header영역 자바스크립트
  const $gnb = $('header > .all > nav > .gnb>li');
  const $lnb = $('header > .all > nav .lnb');

  let nowIdx = 0;

  $('header > .all > nav > .gnb>li>a').on('click', function(evt){
    evt.preventDefault();
  });

  $('header > .all > nav .lnb>li>a').on('click', function(evt){
    evt.preventDefault();
  });

  $gnb.on({
    'mouseenter' : function(){
      nowIdx = $gnb.index(this);
      $lnb.eq(nowIdx).stop().fadeIn(300);
    },
    'mouseleave' : function(){
      $lnb.stop().fadeOut(0);
    }
  });



  // // sub_lnb영역 자바스크립트
  const $sub_btn = $('header > .all > nav > .sub_btn > li > a');
  const $cls_btn = $('.box > .shadow > .lightbox > .cls');

  $sub_btn.on('click', function(evt){
    evt.preventDefault();

    $('.box').fadeIn(500).show();
  });

  $cls_btn.on('click', function(evt){
    evt.preventDefault();

    $('.box').hide();
  });



  //section.banner영역 자바스크립트
  const $slide = $('.banner>.slides>.slides-container>li');
  const $indicator = $('.banner>.slides>.slides-pagination>li>a');
  const $btnPrev = $('.banner>.slides>.slides-navigation.slides-prev');
  const $btnNext = $('.banner>.slides>.slides-navigation.slides-next');


  let fadeIdx = 0;

  const fadeFn = function(){
    $slide.filter('.on').stop().fadeOut(800).removeClass('on');

    $slide.eq(fadeIdx).stop().fadeIn(800).addClass('on');

    $indicator.eq(fadeIdx).parent().addClass('on').siblings().removeClass('on');
  };

  $indicator.on('click', function(evt){
    evt.preventDefault();

    fadeIdx = $indicator.index(this);

    fadeFn();
  });

  // 이전버튼
  $btnPrev.on('click', function(evt){
    evt.preventDefault();

    if(fadeIdx>0){
      fadeIdx--;
    }else{
      fadeIdx=4;
    }

    fadeFn();
  });

  // 다음버튼
  $btnNext.on('click', function(evt){
    evt.preventDefault();

    if(fadeIdx<4){
      fadeIdx++;
    }else{
      fadeIdx=0;
    }

    fadeFn();
  });

  // // 자동재생
  const autoPlay = function(){
    intervalKey = setInterval(function(){

      if(fadeIdx<4){
        fadeIdx++;
      }else{
        fadeIdx=0;
      }
  
      fadeFn();
    },7000);
  };

  $(window).on('load', function(){
    autoPlay();
  });


  // .main_box영역 자바스크립트
  $('.main_box').on('click', function(evt){
    evt.preventDefault();
  });



  // .cont영역 자바스크립트

  $('.cont > .cont-item > .item > ul > li > a').on('click',function(evt){
    evt.preventDefault();
  });

    setInterval(() => {
      const $container = $('.cont > .cont-item');
      const $contslides = $('.cont > .cont-item>.item');
      
      $container.animate({left:-314},function(){
          $contslides.eq(0).appendTo($container)
          $container.css({left:0});
      })

      
    }, 5000);

  // .service영역 자바스크립트
  $('.service > .sv_cont > .sv_item > .s_item > ul > li > a').on('click',function(evt){
    evt.preventDefault();
  });

  const $s_slide = $('.service > .sv_cont > .sv_item');
  const $s_btnPrev = $('.service > .sv_cont >.sv-navigation.sv-prev');
  const $s_btnNext = $('.service > .sv_cont >.sv-navigation.sv-next');

  let svIdx = 0;

  $s_btnPrev.on('click', function(evt){
    evt.preventDefault();
    
    // archIdx = $slideMnu.index(this);
    
    if(svIdx > 0){
      svIdx--;
    }else{
      svIdx = 2;
    }
    
    $s_slide.stop().animate({
    left : -1305*svIdx
    });
  });
  
  // 다음 버튼
  $s_btnNext.on('click', function(evt){
    evt.preventDefault();

    if(svIdx < 2){
      svIdx++;
    }else{
      svIdx = 0;
    }

    $s_slide.stop().animate({
    left : -1305*svIdx
    });
  });



  // footer영역 자바스크립트
  $('footer > .f_menu > li > a').on('click', function(evt){
    evt.preventDefault();
  });


  // top버튼 자바스크립트

     $('.top').on('click', function(){
      $('html,body').stop().animate({scrollTop:0});
  });

  $('.top').click(function() {
      $('html, body').animate({
      scrollTop: 0
      }, 200);
      return false;
  });

});