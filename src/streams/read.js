const fs = require('fs');
const path = require('path');

const read = async () => {
    const fileName = 'fileToRead.txt';
    const filePath = path.join(__dirname, '/files/', fileName);

    const readStream = fs.createReadStream(filePath, 'utf-8');
    readStream.on('data', (dataChunk) => {
        process.stdout.write(dataChunk);
    })
    // Write your code here 
};

read();