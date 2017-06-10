const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const PORT = 3000;
const STATIC_BUILD_PATH = './static';
const ASSETS_FOLDER_NAME = 'assets';

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => {
      return [autoprefixer];
    }
  }
}

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMapContents: true,
    sourceMap: true,
    root: sourcePath
  }
};

const sassLoader = {
  loader: 'sass-loader',
  options: {
    root: sourcePath,
    sourceMap: true
  }
};

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new ExtractTextPlugin('styles.css'),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => {
      // this assumes your vendor imports exist in the node_modules directory
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
];

module.exports = () => {
  return {
    devtool: 'source-map',
    context: __dirname,
    entry: {
      main: './src/index.js'
    },
    output: {
      filename: '[name]-bundle.js',
      path: path.join(__dirname, STATIC_BUILD_PATH)
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [sourcePath],
          exclude: ['node_modules']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', cssLoader, sassLoader, postCssLoader]
        },
        {
          test: /\.(png|jpg|gif|jpeg|svg|woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: 'url-loader',
              query: {
                limit: 1000,
                name: `${ASSETS_FOLDER_NAME}/[name].[ext]`
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', cssLoader, postCssLoader]
        }]
    },
    resolve: {
      modules: [
        sourcePath,
        'node_modules'
      ]
    },

    plugins,

    devServer: {
      contentBase: [sourcePath],
      historyApiFallback: true,
      port: PORT,
      compress: false,
      inline: true,
      hot: true,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: true,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      }
    }
  };
};
