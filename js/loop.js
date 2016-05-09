function loop() {
	sea.mesh.rotation.z += .006;
	sky.mesh.rotation.z += .008;

	boatRotationLoop();
	updateBoat();

	// render the scene
	renderer.render(scene, camera);

	// call the loop function again
	requestAnimationFrame(loop);
}