game.Loop = function () {
	sea.mesh.rotation.z += 0.006;
	sky.mesh.rotation.z += 0.008;

	boat.boatRotationLoop();
	boat.updateBoat();

	renderer.render(scene, camera);

	// call the loop function again
	requestAnimationFrame(game.Loop);
};