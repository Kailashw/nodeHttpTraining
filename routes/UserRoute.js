function userRouteHandler(req) {
    console.log(`inside ${req.method} of userRoute`);
}

module.exports.userRoute = userRouteHandler;