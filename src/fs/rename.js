const fs = require('fs');
const {checkIfDirExists} = require('./utils');
const path = require('path');

const rename = async () => {
    const fileToRename = 'wrongFilename.txt';
    const fileNameNew = 'properFilename.md';
    const fileToRenamePath = path.join(__dirname, '/files/', fileToRename);
    const fileRenamedPath = path.join(__dirname, '/files/', fileNameNew);

    const [
        fileToRenameExists,
        fileFinalExists
    ] = await Promise.all([
        checkIfDirExists(fileToRenamePath),
        checkIfDirExists(fileRenamedPath)
    ]);

    if (!fileToRenameExists || fileFinalExists) {
        throw new Error('FS Operation failed');
    }

    await fs.renameSync(fileToRenamePath, fileRenamedPath);
    // Write your code here 
};

rename();