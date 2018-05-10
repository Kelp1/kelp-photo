var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public');

console.log('webpack');

module.exports = {
  //entry: `${SRC_DIR}/components/PhotoGallery.jsx`,
  entry: `${SRC_DIR}/app-client.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    libraryTarget: 'var',
    // `library` determines the name of the global variable
    library: 'PhotoGallery',
  },
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