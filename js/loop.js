game.Loop = function () {
	sea.mesh.rotation.z += 0.006;
	sky.mesh.rotation.z += 0.008;

	boat.update();

	renderer.render(scene, camera);

	// call the loop function again
	requestAnimationFrame(game.Loop);
};