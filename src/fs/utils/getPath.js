import path from 'path';

const getPath = (fileName) => {
    return path.join(__dirname, '../files/', fileName);
};

export default getPath;