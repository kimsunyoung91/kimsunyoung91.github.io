(function ($) { 
  $(document).ready(function () {
    "use strict";

$('.ulover').each(function (i, e) {
  $(e).find('.dep2').hide();
  $(e).find('.dep2').eq(0).show();
  $(e).find('.dep1').on('mouseover', function () {
    $(this).find('.dep2').slideDown().parent().siblings().find('.dep2').slideUp();
    return false;
  });
  $(e).on('mouseleave', function () {
    $(this).find('.dep2').slideUp();
    return false;
  });
});
    let $win = $(window);
    let isFixed = false;
    /* S : Navigation */
    let $gmIndex = function(index) {return "gm" + (index + 1)},
      $gmNum = $gmIndex,
      $gmItem = $(".gnb .dep1"),
      $gmItemAdd = $gmItem.addClass($gmNum), 
      $gnbNav = $('.nav'),
      $gnbNavD1 = $gnbNav.find('>ul>li'),
      $gnbNavD2 = $gnbNav.find('>ul>li>ul'),
      $bodypc = $('body').is('.pc'),
      $bgNav = $('.bgnav');

    //PC Navigation
    $gnbNav.on('mouseleave', function(){
      $bgNav.stop().animate({'height':0},300,'swing');
      $bgNav.removeClass('line');
    });
    $gnbNav.find('>.gnb').on('mouseenter focusin', function(){
      if( $('body').is('.pc') ){
        $gnbNav.addClass('active');
        $gnbNavD1.stop().animate({'height':333},300,'swing');
        $bgNav.stop().animate({'height':280},300,'swing');
        $bgNav.addClass('line');
      }
    }).on('mouseleave', function(){
      if( $('body').is('.pc') ) navOut();
    });
    $gnbNav.find('a:last, >ul>li:first>a:first').on('focusout', function(){
      if( $('body').is('.pc') ) navOut();
    });
    function navOut(){
      $gnbNav.removeClass('active');
      $gnbNavD1.removeClass('on').stop().animate({'height':53},300,'swing');
      $bgNav.stop().animate({'height':0},300,'swing');
      $bgNav.removeClass('line');
    }
    $gnbNavD1.each(function(i, e){
      $(e).on('mouseenter focusin', function(){
        if( $('body').is('.pc') ) $(e).addClass('on').siblings().removeClass('on');
      });
      $(e).find('a:last').on({
        focusin:function(){ 
          if( $('body').is('.pc') ) $(e).addClass('on').next().removeClass('on'); 
        },
        focusout:function(){
          if( $('body').is('.pc') ) $(e).removeClass('on');
        }
      });
    });

    //mo Navigation
    $('.btn-mo,.bgnav').click(function(){
      $(this).toggleClass('mb-active');
      $('.navigation').toggleClass('mb-active');
      $('body').toggleClass('mb-active');
    });
    $gnbNavD1.find('>a').click(function(){
      if( $('body').is('.mo') ){
        $(this).next().stop().slideToggle().parent().siblings().children().next().slideUp();
        $(this).parent().toggleClass("on").siblings().removeClass("on");
        return false;
      }
    });

    let mbStart = false;
    function rwdpcLayout(){
      $('body').addClass('pc').removeClass('mo');
      $gnbNavD2.slideDown();
      $('.navigation').attr('style','');
      $('.bgnav').show();
      $('.mbnav>ul>li>ul').hide();
      if( $('.navigation').is('.mb-active') ){
        $('.navigation').removeClass('mb-active');
        $('body').removeClass('mb-active');
      }
      mbStart = false;
    }
    function rwdmoLayout(){
      $('body').removeClass('pc').addClass('mo');
      //$('.bgnav').hide();
      $('.navigation').css({'height':$(window).height() - $('.headerwrap').height()});
      if( $('body').is('.mo') && !mbStart ){
        $gnbNavD2.slideUp();
        mbStart = true;
      }
    }
    function rwdLayout(){
      let breakPoint = 1024;
      let filter = "win16|win32|win64|mac|macintel";
      if( navigator.platform  ){
        if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
          if( $(window).width() > breakPoint ){
            rwdpcLayout();
          }else{
            rwdmoLayout();
          }
        }else{
          if( $(window).width() > breakPoint - 17 ){
            rwdpcLayout();
          }else{
            rwdmoLayout();
          }
        }
      }
      
    }

    /* Depth Menu */
    let $depMenu = $('.depmenu');
    $depMenu.find('li').each(function(i, e){
      //하위 메뉴가 있다면 해당 li에 클래스 생성
      if( $(e).children().length > 1 ){
        $(e).addClass('arr');
      } else {
        $(e).addClass('narr');
      }

      //클릭 이벤트
      $(e).click(function(){
        if( $(e).is('.arr') ){
          let speed = 200;
          let open = 'open';
          //해당 메뉴 열고 닫힘
          $(e).toggleClass(open).find('>.dep').slideToggle(speed);
          //닫을경우 해당 메뉴의 하위 모두 닫힘
          $(e).find('li').removeClass(open).find('.dep').slideUp(speed);
          //형제 포함 형제의 하위메뉴 모두 닫음
          $(e).siblings().removeClass(open).find('.dep').slideUp(speed).find('li').removeClass(open);
          return false;
        }
      });
    });

    /* Contents TabMenu */
    let $cBody = $('.cbody');
    let $tabMenuBtn = $('.ctabmenu li');
    let $tabCnt = $('.ctabcnt');
    $cBody.each(function (i,e) { 
      $tabMenuBtn.on('click', function(){
        let idx = $(this).index();
        $tabMenuBtn.eq(idx).addClass('on').siblings().removeClass('on');
        $tabCnt.eq(idx).addClass('on').siblings().removeClass('on');
        return false;
      });
    })

    /* TapMenu Type .hxgroup>h3, .hxcntgroup>.hxcnt */
    $('.hxgroup').each(function (i, e) { 
      let $hx = $(e).find('.hx');
      let $hxCnt = $(e).find('.hxcnt');
      $hx.on('click focusin', function(){
        $(this).addClass('on').siblings('.hx').removeClass('on');
        $(this).next().addClass('on').siblings('.hxcnt').removeClass('on');
        return false;
      });
    })
      
    /* TapMenu Type dl>dt, dl>dd */
    $('.dlgroup').each(function (i, e) {
      let $dt = $(e).find('dt');
      let $ddCnt = $(e).find('dd');
      $dt.on('click focusin', function(){
        $(this).addClass('on').siblings('dt').removeClass('on');
        $(this).next().addClass('on').siblings('dd').removeClass('on');
        return false;
      });
    })
      
    /* TapMenu Type ul>li */
    $('.ulgroup').each(function (i, e) {
      let $li = $(e).find('li');
      let $liBtn = $(e).find('.que');
      let $liCnt = $(e).find('.ans');
      $liBtn.on('click focusin', function () {
        $(this).parent().addClass('on').siblings().removeClass('on');
        return false;
      });
    });

    /* Scroll Fixed */
    /* 
    let nav = $('.menu');
    let navoffset = $('.menu').offset();  
    //offset을 이용하여 .menu(메뉴영역)의 위치값을 알아내어 navoffset에 넣어둔다 

    $(window).scroll(function () {
      if ($(this).scrollTop() >= navoffset.top) {  //화면 스크롤 값이 메뉴영역의 top보다 값이 커지면
        nav.css('position','fixed').css('top',0); //화면 위쪽에 고정시킨다.
      }else {
        nav.css('position','absolute').css('top',200); //처음 메뉴영역의 top 값으로 돌리기
      }
    }); 
    */
    let $navOffset = $('.navigation').offset();
    function scFix() {
      if ( $win.scrollTop() <= $navOffset.top ) {
        if ( !isFixed ) {
          isFixed = true;
          $('.navigation').removeClass('sticky');
          $('.sidemenu').removeClass('sticky');
          $('.btn-top').removeClass('sticky');
        }
      } else if ( isFixed ) {
        isFixed = false;
        $('.navigation').addClass('sticky');
        $('.sidemenu').addClass('sticky');
        $('.btn-top').addClass('sticky');
      }
    }
    $win.on('scroll', scFix);
    scFix();

    /* Top Button Scroll */
    $('.btn-top').on('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });


    $(window).on('load', function () {
      $(window).resize(function () {
        rwdLayout();
      })
      scFix();
      $(window).trigger('resize');
    })
  });
})(jQuery);

