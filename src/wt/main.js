import {Worker} from 'worker_threads';
import {cpus} from 'os';
import getPath from '../utils/getPath.js';
import {WORKER_JS} from '../constants/fileNames.js';

const CPU_NUM = cpus().length || 4;
let number = 10;

const fileUrl = import.meta.url;

const performCalculations = async () => {
    const promises = [];

    for (let i = 0; i < CPU_NUM; i++) {
        promises.push(createWorker(number));

        number++;
    }

    return Promise.all(promises).then((result) => console.log(result));
};

const createWorker = async (dataToSend) => {
    return new Promise((resolve, reject) => {
        const result = {};
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