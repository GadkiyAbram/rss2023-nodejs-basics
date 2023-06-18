const fs = require('fs');
const path = require("path");
const {checkIfDirExists} = require("./utils");

const remove = async () => {
    const fileToRemove = 'fileToRemove.txt';
    const fileToRemovePath = path.join(__dirname, '/files/', fileToRemove);

    const fileExists = await checkIfDirExists(fileToRemovePath);

    if (!fileExists) {
        throw new Error('FS Operation failed');
    }

    await fs.unlinkSync(fileToRemovePath);
    // Write your code here 
};

remove();