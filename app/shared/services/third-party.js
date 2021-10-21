'use strict'

let fork = require('child_process').fork;
let childProcess = fork(__dirname + './../services/login-validation');

module.exports = () =>{

    return new Promise( (resolve, reject)=>{
        childProcess.on('message', function(data) {
                resolve(data)
        });
        childProcess.send({});
    })
}