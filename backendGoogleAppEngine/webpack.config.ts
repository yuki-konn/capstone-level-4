import { Configuration } from "webpack";
export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/, // Compile these files with babel-loader. '$' means check for js or ts at end of the string/filename
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
  externals: ["@xenova/transformers"], // Don't bundle these packages. Bundling will only bundle for your system and not all systems.
  externalsType: "commonjs-module", // Tells Webpasck to use the module syntax to import external packages/modules.
} as Configuration;
