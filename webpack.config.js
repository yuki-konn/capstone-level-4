export default {
  // MODULES ARE FILES THAT ARE IMPORTED.
  module: {
    // RULES ARE LIST OF WAYS TO PROCESS THE MODULES.
    rules: [
      {
        test: /\.js/, // COMPILE JAVASCRIPT MODULES
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
  watch: true, // WATCH FOR WEBPACK CODE CHANGES. PRESS CTRL+C TO CANCEL.
  watchOptions: { aggregateTimeout: 3000 }, // GIVES WEBPACK MORE TIME TO COMPILE.
  mode: "development", // ENABLES THE DEBUGGER.
  devtool: "source-map", // ENABLES DEBUGGER CODE TO MATCH ACTUAL CODE.
  // THE SOURCE MAP PROVIDES INSTRUCTIONS TO CONVERT MANGLED CODE BACK TO THE ORIGINAL CODE.
};
