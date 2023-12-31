const fs = require('fs/promises');
const path = require('path');

async function readJSONFile(pathFilename, filename) {

    const filePath = path.join(pathFilename, filename)
    // console.log('filePath', filePath);

    return fs.readFile(filePath)
        .then(
            data => {
                return JSON.parse(data);
            }
        )
        .catch(
            err => console.log(err)
        )
}

module.exports.readJSONFile = readJSONFile;
