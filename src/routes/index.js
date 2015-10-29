const routeConfig = [{
    path: '/',
    getComponent (location, callback) {
        require.ensure(['../views/Home.js'], function (require) {
            callback(null, require('../views/Home.js'))
        });
    }
}];

export default routeConfig;