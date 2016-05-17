game.Boat = function() {
	// create the box of the boat
	this.geom = new THREE.BoxGeometry( 200, 30, 80 );
	
	// create the material
	// with brown colour and flat shading
	this.mat = new THREE.MeshPhongMaterial({
		color: game.colors.brown,
		shading:THREE.FlatShading,
	});

	// create a mesh using our geometry and material
	this.mesh = new THREE.Mesh(this.geom, this.mat);

	// set specific properties for the mesh
	this.mesh.receiveShadow = true; 
	this.mesh.position.z = -300;

	// add the mesh to the scene
	scene.add(this.mesh);

	var boatRotation = true;
	this.rotation = function() {
		// rotate the boat up and down
		if(boatRotation){
			this.mesh.rotation.z -= 0.006;
		}else{
			this.mesh.rotation.z += 0.004;
		}

		if(this.mesh.rotation.z < -0.05 || 
			 this.mesh.rotation.z > 0.18){
			boatRotation = !boatRotation;
		}
	};

	this.mineHolder = function() {
		// collision detection
		// remove the mine if there is a collision
		var originPoint = this.mesh.position.clone();
		var verticesLenght = this.mesh.geometry.vertices.length;

		for (var vertexIndex = 0; vertexIndex < verticesLenght; vertexIndex++){
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

	this.update = function() {
		// Change boat position 
		// based on horizontal mouse movement
		this.mesh.position.z = game.mousePos.x  * 200;

		this.rotation();
		this.mineHolder();
	};
};