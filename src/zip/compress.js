import fs from 'fs';
import zlib from 'zlib';
import {
    FILE_TO_COMPRESS,
    FILE_COMPRESSED
} from '../constants/fileNames.js';
import getPath from '../utils/getPath.js';

const compress = async () => {
    const filePathToCompress = getPath(import.meta.url, '/files/', FILE_TO_COMPRESS);
    const filePathCompressed = getPath(import.meta.url, '/files/', FILE_COMPRESSED);

    return Promise.resolve(
        fs.createReadStream(filePathToCompress)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(filePathCompressed))
    );
};

await compress();