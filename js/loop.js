function loop() {
	// Rotate the propeller, the sea and the sky
	// airplane.propeller.rotation.x += 0.3;
	sea.mesh.rotation.z += .006; // .006
	sky.mesh.rotation.z += .008;

	boatRotationLoop();
	updateBoat();

	// render the scene
	renderer.render(scene, camera);

	// call the loop function again
	requestAnimationFrame(loop);
}