module.exports = {

  entry: "./src/App.js",

  output: {

    filename: "bundle.js",

  },

  //what is bundle.js doing?

  module: {

    loaders: [

      {

        test: [/\.jsx?$/, /\.js?$/],

        //what problem is this solving?

        //what is regex?

        exclude: /(node_modules)/,

        loader: 'babel',

        query: {

          presets: ['es2015', 'react']

          //transpiling & compilation

        }

      }

    ]

  },

  devtool: 'source-map'

};