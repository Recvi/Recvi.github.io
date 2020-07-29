'use strict';

import path from 'path'
import fs from 'fs'

const dataDirectory = path.join(process.cwd(), 'data');

/**
 * Returns json data loaded from every file in `dataDirectory` (files are assumed to `.json`).
 * Filename without prefix is used to separate data of different files.
 * ex. {
 *      personalInfo: {
 *          name: "Charalampos"
 *          ...
 *      }
 * }
 * is inside personalInfo.json
 * 
 * Data object is passed to props from `getStaticPros` in index page.
 * 
 * @returns {Object} data
 */
export default function() {
    const data = {};
    fs.readdirSync(dataDirectory).forEach(filename => {
        const fileContents = fs.readFileSync(path.join(dataDirectory, filename), 'utf8')
        const [justName] = filename.split('.')
        data[justName] = JSON.parse(fileContents)
    })
    return data;
}
