var fork = require('child_process').fork;
var example1 = fork(__dirname + './../bootstrap/child.js');

example1.on('message', function(response) {
  console.log(response, "..............");
});

example1.send({});
