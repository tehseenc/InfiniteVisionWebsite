$(document).ready(function(){
	//Changes the page back to main
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
	$("#infvis").click(function(){ //redirect on click
		window.location.href = "../FinalProject/main.html";
	});
	$("#about").click(function(){
		window.location.href = "../FinalProject/about.html";
	});
});
