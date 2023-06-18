import fs from 'fs';
import path from 'path';
import utils from '../utils/index.mjs';
const {checkIfDirExists} = utils;

export const createFile = async (filePath, fileText) => {
    if (await checkIfDirExists(filePath)) {
        throw new Error('FS Operation failed');
    }

    fs.writeFileSync(filePath, fileText);
};

export const copyDirectory = async (srcDir, distDir) => {
    if (
        !await checkIfDirExists(srcDir) ||
        await checkIfDirExists(distDir)
    ) {
        throw new Error('FS Operation failed');
    }

    let exists = fs.existsSync(srcDir);
    let stats = exists && fs.statSync(srcDir);
    let isDirectory = exists & stats.isDirectory();

    if (isDirectory) {
        fs.mkdirSync(distDir);
        fs.readdirSync(srcDir).forEach((childItemName) => {
            copyDirectory(path.join(srcDir, childItemName), path.join(distDir, childItemName));
        });
    } else {
        fs.copyFileSync(srcDir, distDir);
    }
};

export const removeFile = async (filePath) => {
    const fileExists = await checkIfDirExists(filePath);

    if (!fileExists) {
        throw new Error('FS Operation failed');
    }

    await fs.unlinkSync(filePath);
}

export const listFiles = async (filesDirPath) => {
    const dirExists = await checkIfDirExists(filesDirPath);

    if (!dirExists) {
        throw new Error('FS Operation failed');
    }

    fs.readdir(filesDirPath, (err, files) => {
        files.forEach((fileName) => {
            console.log(fileName);
        })
    });
}

export const readFile = async (filePath, fileName) => {

    if (!await checkIfDirExists(filePath, fileName)) {
        throw new Error('FS Operation failed');
    }

    fs.readFile(filePath, {encoding: 'utf-8'}, (err, fileData) => {
        if (!err) {
            console.log(fileData);
        }
    });
}

export const renameFile = async (fileToRenamePath, fileRenamedPath) => {
    const [
        fileToRenameExists,
        fileFinalExists
    ] = await Promise.all([
        checkIfDirExists(fileToRenamePath),
        checkIfDirExists(fileRenamedPath)
    ]);

    if (!fileToRenameExists || fileFinalExists) {
        throw new Error('FS Operation failed');
    }

    await fs.renameSync(fileToRenamePath, fileRenamedPath);

}