const express = require('express')
const server = express()
const routes = require('./routes/index')
const cors = require('cors')

server.use(cors())
server.use(express.json())

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://back-1.herokuapp.com/'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


server.use('/api',routes)
server.get('/',(req,res)=>res.send("<h1>Welcome to the ApiREST</h1>"))


module.exports = server