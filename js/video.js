$(document).ready(function(){

	interval1 = setInterval(function(){
		$('#bubble').animate({top: 390},1000,function(){
			$('#bubble').animate({top: 400},1000);
		});
	},2000);

	$('#video').magnificPopup({
		type: 'iframe',
	}).click(function(){
		$('#bubble').hide();
		clearInterval(interval1);
	});
	
});