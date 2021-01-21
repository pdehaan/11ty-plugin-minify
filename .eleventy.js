const htmlmin = require("./html/index");
const jsmin = require("./js/index");

module.exports = (eleventyConfig) => {
  htmlmin(eleventyConfig);
  jsmin(eleventyConfig);
};
