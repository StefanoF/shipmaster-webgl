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

var mines = [];
var nMinesCounter = 0;
function createMine(index) {

	mines[index] = new Mine();
	nMinesCounter++;

	// To distribute the clouds consistently,
	// we need to place them according to a uniform angle
	var mineStepAngle = Math.PI*2 / nMinesCounter;

	// set the rotation and the position of each cloud;
	// for that we use a bit of trigonometry
	// this is the final angle of the cloud
	var a = mineStepAngle * nMinesCounter; 

	// this is the distance between the center of the axis and the cloud itself
	var h = 600 + Math.random()*10; 

	// Trigonometry!!! I hope you remember what you've learned in Math :)
	// in case you don't: 
	// we are simply converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
	mines[index].mesh.position.y = Math.sin(a)*h;
	mines[index].mesh.position.x = Math.cos(a)*h;
	mines[index].mesh.position.z = Math.floor(Math.random() * (200+1 - (-200))) + (-200);

	return mines[index];
}