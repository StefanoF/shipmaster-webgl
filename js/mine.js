function Mine(){
	// Create an empty container that will hold the different parts of the cloud
	this.mesh = new THREE.Object3D();
	
	// create a cube geometry;
	// this shape will be duplicated to create the cloud
	var geom = new THREE.BoxGeometry(60,60,60);
	
	// create a material; a simple white material will do the trick
	var mat = new THREE.MeshPhongMaterial({
		color:Colors.red,  
	});
	
	this.mesh = new THREE.Mesh(geom, mat);

	var s = .1 + Math.random()*.9;
	this.mesh.scale.set(s,s,s);

	this.mesh.castShadow = true;
	this.mesh.receiveShadow = true;
}

var mine;
function createMine() {
	mine = new Mine();
	mine.mesh.position.z = -300;
	scene.add(mine.mesh);
}