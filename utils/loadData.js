'use strict';

import path from 'path'
import fs from 'fs'

const dataDirectory = path.join(process.cwd(), 'data');

/**
 * Returns json data loaded from every file in `dataDirectory` (files are assumed to `.json`).
 * Filename without prefix is used to separate props from different files.
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
export function loadData() {
    const data = {}
    fs.readdirSync(dataDirectory).forEach(filename => {
        const fileContents = fs.readFileSync(path.join(dataDirectory, filename), 'utf8')
        const [justName] = filename.split('.')
        data[justName] = JSON.parse(fileContents)
    })
    return data;
}

/**
 * Returns json data loaded from only files that have the language requested or those that don't have localization at all.
 * Filename without prefix and localization is used to separate props from different files.
 * 
 */
export function loadLocalizedData(languageId) {
    const data = {}
    fs.readdirSync(dataDirectory).forEach(filename => {
        const [justName] = filename.split('.')
        if (justName.endsWith(languageId)) {
            const [nonLocalizedName] = justName.split('_' + languageId)
            const fileContents = fs.readFileSync(path.join(dataDirectory, filename), 'utf8')
            data[nonLocalizedName] = JSON.parse(fileContents)
        } else if (!justName.includes('_') && !data.hasOwnProperty(justName)) {
            const fileContents = fs.readFileSync(path.join(dataDirectory, filename), 'utf8')
            data[justName] = JSON.parse(fileContents)
        }
    })
    return data;
}
