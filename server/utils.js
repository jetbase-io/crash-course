function setRoutes(app, routes) {
    routes = Array.isArray(routes) ? routes : [routes];

    routes.forEach(route => {
        app[route.method.toLowerCase()](route.url, (req, res) => {
            res.send(route.callback(req.query));
        })
    })
}

module.exports = {
    setRoutes
};