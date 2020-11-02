require('dotenv').config()
const express = require('express')
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const getDashboardData = require("./utils/getDashboardDataHelper")
const getUserDataHelper = require("./utils/getUserDataHelper")


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

let socketData
io.on('connection', (socket) => {
  socketData = socket
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

app.use(express.json())

/**
 * index get route
 * @return object
 * @method GET
*/
app.get('/', (req, res, next) =>  {
  return res.status(200).send({ 
    status: 'running'
  })
})

/**
 * get dashboard data 
 * @return object
 * @method GET
*/
app.get('/api/v1/dashboard', async (req, res, next) => {
  try {
    let data = await getDashboardData()
    return res.status(200).send({ 
      status: true,
      data
    })
  } catch (error) {
    return res.status(500).send({ 
      status:  false,
      message: "server error",
      error
    })
  }
})

/**
 * emit  data on changeData channel for real time data update
 * @return object
 * @method GET
*/
app.get('/api/v1/change/dashboard', async (req, res, next) => {
  try {
    let data = await getDashboardData()
    io.emit('changeData', data)
    return res.status(200).send({ 
      status: true
    })
  } catch (error) {
    return res.status(500).send({ 
      status:  false,
      message: "server error",
      error
    })
  }
})


/**
 * get users data 
 * @return object
 * @method GET
*/
app.post('/api/v1/users', async (req, res, next) => {
  try {
    let data = await getUserDataHelper(req)
    return res.status(200).send({ 
      status: true,
      data
    })
  } catch (error) {
    return res.status(500).send({ 
      status:  false,
      message: "server error",
      error
    })
  }
})

http.listen(process.env.PORT || 5001, function () {
  console.log('Node server is running.. '+process.env.PORT)
})