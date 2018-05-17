var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public');

const common = {
  //entry: `${SRC_DIR}/components/PhotoGallery.jsx`,
  context : path.join(__dirname, '/client/src/components'),
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const client = {
  entry: './client.js',
  output: {
    path: path.join(__dirname, '/client/public'),
    filename: 'app.js',
  }
}

const server = {
  entry: './server.js',
  output: {
    path: path.join(__dirname, '/client/public'),
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module',
  }
}

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server),
]
