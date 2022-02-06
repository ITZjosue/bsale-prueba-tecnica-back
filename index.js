require('dotenv').config()
const server = require('./src/server')
const mysql = require('./src/db')

const PORT = process.env.PORT || 3001


mysql.connect(err=>{
    if(err) throw err
    console.log("Connected to the database")
    server.listen(PORT,()=>{
        console.log("Server running on port",PORT)
    })
})
