const express = require('express')
const server = express()
const routes = require('./routes/index')
const cors = require('cors')

server.use(cors())
server.use(express.json())


server.use('/api',routes)
server.get('/',(req,res)=>res.send("<h1>Welcome to the ApiREST</h1>"))


module.exports = server