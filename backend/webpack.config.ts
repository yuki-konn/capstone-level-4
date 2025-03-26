import { Configuration } from "webpack";
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
} as Configuration;
