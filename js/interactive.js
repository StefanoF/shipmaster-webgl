game.Interactive = function() {
	document.addEventListener('mousemove', game.handleMouseMove, false);
	document.addEventListener('mousedown', game.handleMouseDown, false);

	// Listen to the screen: if the user resizes it
	// we have to update the camera and the renderer size
	window.addEventListener('resize', game.handleWindowResize, false);

};

game.handleMouseMove = function(event) {
	var tx = -1 + (event.clientX / game.WIDTH)*2;
	var ty = 1 - (event.clientY / game.HEIGHT)*2;
	game.mousePos = {
		x:tx, 
		y:ty
	};
};

game.handleMouseDown = function(event){
	//console.log('mouse down');
};

game.handleWindowResize = function() {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};