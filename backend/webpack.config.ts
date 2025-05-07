import { Configuration } from "webpack";
import Zip from "zip-webpack-plugin";

export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/, // Compile these files with babel-loader
        // exclude: /.(json)/, // Don't compile json files with babel-loader
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts"], // Automatically inserts file extensions in import statements
  },
  target: "node", // Bundles for nodeJS
  output: {
    filename: "index.js", // Outputs a bundle file with the file name as index.js (default is main.js)
    library: {
      type: "commonjs", // Prevents tree shaking of unused bundle exports. Indicates that the bundle is a library.
    },
  },
  plugins: [new Zip({ include: /^index.js$/ })], // zip-webpack-plugin zips the bundle files into one zip file in the dist folder. Then regular expression (regex) is looking for an exact file name match.
} as Configuration;
