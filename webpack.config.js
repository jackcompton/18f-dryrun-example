// Common webpack configuration used by webpack.hot.config and webpack.rails.config.

var path = require("path");

var config = {
  context: __dirname, // the project dir
  entry: [ "./app/assets/javascripts/entry.js" ],
  // entry: [ "./app/assets/javascripts/components/QueryBuilder/QueryPage.js.jsx" ],
  //entry: [ "./webpack/assets/javascripts/components/QueryBuilder/QueryPage.js.jsx" ],
  // In case you wanted to load jQuery from the CDN, this is how you would do it:
  externals: {
    // react: 'React'
  },
  resolve: {
    root: [path.join(__dirname, "scripts"),
           path.join(__dirname, "app", "assets", "javascripts"),
           path.join(__dirname, "app", "assets", "stylesheets"),
           path.join(__dirname, "node_modules")],
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".js.jsx", ".scss", ".css", "config.js"]
  },
  module: {
    loaders: [
      //{ test: /\.jsx$/, loaders: ["es6", "jsx?harmony"] },
      { test: /\.jsx?$/, loader: "jsx?harmony" },
      // Next 2 lines expose jQuery and $ to any JavaScript files loaded after webpack-bundle.js
      // in the Rails Asset Pipeline. Thus, load this one prior.
      //{ test: require.resolve("jquery"), loader: "expose?jQuery" },
      //{ test: require.resolve("jquery"), loader: "expose?$" }
    ]
  },

  output: { 
    filename: "webpack-bundle.js",
    path: path.join(__dirname, "app", "assets", "javascripts")
  },
};

module.exports = config;

