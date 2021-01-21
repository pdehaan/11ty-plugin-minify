const lib = require("../lib")

const minify = require("uglify-js").minify;
const prettier = require("prettier");

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("jsmin", async function(content="", outputPath="") {
    const extname = lib.extname(outputPath);
    switch (extname) {
      case ".js":
        if (lib.isProduction) {
          // Return minified content.
          const minifyOpts = {
            warnings: true,
            output: {
              beautify: false
            }
          };
          const result = minify({
            [outputPath]: content
          }, minifyOpts);

          if (result.warnings) {
            console.warn(result.warnings.join("\n"));
          }

          if (result.error) {
            // Something is horribly wrong, log error and output unminified code.
            console.error(result.error);
            process.exitCode = 1;
            return content;
          }
          return result.code;
        }
        // Return prettified (unminified) content.
        return prettier.format(content, { parser: "babel" });
    }
    // Not a JavaScript file, return raw content.
    return content;
  });
};
