$(function(){
	
	/* 맨위로 버튼 적용 스크립트 */
	/* markup 
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
		}, 5000);
		return false;
	});
})