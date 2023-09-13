const app = require('./config/express')
const {dbconnect} = require('./config/mongoose')
const {PORT}= require('./config/var')
const path = require('path')
require('dotenv').config()

dbconnect()

app.listen(PORT, () => console.log(`Server running on port ${PORT}.......`))