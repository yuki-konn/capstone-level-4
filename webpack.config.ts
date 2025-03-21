import { Configuration } from "webpack";

export default {
  // MODULES ARE FILES THAT ARE IMPORTED.
  module: {
    // RULES ARE LIST OF WAYS TO PROCESS THE MODULES.
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/, // COMPILE JAVASCRIPT MODULES
        exclude: /\.(scss|css|otf|ttf|json)/, // DON'T COMPILE STYLE MODULE.
        use: "babel-loader", // USE THIS LOADER TO COMPILE ALL OTHER MODULES.
      },
      {
        // - style-loader: Takes CSS imported to JS files,
        //   and injects them with style tags that go inside the head element in DOM.
        // - css-loader: Takes CSS file and returns CSS file with imports and url(...)
        // - sass-loader: loads SASS files and compiles it to CSS.
        test: /\.(scss|css)/, // COMPILE STYLE MODULES.
        use: ["style-loader", "css-loader", "sass-loader"], // USE THESE LOADERS TO COMPILE STYLE MODULES.
      },
      {
        // CONFIGURES WEBPACK TO ALLOW THIS SYNTAX
        // import banner1 from "./assets/images/banner1.jpg";
        test: /\.(jpg|png|mp4)/, // EXAMINE ASSET FILES
        type: "asset/resource", // SPECIFY THAT THESE FILES ARE ASSETS OR RESOURCES. USE THIS BUILT-IN FEATURE TO HANDLE ASSETS
      },
    ],
  },
  // watch: true, // WATCH FOR WEBPACK CODE CHANGES. PRESS CTRL+C TO CANCEL.
  // watchOptions: { aggregateTimeout: 3000 }, // GIVES WEBPACK MORE TIME TO COMPILE.
  mode: "development", // ENABLES THE DEBUGGER.
  // THE SOURCE MAP PROVIDES INSTRUCTIONS TO CONVERT MANGLED CODE BACK TO THE ORIGINAL CODE.
  devtool: "source-map", // ENABLES DEBUGGER CODE TO MATCH ACTUAL CODE.
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] }, // WEBPACK WILL AUTOMATICALLY LOOK FOR JS AND JSX FILES WHEN EXTENSIONS AREN'T SPECIFIED.
  devServer: {
    // Webpack dev server for SPAs
    historyApiFallback: true, // Provides support for SPA's by loading in index.html on 404 errors.
    // open: true, // Automatically opens browser tab when starting webpack dev server.
  },
} as Configuration;
