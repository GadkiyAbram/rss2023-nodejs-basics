import fs from 'fs';
import path from 'path';
import {FILE_TO_READ_TXT} from '../constants/fileNames.js';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, '/files/', FILE_TO_READ_TXT);

    const readStream = fs.createReadStream(filePath, 'utf-8');

    return readStream.on('data', (dataChunk) => {
        process.stdout.write(dataChunk);
    });
    // Write your code here 
};

await read();