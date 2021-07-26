var http = require('http');

function startServer(route, port){
    function requestHandler(req,res) {
        route(req);
        res.end('Hello World !!')
    }
    
    app = http.createServer(requestHandler)
    
    app.listen(port, (PORT=port)=>{
        console.log(`listening at http://localhost:${PORT}`)
    })
}

module.exports.startServer = startServer;

