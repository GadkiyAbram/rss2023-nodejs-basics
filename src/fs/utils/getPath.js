const path = require("path");

const getPath = (fileName) => {
    return path.join(__dirname, '../files/', fileName);
};

module.exports = getPath;