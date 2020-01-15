"use strict";

const fs = require('fs');
const join = require('path').join;
const env = require('../environments');
const { logger } = require('../logger');

module.exports = (version) => {
	logger.info(`Preloading api files for api ${version}`);
	
	let resourceFolderPath = `${env.ROOT_DIR}/app/${env.RESOURCE_FOLDER}/${version}`;
	fs.readdirSync(resourceFolderPath)
		.forEach( (folder)=>{
			const resourcePath = join(resourceFolderPath, folder);

			// Bootstrap schemas
			fs.readdirSync(resourcePath)
			.filter(file => ~file.search(/^[^\.].*-schema\.js$/))
			.forEach(file => require(join(resourcePath, file)));
		
			// Bootstrap models
			fs.readdirSync(resourcePath)
			.filter(file => ~file.search(/^[^\.].*-model\.js$/))
			.forEach(file => require(join(resourcePath, file)));

			// Register events
			// fs.readdirSync(resourcePath)
			// .filter(file => ~file.search(/^[^\.].*\.js$/))
			// .forEach(file => require(join(events, file)));	
	})
};