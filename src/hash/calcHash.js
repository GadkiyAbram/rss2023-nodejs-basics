import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';
import crypto from 'crypto';
import {FILE_TO_CALCULATE_HASH_FOR} from '../constants/fileNames.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const fileDir = path.join(__dirname, '/files/', FILE_TO_CALCULATE_HASH_FOR);

    return fs.readFile(fileDir, {encoding: 'utf-8'}, (err, fileData) => {
       if (!err) {
           const hashed = crypto
               .createHash('sha256')
               .update(fileData)
               .digest('hex');

           console.log(hashed);
       }
    });
    // Write your code here 
};

await calculateHash();