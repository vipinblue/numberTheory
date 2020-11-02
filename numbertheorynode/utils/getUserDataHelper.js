const fs = require('fs')
const path = require('path')
const csv = require('fast-csv')
const headerRow = require('./header')()
const countRows  = require('./createCSV')

const readFile = (maxRows, skipRows) => {
    return new Promise((response, reject) => {
        try {
            const filename = path.join(__dirname, 'output.csv')
            let users = []
            let status = false
            fs.createReadStream(filename).pipe(csv.parse({ headers: true,  maxRows, skipRows }))
            .on('error', error => console.error(error))
            .on('data', row => users.push(row)).on('end', rowCount => {
                console.log(`Parsed ${rowCount} rows`)
                response(users)
                status = true
            })
        } catch (error) {
            reject(error)
        }
    })
}

const getData = async (req) => new Promise(async (response, reject) => {
    try {
        let current_page = req.body.current_page  ? req.body.current_page :  1
        let max_rows =  30
        let skipRows = (current_page -1) * max_rows
        let users = await readFile(max_rows, skipRows)
        let data = {
            users,
            current_page,
            total_page: Math.ceil(countRows/max_rows),
            max_rows,
            headers: headerRow,
        }
        return response(data)
    } catch (error) {
        return reject(error)
    }
})

// export default  getData
module.exports  = getData