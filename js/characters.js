var IMG_PATH = "img/char/";

function Character(japanese_name, english_name, image, options) {
	this.japanese_name = japanese_name;
	this.english_name = english_name;
	this.image = image;
	this.options = options || {};
}

var emptyManager = { animate: function() {} };

var characterManager = {
	
	1: new Character('モンキー·D·ルフィ', 'MONKEY·D·LUFFY', 'luffy.png'),
	2: new Character('ロロノア·ゾロ', 'RORONOA·ZORO', 'zoro.png'),
	3: new Character('ナミ', 'NAMI', 'nami.png'),
	4: new Character('ウソップ', 'USOPP', 'usopp.png'),
	5: new Character('サンジ', 'SANJI', 'sanji.png'),
	6: new Character('トニートニー·チョッパー', 'TONYTONY·CHOPPER', 'chopper.png'),
	7: new Character('ニコ·ロビン', 'NICO·ROBIN', 'robin.png'),
	8: new Character('フランキー', 'FRANKY', 'franky.png', { left: 160 }),
	9: new Character('ブルック', 'BROOK', 'brook.png'),
	10: new Character('ゼット', 'Z', 'z.png'),
	11: new Character('アイン', 'AIN', 'ain.png'),
	12: new Character('ビンズ', 'BINS', 'binz.png'),

	currentCharacter: 1,

	getCharacter: function()
	{
		return this[this.currentCharacter];
	},

	setID: function(id)
	{
		if(this.hasOwnProperty(id)) {
			this.currentCharacter = parseInt(id,10);
		}

		return this;
	},

	setNext: function()
	{
		var currentChar = this.currentCharacter;

		if(this.hasOwnProperty(currentChar+1)) {
			this.currentCharacter = currentChar+1;
		} else {
			return emptyManager;
		}

		return this;
	},

	setPrev: function()
	{
		var currentChar = this.currentCharacter;

		if(this.hasOwnProperty(currentChar-1)) {
			this.currentCharacter = currentChar-1;
		}
		else {
			return emptyManager;
		}

		return this;
	},

	isLast: function()
	{
		return !this.hasOwnProperty( this.currentCharacter + 1);
	},

	animate: function()
	{
		var $char = $("#char"), character = this.getCharacter();

		var animateText = function(character)
		{
			$('#japanese_name, #english_name').stop().removeAttr('style');

			$('#japanese_name').text(character.japanese_name).animate({ width: 561 }, 1000, function() {
				$('#english_name').text(character.english_name).animate({ width: 500 }, 1000);
			});
		};

		$('#japanese_name, #english_name').hide();

		$char.stop().removeAttr('style').attr('src', IMG_PATH + character.image);

		if( character.options.left !== undefined ) {
			$char.animate({ left: character.options.left }, 1000, function() {
				animateText(character);
			});
		}
		else {
			$char.animate({ left: 220 }, 1000, function() {
				animateText(character);
			});
		}
	}
};