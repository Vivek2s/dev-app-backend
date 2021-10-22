var net = require('net'),
    http = require('http'),
    events = require('events');

var HTTPParser = process.binding('http_parser').HTTPParser;


function freeParser(parser){
    if (parser) {
        parser.onIncoming = null;
        parser.socket = null;
        http.parsers.free(parser);
        parser = null;
    }
};


function parse(socket){
    var emitter = new events.EventEmitter();
    var parser = http.parsers.alloc();

    parser.reinitialize(HTTPParser.REQUEST);
    parser.socket = socket;
    parser.maxHeaderPairs = 2000;

    parser.onIncoming = function(req){
        emitter.emit('request', req);
    };

    socket.on('data', function(buffer){
        var ret = parser.execute(buffer, 0, buffer.length);
        if(ret instanceof Error){
            emitter.emit('error');

            freeParser(parser);
        }
    });

    socket.once('close', function(){
        freeParser(parser);
    });

    return emitter;
};


net.createServer(function(socket){
    console.log('..................set.......')
    var parser = parse(socket);

    parser.on('request', function(req){
        // Got parsed HTTP object
    });

    parser.once('error', function(){
        // Not HTTP data
    });
}).listen(999);
