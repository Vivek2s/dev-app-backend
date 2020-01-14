"use strict";

const fs = require('fs');
var path = require('path');

const _err = require('../../app/shared/helpers/error.js');
const env = require('../environments');

const ACTIVE_APIS = env.ACTIVE_APIS.split(',');

ACTIVE_APIS.forEach(version => {
    let resourceFolderPath = `${env.ROOT_DIR}/app/${env.RESOURCE_FOLDER}`;
    fs.readdir(resourceFolderPath,(err, files)=>{
        if (err) {
            throw _err.createError(
                'API_RESOURCE_NOT_FOUND',
                `Resource ${env.RESOURCE_FOLDER} for the API requested not found`
            )
        }

        files.forEach(function (file, index) {

            let filesPath = path.join(resourceFolderPath, file);
            if(fs.lstatSync(filesPath).isDirectory()){
                if(!fs.existsSync(`${filesPath}/${version}`))
                    throw _err.createError(
                        'API_ROUTER_NOT_FOUND',
                        `Specified API ${version} does not have any routes configuration listed under routes/${version}`
                );
            }
        })
    })
});

module.exports = ACTIVE_APIS;