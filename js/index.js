const lib = require("../lib")

// const minify = require("html-minifier").minify;
const prettier = require("prettier");

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("jsmin", async function(content="", outputPath="") {
    const extname = lib.extname(outputPath);
    switch (extname) {
      case ".js":
        if (process.env.NODE_ENV === "production") {
          // Return minified content.
          // TODO: to do this...
          return content;
        }
        // Return prettified (unminified) content.
        return prettier.format(content, { parser: "babel" });
    }
    // Not a JavaScript file, return raw content.
    return content;
  });
};
