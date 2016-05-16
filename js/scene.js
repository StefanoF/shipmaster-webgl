game.Scene = function() {
	// Create the scene
	this.scene = new THREE.Scene();

	// Add a fog effect to the scene; same color as the
	// background color used in the style sheet
	this.scene.fog = new THREE.Fog(game.colors.fog, 100, 950);
	
};
