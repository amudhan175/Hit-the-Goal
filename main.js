canvas=new fabric.Canvas("myCanvas");
// Create canvas variable
ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800;
//Set initial positions for ball and hole images.


block_width = 5;
block_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_object=Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_object.set({
			top:hole_y,left:hole_x
		});
		canvas.add(hole_object);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
      ball_object=Img;
      ball_object.scaleToWidth(50);
	  ball_object.scaleToHeight(50);
	  ball_object.set({
		  top:ball_y,left:ball_x
	  });
	  canvas.add(ball_object);
	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And if coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById("myCanvas").style.borderColor="red";
		document.getElementById("hd3").innerHTML="You have hit the goal!!!!";
		
	}
	
	else{
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
		// Write a code to move ball upward.
		if(ball_y>=0){
			ball_y=ball_y-block_height;
			console.log("block height ="+block_height);
			console.log("up arrow is pressed x ="+ball_x+" ,y ="+ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y<=750){
			ball_y=ball_y+block_height;
			console.log("block height ="+block_height);
			console.log("down arrow is pressed x ="+ball_x+" ,y ="+ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			
				ball_x=ball_x-block_width;
				console.log("block width ="+block_width);
				console.log("left arrow is pressed x ="+ball_x+" ,y ="+ball_y);
				canvas.remove(ball_object);
				new_image();
			
		}
	}

	function right()
	{
		if(ball_x <=1150)
		{
			// Write a code to move ball right side.
			ball_x=ball_x+block_width;
				console.log("block width ="+block_width);
				console.log("right arrow is pressed x ="+ball_x+" ,y ="+ball_y);
				canvas.remove(ball_object);
				new_image();
		}
	}
	
}

