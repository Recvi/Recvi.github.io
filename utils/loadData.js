'use strict';

import path from 'path'
import fs from 'fs'

const dataDirectory = path.join(process.cwd(), 'data');

/**
 * Returns json data loaded from every file in `dataDirectory` (files are assumed to `.json`).
 * Filename without prefix is used to separate props from different files.
 * ```javascript
 * ex. {
 *      personalInfo: {
 *          name: "Charalampos"
 *          ...
 *      }
 * }
 * ```
 * is inside personalInfo.json
 * 
 * Data object is passed to props from `getStaticProps` in index page.
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
 * Assuming json data filenames follow the pattern: `[propertyName]@[localizationId].json`
 * 
 * or non-localized data: 
 *      [propertyName].json
 * Implementation makes sure that even wrong languageId is provided the default data file will be loaded.
 */
export function loadLocalizedData(languageId) {
    const data = {}
    fs.readdirSync(dataDirectory).forEach(filename => {
        const [justName] = filename.split('.')
        // Case: localized file data
        if (justName.endsWith(languageId)) {
            const [nonLocalizedName] = justName.split('@' + languageId)
            const fileContents = fs.readFileSync(path.join(dataDirectory, filename), 'utf8')
            data[nonLocalizedName] = JSON.parse(fileContents)
        }
        // Case: unlocalized file data 
        else if (!justName.includes('@') && !data.hasOwnProperty(justName)) {
            const fileContents = fs.readFileSync(path.join(dataDirectory, filename), 'utf8')
            data[justName] = JSON.parse(fileContents)
        }
    })
    return data;
}
