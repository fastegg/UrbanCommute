var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//var ExtractTextPlugin = require('extract-text-webpack-plugin')

var assetPath = '/public/js/';
var absolutePath = path.join(__dirname, 'build', assetPath);

//Used in the HTMLWebpackPlugin
const htmlOptions = {
  filename: '../index.html',
  template: 'client/templates/index.html',
  title: 'Urban Commute',
}

module.exports = {
  mode: "development",
  entry: "./client/lib/app.js",
  output: {
    path: path.resolve(__dirname, "../public/src"),
    filename: "app.[contenthash].js",
    publicPath: "src",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        //options: {
        //  presets: ["es2015"]
        //},
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
        query: {
          classIdPrefix: '[name]-[hash:8]__',
          propsMap: {
              fillRule: 'fill-rule',
              foo: 'bar'
          },
          xmlnsTest: /^xmlns.*$/
        }
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, "lib/node_modules"),
      path.resolve(__dirname, "lib"),
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used
  },
  plugins: [
    new HtmlWebpackPlugin(htmlOptions)
  ],
}
/*
module.exports = {
  devtool: 'source-map',
  entry: [
    //'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: absolutePath,
    filename: 'app.js',
    publicPath: assetPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),
    //new ExtractTextPlugin("bundle.css")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      // fonts and svg
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      {
        // images
        test: /\.(ico|jpe?g|png|gif)$/,
        loader: "file"
      },
      /*
      {
        // for some modules like foundation
        test: /\.scss$/,
        exclude: [/node_modules/], // sassLoader will include node_modules explicitly
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss!sass?sourceMap&outputStyle=expanded")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss")
      }
    ]
  },
  /*
  postcss: function(webpack) {
    return [
      autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "node_modules")]
  }
}
*/