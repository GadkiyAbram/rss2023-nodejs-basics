// const fs = require('fs');
// const {checkIfDirExists} = require('./utils');
// const path = require('path');

import {fileURLToPath} from 'url';
import path from 'path';
import {renameFile} from './functions/fsFunctions.js';
import {
    PROPER_FILE_NAME_TXT,
    WRONG_FILE_NAME_TXT
} from '../constants/fileNames.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    // const fileToRename = WRONG_FILE_NAME_TXT;
    // const fileNameNew = PROPER_FILE_NAME_TXT;
    // const fileToRenamePath = path.join(__dirname, '/files/', fileToRename);
    // const fileRenamedPath = path.join(__dirname, '/files/', fileNameNew);

    const fileToRename = {
        fileName: WRONG_FILE_NAME_TXT,
        fileDir: '/files/'
    };

    const fileRenamed = {
        fileName: PROPER_FILE_NAME_TXT,
        fileDir: '/files/'
    };

    return Promise.resolve(renameFile(import.meta.url, fileToRename, fileRenamed));

    // const [
    //     fileToRenameExists,
    //     fileFinalExists
    // ] = await Promise.all([
    //     checkIfDirExists(fileToRenamePath),
    //     checkIfDirExists(fileRenamedPath)
    // ]);
    //
    // if (!fileToRenameExists || fileFinalExists) {
    //     throw new Error('FS Operation failed');
    // }
    //
    // await fs.renameSync(fileToRenamePath, fileRenamedPath);
    // Write your code here 
};

await rename();