// import {fileURLToPath} from 'url';
// import path from 'path';
import {removeFile} from './functions/fsFunctions.js';
import {FILE_TO_REMOVE_TXT} from '../constants/fileNames.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const remove = async () => {
    // const fileToRemovePath = path.join(__dirname, '/files/', FILE_TO_REMOVE_TXT);

    // return Promise.resolve(removeFile(fileToRemovePath));

    return Promise.resolve(removeFile(import.meta.url, '/files/', FILE_TO_REMOVE_TXT));

    // const fileExists = await checkIfDirExists(fileToRemovePath);
    //
    // if (!fileExists) {
    //     throw new Error('FS Operation failed');
    // }
    //
    // await fs.unlinkSync(fileToRemovePath);
    // Write your code here 
};

await remove();