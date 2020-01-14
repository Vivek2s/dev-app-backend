'use strict';

const preload = require('../express/preload')

module.exports = {
    
    cmdparser: require('./cmdparser'),

    preloadAPIFiles (versions) {
    	versions.forEach(version => preload(version));
	}
}