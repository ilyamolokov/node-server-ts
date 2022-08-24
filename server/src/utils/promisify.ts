// const fs = require('fs');
// const util = require('util');
import fs from "fs";
import util from "util";

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

const writeFile = async (path:string, content:string): Promise<any> => {
    await writeFileAsync(path, content, {encoding:"utf-8"});
}

const readFile = async (path:string): Promise<any> => {
    return await readFileAsync(path, {encoding:"utf-8"});
}

export { writeFile, readFile }