game.Boat = function() {
	
	this.geom = new THREE.BoxGeometry( 200, 30, 80 );
	
	// create the material 
	this.mat = new THREE.MeshPhongMaterial({
		color: game.colors.brown,
		shading:THREE.FlatShading,
	});

	this.mesh = new THREE.Mesh(this.geom, this.mat);

	this.mesh.receiveShadow = true; 

	this.mesh.position.z = -300;
	scene.add(this.mesh);

	var boatRotation = true;
	this.boatRotationLoop = function() {	
		if(boatRotation){
			this.mesh.rotation.z -= .006;

			if(this.mesh.rotation.z < -0.05){
				boatRotation = false;
			}
		}else{
			this.mesh.rotation.z += .004 ;

			if(this.mesh.rotation.z > 0.18){
				boatRotation = true;
			}
		}


		this.mineHolder();
	};

	this.mineHolder = function() {
		//collision detection
		var originPoint = this.mesh.position.clone();
		var verticesLenght = this.mesh.geometry.vertices.length;
		for (var vertexIndex = 0; vertexIndex < verticesLenght; vertexIndex++)
	  {
	    var localVertex = this.mesh.geometry.vertices[vertexIndex].clone();
	    var globalVertex = localVertex.applyMatrix4( this.mesh.matrix );
	    var directionVector = globalVertex.sub( this.mesh.position );
	    var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
	    var collisionResults = ray.intersectObjects( sea.mines );

	    if ( collisionResults.length > 0 && 
	    	collisionResults[0].distance < directionVector.length() ) {
	      sea.mesh.remove(collisionResults[0].object);
	    }
	  }
	};

	this.updateBoat = function() {
		// Change boat position based on mouse movement
		this.mesh.position.z = game.mousePos.x  * 200;
	};
};