var server = require('./routes/server')
var routeHandler = require('./routes/routeHandler')
const PORT = 8000

server.startServer(routeHandler.route, PORT);