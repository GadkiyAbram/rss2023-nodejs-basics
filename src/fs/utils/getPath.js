import path from 'path';
import {fileURLToPath} from 'url';

const getPath = (fileUrl, files = '', fileName = '') => {
    const __filename = fileURLToPath(fileUrl);
    const __dirname = path.dirname(__filename);

    return path.join(__dirname, files, fileName);
};

export default getPath;