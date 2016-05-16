game.Renderer = function() {
	// Create the renderer
	this.renderer = new THREE.WebGLRenderer({ 
		// Allow transparency to show the gradient background
		// we defined in the CSS
		alpha: true,
		antialias: true 
	});

	// Define the size of the renderer; in this case,
	// it will fill the entire screen
	this.renderer.setSize(game.WIDTH, game.HEIGHT);
	
	// Enable shadow rendering
	this.renderer.shadowMap.enabled = true;

	// Add the DOM element of the renderer to the 
	// container we created in the HTML
	this.container = document.getElementById('world');
	this.container.appendChild(this.renderer.domElement);
};