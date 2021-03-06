import path from 'path';
import fs from 'fs';

const config = new Map();

config.set('webpack_protocal', 'http');
config.set('webpack_host', 'localhost');
config.set('webpack_port', process.env.PORT || 3000);
config.set('env', process.env.NODE_ENV || 'development');

config.set('dir_src',  'src');
config.set('dir_dist', 'dist');
config.set('path_project', path.resolve(__dirname, '../'));

config.set('vendor_dependencies', [
    'react',
    'react-dom',
    'react-router',
    'react-redux',
    'redux',
    'redux-thunk'
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

config.set('common_dependencies', () => {
  var getFiles = (dirPath) => {
    var targetDirPath = paths.project(config.get('dir_src'), dirPath);
    var files = fs.readdirSync(targetDirPath).filter((file) => {
        return file !== '.' || file !== '..';
    }).map((file) => {
        return path.join(targetDirPath, file);
    });
    return files;
  }
  var utilFiles = getFiles('utils');
  var serviceFiles = getFiles('services');
  return [...utilFiles, ...serviceFiles];
}());

export default config;