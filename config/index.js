import path from 'path';
const config = new Map();

config.set('webpack_host', 'localhost');
config.set('webpack_port', process.env.PORT || 3000);
config.set('env', process.env.NODE_ENV || 'development');

config.set('dir_src',  'src');
config.set('dir_dist', 'dist');
config.set('path_project', path.resolve(__dirname, '../'));

config.set('vendor_dependencies', [
    'react',
    'react-redux',
    'react-router',
    'redux'
]);


const paths = (() => {
  const base    = [config.get('path_project')],
        resolve = path.resolve;

  const project = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    project : project,
    src     : project.bind(null, config.get('dir_src')),
    dist    : project.bind(null, config.get('dir_dist'))
  };
})();

config.set('utils_paths', paths);

export default config;