function productRouteHandler(req) {
    console.log(`inside ${req.method} of productRoute `);
}

module.exports.productRoute = productRouteHandler;