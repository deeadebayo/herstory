const { src, dest, task } = require('gulp'),
	{ rawDir, serveDir } = require('../variables__directory.js');

function netlify() {
	return src(rawDir.netlify).pipe(dest(serveDir.html));
}

task('netlifyTask', netlify);
