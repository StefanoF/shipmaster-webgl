function interactive() {
	document.addEventListener('mousemove', handleMouseMove, false);

	document.addEventListener('mousedown', handleMouseDown, false);
}

var mousePos = {
	x:0, 
	y:0
};

function handleMouseMove(event) {
	// here we are converting the mouse position value received 
	// to a normalized value varying between -1 and 1;
	// this is the formula for the horizontal axis:
	
	var tx = -1 + (event.clientX / WIDTH)*2;

	// for the vertical axis, we need to inverse the formula 
	// because the 2D y-axis goes the opposite direction of the 3D y-axis
	
	var ty = 1 - (event.clientY / HEIGHT)*2;
	mousePos = {
		x:tx, 
		y:ty
	};
}

function handleMouseDown(event){
	// create mine when create a sea
	//createMine(sea.mesh);
	console.log('mouse down');
}