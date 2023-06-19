import {spawn} from 'child_process';
import path from 'path';
// import {fileURLToPath} from 'url';
import {SCRIPT_JS} from '../constants/fileNames.js';
import getPath from "../utils/getPath.js";

const spawnChildProcess = async (args) => {
    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = path.dirname(__filename);

    // const scriptPath = path.join(__dirname, '/files/', SCRIPT_JS);
    const scriptPath = getPath(import.meta.url, '/files/', SCRIPT_JS);

    const child = spawn('node', [scriptPath, args], {
        stdio: ['ipc']
    });

    child.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    child.stdout.on('error', (err) => {
        console.log(err.toString());
    });
    // Write your code here
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
await spawnChildProcess(7, 10, 11);
