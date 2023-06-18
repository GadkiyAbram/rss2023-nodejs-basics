const fs = require('fs');

const parseEnv = () => {
    const envData = process.env;

    for (const envVar in envData) {
        console.log(`RSS_${envVar}=${envData[envVar]};`);
    }
    // Write your code here
};

parseEnv();