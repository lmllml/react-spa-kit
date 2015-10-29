const routeConfig = {
	path: '/',
    getComponent (location, callback) {
        require.ensure([], function (require) {
            callback(null, require('../views/Home.js'))
        });
    }
};

export default routeConfig;