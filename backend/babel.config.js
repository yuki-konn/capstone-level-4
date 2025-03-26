export default {
  // Converts TS to JS
  presets: [
    "@babel/preset-env", // Converts new export/import syntax to old export/import syntax which is compatible with jest.
    "@babel/preset-typescript", // Converts TS to JS
  ],
};
