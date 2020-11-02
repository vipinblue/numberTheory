const randomData = (limit) => Math.floor(Math.random() * limit) + 1

const chartHoursData = () => {
    let colors = ["#6bd098", "#f17e5d",  "#fcc468"]
    let data  = []
    for (let index = 0; index < colors.length; index++) {
        const color = colors[index]
        let chartData = []
        for (let dataIndex = 0; dataIndex < 11; dataIndex++) {
            chartData.push(randomData(3001))
        }
        data.push({
            borderColor:color,
            backgroundColor:color,
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: chartData
        })
    }
    return data
}

const chartEmailData = () => {
    let data  = []
    for (let index = 0; index < 4; index++) {
        data.push(randomData(3001))
    }
    return data
}

const speedChartData = () => {
    let dataFirst  = []
    let dataSecond  = []

    for (let index = 0; index < 13; index++) {
        dataFirst.push(randomData(3001))
        dataSecond.push(randomData(3001))
    }
    return {
        dataFirst,
        dataSecond
    }
}

const getData = async () => new Promise(async (response, reject) => {
    try {
        let data = {
            capacity: randomData(201),
            revenue: randomData(201),
            errors: randomData(201),
            followers: randomData(201),
            chartHoursData: chartHoursData(),
            chartEmailData: chartEmailData(),
            speedChartData: speedChartData()
        }
        return response(data)
    } catch (error) {
        return reject(error)
    }
})

// export default  getData
module.exports  = getData