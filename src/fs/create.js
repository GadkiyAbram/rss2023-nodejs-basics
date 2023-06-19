import {fileURLToPath} from 'url';
import path from 'path';
import {createFile} from './functions/fsFunctions.js';
import {FILE_TO_CREATE_TXT} from '../constants/fileNames.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const fileText = 'I am fresh and young';
  const fileDir = path.join(__dirname, '/files/', FILE_TO_CREATE_TXT);

  return Promise.resolve(createFile(
      import.meta.url,
      '/files/',
      FILE_TO_CREATE_TXT,
      fileText)
  );

  // if (await checkIfDirExists(fileDir)) {
  //   throw new Error('FS Operation failed');
  // }
  //
  // fs.writeFileSync(fileDir, fileText);
};

await create();