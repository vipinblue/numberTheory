const fs = require('fs')
const path = require('path')
const os = require('os')
const faker = require('faker')
const headerRow = require('./header')()

let countRows = 100000

const genrateData = async (count) => {
    return new Promise(async (response, reject) => {
        try {
            let output = []
            let id = 0
            for (let index = 0; index < count; index++) {
                let row = []
                id++
                for (let stringIndex = 0; stringIndex < headerRow.length; stringIndex++) {
                    let element
                    if (!stringIndex) {
                        element = id
                    }else{
                        let headerName = headerRow[stringIndex]
                        if (stringIndex < 12) {
                            element = faker['name'][headerName]()
                        }

                        if (stringIndex > 11 && stringIndex < 18) {
                            element = faker['internet'][headerName]()
                        }

                        if (stringIndex > 17 && stringIndex < 28) {
                            element = faker['system'][headerName]()
                        }

                        if (stringIndex > 27) {
                            element = faker['finance'][headerName]()
                        }
                    }
                    row.push(element)
                }
                output.push(row.join())
            }
            response(output)
        } catch (error) {
            reject(error)
        }
    })
}

const generateFile = async (count) => {
    try {
        const filename = path.join(__dirname, 'output.csv')
        let output = await genrateData(count)
        output.unshift(headerRow.join())
        let writer = fs.createWriteStream(filename)
        writer.write(output.join(os.EOL))
    } catch (error) {
        console.log(error)
    }
}

exports.module = countRows

// create  csv data inter data as you want 
generateFile(countRows)