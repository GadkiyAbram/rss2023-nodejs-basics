const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const decompress = async () => {
    const fileNameToDecompress = 'archive.gz';
    const fileNameDecompressed = 'fileToCompress.txt';

    const filePathToDecompress = path.join(__dirname, '/files/', fileNameToDecompress);
    const filePathDecompressed = path.join(__dirname, '/files/', fileNameDecompressed);

    fs.createReadStream(filePathToDecompress)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(filePathDecompressed));

    console.log('File Decompressed.');
    // Write your code here 
};

decompress();