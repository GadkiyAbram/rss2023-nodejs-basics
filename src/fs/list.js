// const fs = require('fs');
// const path = require('path');
// const {checkIfDirExists} = require("./utils");

import {listFiles} from './functions/fsFunctions.js';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const fileToRemovePath = path.join(__dirname, '/files');

    return Promise.resolve(listFiles(import.meta.url, '/files'));
    // const fileFolder = path.join(__dirname, '/files');

    // const dirExists = await checkIfDirExists(fileFolder);
    //
    // if (!dirExists) {
    //     throw new Error('FS Operation failed');
    // }
    //
    // fs.readdir(fileFolder, (err, files) => {
    //     files.forEach((fileName) => {
    //         console.log(fileName);
    //     })
    // });
    // Write your code here 
};

await list();