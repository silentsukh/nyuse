const path = require('path');
const CLIENT_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'public/dist');

const loaders = [{
    test: /\.js$/,
    include: CLIENT_DIR,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react'],
      plugins: ["transform-object-rest-spread"]
    }
}];

const aliases = {
  components: path.resolve(CLIENT_DIR, 'components'),
  reducers: path.resolve(CLIENT_DIR, 'reducers'),
  actions: path.resolve(CLIENT_DIR, 'actions'),
  containers: path.resolve(CLIENT_DIR, 'containers')
};

module.exports = [{
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    alias: aliases
  }
},
{
  name: 'server',
  target: 'node',
  context: CLIENT_DIR,
  entry: {
    app: 'containers/App.js'
  },
  output: {
    path: SERVER_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-09]+$/,
  module: {
    loaders: loaders
  },
  resolve: {
    alias: aliases
  }
}];