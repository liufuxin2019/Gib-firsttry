var socket;

function setup(){
	createCanvas(500, 500);
	background(51);

	socket = io.connect('');
	socket.on('mouse', newDrawing);

}

function newDrawing(data){
	noStroke();
	fill(255,0,100);
	ellipse(data.x, data.y, 30, 30);
}

function mouseDragged(){
	console.log('Sending: ' + mouseX + ',' + mouseY);

	var data ={
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data);

	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 30, 30);
}

