'use strict';

import path from 'path'
import fs from 'fs'

const dataDirectory = path.join(process.cwd(), 'data');

export default function() {
    const data = {};
    fs.readdirSync(dataDirectory).forEach(filename => {
        const fileContents = fs.readFileSync(path.join(dataDirectory, filename), 'utf8')
        data[filename.split('.')[0]] = JSON.parse(fileContents)
    })
    return data;
}
