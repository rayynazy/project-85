//Create a reference for canvas 
canvas = document.getElementById("mycan");
ctx = canvas.getContext("2d")

//Give specific height and width to the car image
green_car_width= 75;
green_car_height= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
green_car_X = 5;
green_car_Y = 225; 


	//upload car, and background images on the canvas.
	function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;


greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;

	}


function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);  

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag, green_car_X, green_car_Y, green_car_width, green_car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
		
		
}

function up()
{
	//Define function to move the car upward
} if(green_car_Y>=0);
   green_car_Y = green_car_Y - 10;
  console.log("When up arrow is pressed, x ="+ green_car_X + " | y = "+ green_car_Y);
  uploadBackground();
  uploadgreencar();

function down()
{
	//Define function to move the car downward
	if(green_car_Y<=0);
	green_car_Y = green_car_Y + 10;
   console.log("When down arrow is pressed, x ="+ green_c             ar_X + " | y = "+ green_car_Y);
   uploadBackground();
   uploadgreencar();
}

function left()
{
	//Define function to move the car left side
	if(green_car_X>=0);
	green_car_X = green_car_X - 10;
   console.log("When left arrow is pressed, x ="+ green_car_X + " | y = "+ green_car_Y);
   uploadBackground();
   uploadgreencar();

}

function right()
{
	//Define function to move the car right side

	if(green_car_X<=0);
	green_car_X = green_car_X + 10;
   console.log("When right arrow is pressed, x ="+ green_car_X + " | y = "+ green_car_Y);
   uploadBackground();
   uploadgreencar();

}
