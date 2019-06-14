$(function () {
	
	/* START : 탭메뉴 적용 스크립트 ul li ul 구조 */
	/* markup 구조
	<div class="tabmenu">
		<ul>
			<li class="on"><a href="#">menu1</a>
				<ul>
					<li><a href="#">menu1-1</a></li>
					<li><a href="#">menu1-2</a></li>
				</ul>
			</li>
			<li><a href="#">menu2</a>
				<ul>
					<li><a href="#">menu2-1</a></li>
					<li><a href="#">menu2-2</a></li>
				</ul>
			</li>
		</ul>
	</div>
	*/
	$('.tabmenu').each(function () {
		$('.tabmenu ul > li').on('click', function () {
			$(this).addClass('on').siblings().removeClass('on');
			return false;
		})
	})
	/* END : 탭메뉴 적용 스크립트 ul li ul 구조 */



	
	/* START : 맨위로 버튼 적용 스크립트 */
	/* markup 구조
		<a href="#" class="sctopbtn">맨위로</a>
	*/
	$(document).on('scroll', function () {
		if ($(window).scrollTop() > 500) {
			$('.sctopbtn').addClass('show');
		} else {
			$('.sctopbtn').removeClass('show');
		}
	});
	$('.sctopbtn').on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	/* END : 맨위로 버튼 적용 스크립트 */



	/* START : 상단 네비게이션 스크롤시 상단에 고정 */
	/* markup 구조
	<header class="header">
		<h1 class="logo">Title</h1>
	</header>
	<nav class="nav">
		<ul class="gnb">
			<li>First Menu</li>
			<li>Second Menu</li>
			<li>Third Menu</li>
			<li>Fourth Menu</li>
		</ul>
	</nav>
	<main class="container">
	</main>
	<footer class="footer">
	</footer>
	*/
	/*
	var navOffset = $('.nav').offset();
	$(window).scroll( function() {
		if ( $(document).scrollTop() > navOffset.top ) {
			$('.nav').addClass('fixed');
		} else {
			$('.nav').removeClass('fixed');
		}
	});
	*/
	
	/* END : 상단 네비게이션 스크롤시 상단에 고정 */
});


//bxslider 제어 옵션
$(document).ready(function(){
	$('.bxslider').bxSlider({
		// 기본
		mode: 'fade', //fade(페이드 인/아웃) / horizontal(좌/우 슬라이드) / vertical(상/하 슬라이드)
		infiniteLoop: false, //무한루프를 할것인지 결정해주는 옵션
		hideControlOnEnd: true, //마지막 슬라이드가 되었을때 버튼 숨김 제어
		speed: 500, // 슬라이드 움직이는 속도
		slideMargin: 0, //슬라이드 사이의 간격 조절
		startSlide: 0, //처음에 보여질 아이템 설정 옵션
		randomStart: false, //랜덤으로 아이템이 보여질 옵션
		captions: true, // 설명글 추가하기 옵션
		ticker: false, //ticker 라는 옵션값을 이용해서 흐르는 배너 기능을 설정하고  speed 값으로 흘러가는 속도의 값을 설정
		tickerHover: false, //마우스를 올렸을 때 멈춤/재생 제어
		adaptiveHeight: false, //자동으로 이미지의 높이에 맞게 슬라이드의 높이값을 조절할것인지 옵션
		video: false, //비디오 사용시 옵션
		responsive: true, //반응형 모드 사용시

		// 페이징
		pager: true, //페이지 버튼 생성 유/무 || 필요없을 때 false
		pagerType: 'full', //페이지 타입 설정 기본 full, / short

		// 제어옵션
		controls: true, //좌우 버튼 생성 유/무 || 필요없을 때 false
		nextText: 'Next', //우측버튼에 보여질 텍스트
		prevText: 'Prev', //좌측버튼에 보여질 텍스트
		autoControls: true, //play / stop / puase 버튼들을 노출시키는 옵션 입니다.
		startText: 'Start', //재생시 보이는 텍스트
		stopText: 'Stop', //정지시 보이는 텍스트
		autoControlsCombine: true,

		// 자동
		auto: true, //자동 슬라이드
		pause: 4000, //슬라이드 정지 후 다음 슬라이드 보여질 속도
		autoStart: true,
		autoDirection: 'next', //슬라이드 보여질 방향 제어
		autoHover: true, //마우스 hover시 슬라이드 제어
		autoDelay: 1, //슬라이드 정지 시간

		// CAROUSEL
		minSlides: 1, //최소 이미지를 몇개씩 이동을 시킬것인지 결정해주는 옵션
		maxSlides: 1, //최대 이미지를 몇개씩 이동을 시킬것인지 결정해주는 옵션
		moveSlides: 0, //움직일 슬라이드 개수
		slideWidth: 0, //슬라이드 가로 사이즈
	});
});