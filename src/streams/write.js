const fs = require('fs');
const path = require('path');

const write = async () => {
    const fileName = 'fileToWrite.txt';
    const filePath = path.join(__dirname, '/files/', fileName);

    const writableStream = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.on('data', (data) => {
        writableStream.write(data);
    })
    // Write your code here 
};

write();