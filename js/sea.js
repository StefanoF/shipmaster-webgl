// First let's define a Sea object :
function Sea () {
	
	// create the geometry (shape) of the cylinder;
	// the parameters are: 
	// radius top, radius bottom, height, number of segments on the radius, number of segments vertically
	var geom = new THREE.CylinderGeometry(600,600,800,40,10);
	
	// rotate the geometry on the x axis
	geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
	
	// create the material 
	var mat = new THREE.MeshPhongMaterial({
		color:Colors.blue,
		transparent:true,
		opacity:.6,
		shading:THREE.FlatShading,
	});

	// To create an object in Three.js, we have to create a mesh 
	// which is a combination of a geometry and some material
	this.mesh = new THREE.Mesh(geom, mat);

	// Allow the sea to receive shadows
	this.mesh.receiveShadow = true; 

	mine = new Mine();
	mine.mesh.position.x = Math.random()*10;
	mine.mesh.position.y = Math.random()*10 + 600;
	mine.mesh.position.z = Math.random()*200;
	this.mesh.add(mine.mesh);
}

var sea;
function createSea(){
	sea = new Sea();
	sea.mesh.position.y = -600;
	scene.add(sea.mesh);
}