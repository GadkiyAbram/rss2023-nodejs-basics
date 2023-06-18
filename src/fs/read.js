const fs = require('fs');
const path = require('path');
const {checkIfDirExists} = require("./utils");

const read = async () => {
    const fileName = 'fileToRead.txt';
    const filePath = path.join(__dirname, '/files/', fileName);

    if (!await checkIfDirExists(filePath, fileName)) {
        throw new Error('FS Operation failed');
    }

    fs.readFile(filePath, {encoding: 'utf-8'}, (err, fileData) => {
       if (!err) {
           console.log(fileData);
       }
    });
    // Write your code here 
};

read();