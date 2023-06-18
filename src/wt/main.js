import {
    Worker,
    workerData,
    isMainThread
} from 'worker_threads';
import {cpus} from 'os';

const CPU_NUM = cpus().length;
// const CPU_NUM = 4;
let number = 10;
const resultArray = [];

const performCalculations = async () => {
    const promises = [];

    for (let i = 0; i < CPU_NUM; i++) {
        promises.push(createWorker(number, i));
        // const worker = await createWorker(number);

        number++;
    }

    const r = await Promise.all(promises);

    console.log(r);

    // Promise.all(promises).then(() => console.log(resultArray)).catch((err) => console.log(err));
    // Write your code here
};

const createWorker = async (dataToSend, workerNumber) => {
    const result = {};

    return new Promise((resolve, reject) => {
        const worker = new Worker('/home/aleksandr/PROJECTS/RSSchool/rss2023-nodejs-basics/src/wt/worker.js', {
            workerData: {
                nth: dataToSend
            }
        });

        worker.on('message', (resultW) => {
            result.status = 'resolved';
            result.data = resultW;

            resolve(result);
        });

        worker.on('error', (err) => {
            result.status = 'error';
            result.data = null;

            reject(result);
        });
    })

    // const worker = new Worker('/home/aleksandr/PROJECTS/RSSchool/rss2023-nodejs-basics/src/wt/worker.js', {
    //     workerData: {
    //         nth: dataToSend
    //     }
    // });
    //
    // worker.on('message', (resultW) => {
    //     result.status = 'resolved';
    //     result.data = resultW;
    //
    //     resultArray[workerNumber] = {
    //         status: 'resolved',
    //         data: resultW
    //     };
    //
    //     console.log(resultArray);
    // });
    //
    // worker.on('error', (err) => {
    //     result.status = 'error';
    //     result.data = null;
    //
    //     resultArray[workerNumber] = {
    //         status: 'error',
    //         data: null
    //     };
    //
    //     console.log(resultArray);
    // });
    //
    // return result;
}

await performCalculations();