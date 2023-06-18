const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const calculateHash = async () => {
    const fileName = 'fileToCalculateHashFor.txt';
    const fileDir = path.join(__dirname, '/files/', fileName);

    fs.readFile(fileDir, {encoding: 'utf-8'}, (err, fileData) => {
       if (!err) {
           const hash = crypto.createHash('sha256');
           const hashed = hash.update(fileData).digest('hex');
           console.log(hashed);
       }
    });
    // Write your code here 
};

calculateHash();