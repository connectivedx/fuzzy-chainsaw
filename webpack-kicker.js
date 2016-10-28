// Runs the webpack dev server and respawns 
// the server when pages,components, and tags
// are created or destroyed.
//
// This is required because the webpack 
// static site generator plugin requires a 
// static list of paths

const spawn = require('child_process').spawn;
const chokidar = require('chokidar');
const pkg = require('./package.json');
const script = pkg.scripts['watch-script'];
const debounce = require('lodash.debounce');

let parts = script.split(' ') ;
const cmd = parts.shift();
const options = parts;

let webpack;

const respawn = debounce(() => {
	console.log('RESPAWN');
	console.log('RESPAWN');
	console.log('RESPAWN');
	console.log('RESPAWN');
	console.log('RESPAWN');
	console.log('RESPAWN');
	if (webpack) webpack.kill();
	webpack = spawn(cmd, options, { stdio: 'inherit' });
}, 250);

const watcher =
	chokidar
		.watch('./source', { ignoreInitial: true })
		.on('ready', () => respawn())
		.on('addDir', () => respawn())
		.on('unlinkDir', () => respawn());