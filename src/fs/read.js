// const fs = require('fs');
// const path = require('path');
// const {checkIfDirExists} = require("./utils");

import {readFile} from './functions/fsFunctions.js';
import {fileURLToPath} from 'url';
import path from 'path';
import {FILE_TO_READ_TXT} from '../constants/fileNames.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileName = FILE_TO_READ_TXT;
    const filePath = path.join(__dirname, '/files/', fileName);

    return Promise.resolve(readFile(filePath, fileName));

    // if (!await checkIfDirExists(filePath, fileName)) {
    //     throw new Error('FS Operation failed');
    // }
    //
    // fs.readFile(filePath, {encoding: 'utf-8'}, (err, fileData) => {
    //    if (!err) {
    //        console.log(fileData);
    //    }
    // });
    // Write your code here 
};

await read();