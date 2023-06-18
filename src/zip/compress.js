import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import {
    FILE_TO_COMPRESS,
    FILE_COMPRESSED
} from '../constants/fileNames.js';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const filePathToCompress = path.join(__dirname, '/files/', FILE_TO_COMPRESS);
    const filePathCompressed = path.join(__dirname, '/files/', FILE_COMPRESSED);

    return Promise.resolve(
        fs.createReadStream(filePathToCompress)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(filePathCompressed))
    );
    // Write your code here 
};

await compress();