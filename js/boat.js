function Boat () {
	
	var geom = new THREE.BoxGeometry( 200, 30, 80 );
	
	// create the material 
	var mat = new THREE.MeshPhongMaterial({
		color:Colors.brown,
		shading:THREE.FlatShading,
	});

	this.mesh = new THREE.Mesh(geom, mat);

	this.mesh.receiveShadow = true; 
}

var boat;
function createBoat() {
	boat = new Boat();
	boat.mesh.position.z = -300;
	scene.add(boat.mesh);
}

var boatRotation = true;
function boatRotationLoop(){
	if(boatRotation){
		//vado su
		Math.random()
		boat.mesh.rotation.z -= .006;

		if(boat.mesh.rotation.z < -0.05){
			boatRotation = false;
		}
	}

	if(!boatRotation){
		//vado su
		boat.mesh.rotation.z += .004 ;

		if(boat.mesh.rotation.z > 0.18){
			boatRotation = true;
		}
	}


	mineHolder();
}

function updateBoat(){
	// Change boat position based on mouse movement
	boat.mesh.position.z = mousePos.x  * 200;
}

function mineHolder(){
	//collision detection
	var originPoint = boat.mesh.position.clone();
	for (var vertexIndex = 0; vertexIndex < boat.mesh.geometry.vertices.length; vertexIndex++)
  {
    var localVertex = boat.mesh.geometry.vertices[vertexIndex].clone();
    var globalVertex = localVertex.applyMatrix4( boat.mesh.matrix );
    var directionVector = globalVertex.sub( boat.mesh.position );
    var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
    var collisionResults = ray.intersectObjects( [mine.mesh] );
    if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() )
    {
       console.log('hit');
    }
  }
}