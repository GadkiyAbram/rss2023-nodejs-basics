import {Worker} from 'worker_threads';
import {cpus} from 'os';
import getPath from '../fs/utils/getPath.js';
import {WORKER_JS} from '../constants/fileNames.js';

const CPU_NUM = cpus().length || 4;
let number = 10;

const fileUrl = import.meta.url;

const performCalculations = async () => {
    const promises = [];

    for (let i = 0; i < CPU_NUM; i++) {
        promises.push(createWorker(number));
        // const worker = await createWorker(number);

        number++;
    }

    await Promise.all(promises).then((result) => console.log(result));
    // Write your code here
};

const createWorker = async (dataToSend) => {
    return new Promise((resolve, reject) => {
        const result = {};
        // const worker = new Worker('/home/aleksandr/PROJECTS/RSSchool/rss2023-nodejs-basics/src/wt/worker.js', {
        const worker = new Worker(getPath(fileUrl, '', WORKER_JS), {
            workerData: {
                nth: dataToSend
            }
        });

        worker.on('message', (resultW) => {
            result.status = 'resolved';
            result.data = resultW;

            resolve(result);
        });

        worker.on('error', () => {
            result.status = 'error';
            result.data = null;

            reject(result);
        });
    });
}

await performCalculations();