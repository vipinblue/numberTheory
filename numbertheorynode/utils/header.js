const header = () => {
    const headers = {
        name: ['id', 'firstName', 'lastName', 'findName',  'jobTitle', 'gender', 'prefix', 'suffix', 'title',  'jobDescriptor',
        'jobArea',  'jobType'], internet : [ 'avatar',  'email', 'exampleEmail', 'userName', 'color',  'mac'],
        
        system: ['fileName', 'commonFileName', 'mimeType', 
        'commonFileType', 'commonFileExt', 'fileType', 'fileExt' , 'directoryPath', 'filePath', 
        'semver',] , 
        finance : ['account', 'accountName', 'routingNumber', 'mask', 'transactionType', 
        'currencyCode', 'currencyName', 'creditCardCVV'],
        company : ['companyName', 'companySuffix', 'suffixes', 'bs']
    }
    let headerRow = [...headers.name, ...headers.internet, ...headers.system, ...headers.finance]
    return headerRow
    
}

module.exports  = header