game.Cloud = function() {
	// Create an empty container that will hold the different parts of the cloud
	this.mesh = new THREE.Object3D();
	
	// create a sphere geometry;
	// this shape will be duplicated to create the cloud
	this.geom = new THREE.SphereGeometry(20,20,20);
	
	// create a material; a simple white material will do the trick
	this.mat = new THREE.MeshPhongMaterial({
		color: game.colors.white,  
	});
	
	// duplicate the geometry a random number of times
	var nBlocs = 3+Math.floor(Math.random()*3);
	for (var i=0; i<nBlocs; i++ ){
		// create the mesh by cloning the geometry
		var m = new THREE.Mesh(this.geom, this.mat); 
		
		// set the position each sphere randomly
		m.position.x = i*15;
		m.position.y = Math.random()*10;
		m.position.z = Math.random()*10;

		// set the rotation of each sphere randomly
		m.rotation.z = Math.random()*Math.PI*2;
		m.rotation.y = Math.random()*Math.PI*2;
		
		// set the size of the sphere randomly
		var s = .1 + Math.random()*.9;
		m.scale.set(s,s,s);
		
		// allow each sphere to cast and to receive shadows
		m.castShadow = true;
		m.receiveShadow = true;
		
		// add the sphere to the container we first created
		this.mesh.add(m);
	} 
}