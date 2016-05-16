var game = {};
game.MAX_MINES = 5;

// Get the width and the height of the screen,
// use them to set up the aspect ratio of the camera 
// and the size of the renderer.
game.HEIGHT = window.innerHeight;
game.WIDTH = window.innerWidth;

game.NCLOUDS = 20;

game.colors = {
	red:0xf25346,
	white:0xd8d0d1,
	brown:0x59332e,
	pink:0xF5986E,
	brownDark:0x23190f,
	blue:0x68c3c0,
	fog:0xf7d9aa
};

game.mousePos = {
	x:0, 
	y:0
};