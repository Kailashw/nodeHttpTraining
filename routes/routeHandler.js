var { userRoute } = require('./UserRoute');
var { productRoute } = require('./ProductRoute');

function routeHandler(req) {
    const path = req.url.split("/")[1].toLowerCase()

    switch (path) {
        case 'favicon.ico':
            break;
        case 'users':
                userRoute(req);
            break;
        case 'products':
                productRoute(req);
            break;

        default:
            console.log(`route not found!!`);
            break;
    }
    console.log(`I am serving http://${req.headers.host}${req.url}`);
}

module.exports.route = routeHandler;