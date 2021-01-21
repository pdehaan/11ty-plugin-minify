const path = require("path");

const minify = require("html-minifier").minify;
const prettier = require("prettier");

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("htmlmin", async function(content="", outputPath="") {
    const extname = path.extname(outputPath).toLowerCase();
    switch (extname) {
      case ".html":
        if (process.env.NODE_ENV === "production") {
          // Return minified content.
          return minify(content, {
            removeComments: true,
            collapseWhitespace: true,
          });
        }
        // Return prettified (unminified) content.
        return prettier.format(content, { parser: "html" });
    }
    // Not an HTML file, return raw content.
    return content;
  });
};