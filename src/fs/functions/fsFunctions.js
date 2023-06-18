const fs = require('fs');
const path = require('path');
const {checkIfDirExists} = require('../utils/index');

const createFile = async (fileDir, fileText) => {
    if (await checkIfDirExists(fileDir)) {
        throw new Error('FS Operation failed');
    }

    fs.writeFileSync(fileDir, fileText);
};

const copyDirectory = async (srcDir, distDir) => {
    if (
        !await checkIfDirExists(srcDir) ||
        await checkIfDirExists(distDir)
    ) {
        throw new Error('FS Operation failed');
    }

    let exists = fs.existsSync(srcDir);
    let stats = exists && fs.statSync(srcDir);
    let isDirectory = exists & stats.isDirectory();

    if (isDirectory) {
        fs.mkdirSync(distDir);
        fs.readdirSync(srcDir).forEach((childItemName) => {
            copyDirectory(path.join(srcDir, childItemName), path.join(distDir, childItemName));
        });
    } else {
        fs.copyFileSync(srcDir, distDir);
    }
};

module.exports = {
    createFile,
    copyDirectory
}