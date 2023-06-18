const fs = require('fs');

const checkIfDirExists = (fileDir) => {
  return fs.promises.access(fileDir, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false)
}

module.exports = checkIfDirExists;