
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("body.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
if(e.shiftKey == true && keyPressed == '80'){
block_image_width = block_image_width +10;
block_image_height = block_image_height +10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}
if(e.shiftKey == true && keyPressed == '77'){
block_image_width = block_image_width -10;
block_image_height = block_image_height -10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
	}
	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '87')
	{
		new_image('madera casita.png'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		new_image('madera.jpg'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		new_image('antorcha de rojo.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('azul.jpg'); 
		console.log("t");
	}
	if(keyPressed == '90')
	{
		new_image('dark_green.png'); 
		console.log("z");
	}
	if(keyPressed == '82')
	{
		new_image('light_green.png'); 
		console.log("r");
	}
	if(keyPressed == '9')
	{
		new_image('lobo.png'); 
		console.log("	");
	}
	if(keyPressed == '100')
	{
		new_image('puerta.png'); 
		console.log("d");
	}
	if(keyPressed == '107')
	{
		new_image('tierra.jpg'); 
		console.log("k");
	}
	if(keyPressed == '95')
	{
		new_image('unique.png'); 
		console.log("_");
	}
	if(keyPressed == '32')
	{
		new_image('vidrio.jpg'); 
		console.log(" ");
	}
}
function up(){
if(player_y>=0){
player_y=player_y-block_image_height;
canvas.remove(player_object);
player_update();
}
}
function down(){
if(player_y<=400){
player_y=player_y+block_image_height;
canvas.remove(player_object);
player_update();
}
}
function left(){
if(player_x>=0){
player_x=player_x-block_image_width;
canvas.remove(player_object);
player_update();
}
}
function right(){
if(player_x<=850){
player_x=player_x+block_image_width;
canvas.remove(player_object);
player_update();
}
}
