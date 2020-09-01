$(document).ready(function(){

	$("#infvis").hover(function(){
		$("#infvis").css("cursor","pointer");
	});
	$("#about").hover(function(){
		$("#about").css("cursor","pointer");
	});
	$("#portfolio").hover(function(){
		$("#portfolio").css("cursor","pointer");
	});
	$("#contact").hover(function(){
		$("#contact").css("cursor","pointer");
	});
	$("#shop").hover(function(){
		$("#shop").css("cursor","pointer");
	});
	var video = $('.background');

	var player = new Vimeo.Player(video);

	player.ready().then(function() {
		player.setVolume(0);
	});

	$('#about').click(function () { 
		window.location.href = "../FinalProject/about.html";
	});

	$("#contact").click(function(){
		window.location.href = "../FinalProject/contact.html";
	});
});
