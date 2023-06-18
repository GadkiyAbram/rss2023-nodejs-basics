import fs from 'fs';
import path from  'path';
import {FILE_TO_WRITE_TXT} from '../constants/fileNames.js';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const fileName = 'fileToWrite.txt';
    const filePath = path.join(__dirname, '/files/', FILE_TO_WRITE_TXT);

    const writableStream = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.on('data', (data) => {
        writableStream.write(data);
    })
    // Write your code here 
};

await write();