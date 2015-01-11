$(document).ready(function(){
	characterManager.animate();

	$('.onepiece_area').click(function(){
		var id = $(this).attr('id');
		var character = characterManager.setID(id).animate();
	});

	$("#next").click(function(){
		characterManager.setNext().animate();
	});

	$('#back').click(function(){
		characterManager.setPrev().animate();
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 39) {
			characterManager.setNext().animate();
		}

		if(e.keyCode == 37) {
			characterManager.setPrev().animate();
		}
	});

	$("#autoplay input[type=checkbox]").click(function() {
		var _this = this;

		if( $(this).is(':checked') ) {

			intervalHandle = setInterval(function() {
				if(characterManager.isLast()) {
					clearInterval(intervalHandle);
					$(_this).attr('checked', false);
				}
				else {
					characterManager.setNext().animate();

				}

			}, 3000);

		} else {
			if(intervalHandle) {
				clearInterval(intervalHandle);
				$(this).attr('checked', false);
			}
		}
	});
});