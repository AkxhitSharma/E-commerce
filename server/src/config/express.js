const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('../api/routes');
const { notFound, errorHandler } = require('../api/middlewares/errorhandler');

const app = express();



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api',routes)

app.use(notFound)
app.use(errorHandler)
app.use(morgan("dev"))
app.use(cors());

module.exports=app






