game.Sea = function() {
	
	// create the geometry (shape) of the cylinder;
	// the parameters are: 
	// radius top, radius bottom, height, number of segments on the radius, number of segments vertically
	this.geom = new THREE.CylinderGeometry(600,600,800,40,10);
	
	// rotate the geometry on the x axis
	this.geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
	
	// create the material 
	this.mat = new THREE.MeshPhongMaterial({
		color: game.colors.blue,
		transparent:true,
		opacity:0.6,
		shading:THREE.FlatShading,
	});

	// To create an object in Three.js, we have to create a mesh 
	// which is a combination of a geometry and some material
	this.mesh = new THREE.Mesh(this.geom, this.mat);

	// Allow the sea to receive shadows
	this.mesh.receiveShadow = true;

	
	this.mesh.position.y = -600;

	this.mines = [];
	for(var i = 0; i<game.MAX_MINES; i++){
		var mine = new game.Mine(i);
		this.mines.push(mine.mesh);
		this.mesh.add(mine.mesh);
	}	

	scene.add(this.mesh);
};