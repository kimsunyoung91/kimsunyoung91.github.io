$(function(){
	var $body = $('body');
	var responSize = 720;
	var $header = $('.header');
	var $logo = $header.find('h1 a');
	var $container = $('.container');
	var $page_action = $('.page_action');
	var $mb_navBtn = $header.find('.nav_open');
	var $nav = $page_action.find('li');
	var cBefore = 'cBefore';
	var colorArr = ['#444','#5193ff','#ff0066','#00986b','#ff9000'];
	var ofsArr = [];
	var pageArr = [];
	var aniSpeed = 450;		//도트 확장 및 축소 시간
	var loadingTime = 500;	//로딩이 보여지는 시간
	var loading_each = 50;	//각각의 텍스트 애니 시간

	//nav 각각의 링크를 배열에 담기
	$nav.each(function(i, e){
		var urlData = $(e).find('a').attr('href');
		pageArr.push(urlData);
	});

	//새로고침시 새로고침 전페이지 로드
	$(window).ready(function(){
		var p_url = location.href;
		var p_urlPage = p_url.split('#')[1];

		//파라미터 주소가 있을 경우
		$.each(pageArr, function(i, e){
			if( e.split('.')[0] == p_urlPage ) pageRefresh(pageArr[i], i);
		});

		//파라미터 주소가 없을 경우
		if( p_urlPage == undefined || p_urlPage == '' ) pageRefresh(pageArr[0], 0);
	});

	//새로고침시 함수
	function pageRefresh(target, idx){
		$nav.eq(idx).addClass('on');
		pageAjax(target);
	}

	//page ajax함수
	function pageAjax(target){
		$.get(target, function(data){
			$container.append(data);
		});
	}

	//클릭시 도트 애니 및 컨텐츠 전환
	$nav.on('click', function(){
		if( !$(this).is('.on') ){
			var on_idx = $(this).siblings('li.on').index();
			var idx = $(this).index();
			var page_txt = $(this).text();
			var html = $(this).find('a').attr('href');


			//컨텐츠 ajax
			var contentAjax = setInterval(function(){
				$container.empty();
				pageAjax(html);
				var url = location.href.split('#')[0];
				window.location.replace( url+'#'+page_txt );
				clearInterval(contentAjax);
			}, aniSpeed);
		}
		return false;
	});
	$logo.on('click', function(){
		$nav.eq(0).trigger('click');
		return false;
	});


	//모바일 네비 오픈
	$mb_navBtn.click(function(){
		$(this).toggleClass('on')
		if( !$page_action.is('.on') ){
			$page_action.fadeIn(200).addClass('on');
		}else{
			$page_action.fadeOut(200).removeClass('on');
		}
	});


	//로딩
	var $loading_txt = $loading.find('li');
	var loading_length = $loading_txt.length;
	var loading_Arr = [];
	var tag_name = 'i';

	//각각 li의 텍스트를 loading_Arr에 담고 li는 비우기
	$loading_txt.each(function(i, e){
		loading_Arr.push( $(e).text() );
		$(e).text('');
	});
});