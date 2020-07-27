'use strict';

import path from 'path'
import fs from 'fs'

const dataDirectory = path.join(process.cwd(), 'data');

export default {
    getJSONFile: name => {
        let rawdata = fs.readFileSync(path.join(dataDirectory, name));
        return JSON.parse(rawdata);
    },
    loadJSONData: () => (fs.readdirSync(dataDirectory).map(filename => {
            const fileContents = fs.readFileSync(path.join(dataDirectory, filename), 'utf8')
            return {
                [filename]: JSON.parse(fileContents)
            })
        }
    )
}