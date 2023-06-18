const fs = require('fs');
const path = require('path');
const {checkIfDirExists} = require("./utils");

const list = async () => {
    const fileFolder = path.join(__dirname, '/files');

    const dirExists = await checkIfDirExists(fileFolder);

    if (!dirExists) {
        throw new Error('FS Operation failed');
    }

    fs.readdir(fileFolder, (err, files) => {
        files.forEach((fileName) => {
            console.log(fileName);
        })
    })
    // Write your code here 
};

list();