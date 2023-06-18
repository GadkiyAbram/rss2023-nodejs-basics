import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import {
    FILE_COMPRESSED,
    FILE_TO_COMPRESS
} from '../constants/fileNames.js';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const filePathToDecompress = path.join(__dirname, '/files/', FILE_COMPRESSED);
    const filePathDecompressed = path.join(__dirname, '/files/', FILE_TO_COMPRESS);

    return Promise.resolve(
        fs.createReadStream(filePathToDecompress)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(filePathDecompressed))
    );
    // Write your code here 
};

await decompress();