const lib = require("../lib");

const minify = require("html-minifier").minify;
const prettier = require("prettier");

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("htmlmin", async function(content="", outputPath="") {
    const extname = lib.extname(outputPath);
    switch (extname) {
      case ".html":
        if (lib.isProduction) {
          // Return minified content.
          const minifyOpts = {
            removeComments: true,
            collapseWhitespace: true,
          };
          return minify(content, minifyOpts);
        }
        // Return prettified (unminified) content.
        return prettier.format(content, { parser: "html" });
    }
    // Not an HTML file, return raw content.
    return content;
  });
};
