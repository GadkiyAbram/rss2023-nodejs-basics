const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const compress = async () => {
    const fileNameToCompress = 'fileToCompress.txt';
    const fileNameCompressed = 'archive.gz';

    const filePathToCompress = path.join(__dirname, '/files/', fileNameToCompress);
    const filePathCompressed = path.join(__dirname, '/files/', fileNameCompressed);

    fs.createReadStream(filePathToCompress).pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(filePathCompressed));

    console.log('File Compressed');
    // Write your code here 
};

compress();