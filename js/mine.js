game.Mine = function(index) {
	// create a box geometry;
	// this shape will be duplicated to create the mine
	this.geom = new THREE.BoxGeometry(60,60,60);
	
	// create a simple red material
	this.mat = new THREE.MeshPhongMaterial({
		color: game.colors.red,  
	});
	
	this.mesh = new THREE.Mesh(this.geom, this.mat);

	// scale the box randomly
	var s = 0.1 + Math.random() * 0.9;
	this.mesh.scale.set(s,s,s);

	this.mesh.castShadow = true;
	this.mesh.receiveShadow = true;

	// To distribute the mines consistently,
	// we need to place them according to a uniform angle
	var mineStepAngle = Math.PI*2 / index;

	// set the rotation and the position of each mine;
	// for that we use a bit of trigonometry
	// this is the final angle of the mine
	var a = mineStepAngle * index; 

	// this is the distance between the center of the axis and the mine itself
	var h = 600 + Math.random()*10; 

	// convert polar coordinates (angle, distance) into Cartesian coordinates (x, y)
	this.mesh.position.x = Math.cos(a)*h;
	this.mesh.position.y = Math.sin(a)*h;
	this.mesh.position.z = Math.floor(Math.random() * (200+1 - (-200))) + (-200);
};