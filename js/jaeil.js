$(document).ready( ()=> {

	//상단 서브메뉴 보이기
	$("header li>a").on("mouseenter click", function() {
		$("header nav").stop().slideUp();
		$(this).next().stop().slideDown();
	});
	
	//이미지 슬라이드
	if( $(window).width()>768 ){
		setInterval( () => rightMove() , 2000);
	
		const $imgs = $("#sliding div");
		rightMove = ()=> {
			$imgs.stop().animate({left:"-1280px"},1000,function(){
				$imgs.prepend(  $imgs.children().last()  );
				$imgs.css("left","-2560px");
			});
		}
	} 	else{
		setInterval(rightMove, 2000);
	
		const $imgs = $("#sliding div");
		rightMove => () => {
			$imgs.stop().animate({left:"-100vw"},1000, () => {
				$imgs.prepend(  $imgs.children().last()  );
				$imgs.css("left","-200vw");
			});
		}
	}
	
	//팝업 (협력사 이미지 클릭)
	$("#partner>a").click( () =>$("#black").fadeIn()  );

	//팝업 버튼 클릭시 닫힘
	$("#black button").click( () => $("#black").fadeOut() );
	
});/////////끝