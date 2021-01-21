const path = require("path");

module.exports = {
  extname(filename) {
    return path.extname(filename).toLowerCase();
  }
};
