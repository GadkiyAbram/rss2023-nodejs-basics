import {copyDir} from './functions/fsFunctions.js';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const srcDir = path.join(__dirname, '/files');
  const distDir = path.join(__dirname, '/files_copy');

  return Promise.resolve(copyDir(import.meta.url, '/files', '/files_copy'))

  // try {
  //   await copyDirectory(srcDir, newDir);
  // } catch (err) {
  //   console.log(err)
  // }
};

// const copyDirectory = async (src, dist) => {
//   if (
//     !await checkIfDirExists(src) ||
//     await checkIfDirExists(dist)
//   ) {
//     throw new Error('FS Operation failed');
//   }
//
//   let exists = fs.existsSync(src);
//   let stats = exists && fs.statSync(src);
//   let isDirectory = exists & stats.isDirectory();
//
//   if (isDirectory) {
//     fs.mkdirSync(dist);
//     fs.readdirSync(src).forEach((childItemName) => {
//       copyDirectory(path.join(src, childItemName), path.join(dist, childItemName));
//     });
//   } else {
//     fs.copyFileSync(src, dist);
//   }
// }

await copy();
