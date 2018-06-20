// import our modules
var nodeStatic = require('node-static'); // used for serving static files
var http       = require('http'); // default node http server
var port       = 8080;

// create out file server config
var file = new nodeStatic.Server('bin',{ // annything in the 'bin' folder is served
    cache: 0,                            // no cache (only for testing)
    gzip: true                           // gzip our assets
});

// create our basic server
http.createServer(function(request, response){
    request.addListener('end', function(){
        file.serve(request, response); // any url asked for, just try and serve the file from /bin
    }).resume();
}).listen(port);