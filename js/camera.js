game.Camera = function() {
	// Create the camera
	this.fieldOfView = 60;
	this.aspectRatio = game.WIDTH / game.HEIGHT;
	this.nearPlane = 1;
	this.farPlane = 10000;

	this.camera = new THREE.PerspectiveCamera(
		this.fieldOfView,
		this.aspectRatio,
		this.nearPlane,
		this.farPlane
	);

	// Set the position of the camera
	this.camera.position.x = 0;
	this.camera.position.z = 450;
	this.camera.position.y = 100;
};