/* Print Page Popup */
function uxPrintPage(){
  const is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  if (is_chrome) {
    //alert("It is chrome browser");
    window.print();
  } else {
    let W=document.documentElement.clientWidth; if(!W){W=document.body.clientWidth;}
    let H=document.documentElement.clientHeight; if(!H){H=document.body.clientHeight;}
    let pMethod = "menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=" + W + ",height=" + H + ",left=0,top=0";
    let pWinOpen = window.open("about:blank","printPage",pMethod);
    let pDoctype="<!doctype html'>"; 
    let pHeader="<html lang='ko'>" + $('head').html() + "<body style='padding:0 15px'>";
    let pgetContent=$('#printBody').html();
    let pFooter="</body></html>";
    pContent = pDoctype + pHeader + pgetContent + pFooter;
    pWinOpen.document.open();
    pWinOpen.document.write(pContent);
    pWinOpen.document.close();
    pWinOpen.print();
    //pWinOpen.close();
  }
  return false;
}

/* Top Banner cookiedata */
cookiedata = document.cookie;
/* 기본 조건식
if ( cookiedata.indexOf("ncookie=done") < 0 ){
  topBnOpenWin()
} else {
  topBnCloseWin()
} 
*/
/* 삼항 연산자 조건식 */
if ( cookiedata.indexOf("ncookie=done") < 0 ? topBnOpenWin() : topBnCloseWin() );

/* New Window Center Popup */
let winCenter = null;
function newWinPopup(mypage,myname,w,h,scroll){
  leftPos = (screen.width) ? (screen.width-w)/2 : 0;
  topPos = (screen.height) ? (screen.height-h)/2 : 0;
  settings = 'height='+h+',width='+w+',top='+topPos+',left='+leftPos+',scrollbars='+scroll+',resizable' 
  winCenter = window.open(mypage,myname,settings)
}