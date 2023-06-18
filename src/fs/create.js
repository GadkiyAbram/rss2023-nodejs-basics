const fs = require('fs');
const path = require('path');
const {checkIfDirExists} = require('./utils');
const {createFile} = require('../fs/functions/fsFunctions')

const create = async () => {
  const fileText = 'I am fresh and young';
  const fileDir = path.join(__dirname, '/files/', 'fresh.txt');

  await Promise.resolve(createFile(fileDir, fileText));

  // if (await checkIfDirExists(fileDir)) {
  //   throw new Error('FS Operation failed');
  // }
  //
  // fs.writeFileSync(fileDir, fileText);
};

create();