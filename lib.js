const path = require("path");

module.exports = {
  extname(filename) {
    return path.extname(filename).toLowerCase();
  },
  isProduction() {
    return process.env.NODE_ENV === "production" || process.env.ELEVENTY_ENV === "production";
  }
};
