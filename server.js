const dotenv = require('dotenv')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('./models/files')
require('./models/customer')
require('./models/manager')
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
const { files, customer, manager, email } = require('./api')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get(['/', '/dashboard'], (_, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/login', (_, res) => {
  res.sendFile(__dirname + '/views/login.html');
})

app.get('/register', (_, res) => {
  res.sendFile(__dirname + '/views/register.html');
})

app.get('/forgot', (_, res) => {
  res.sendFile(__dirname + '/views/forgot.html');
})

app.get('/404', (_, res) => {
  res.sendFile(__dirname + '/views/404.html');
})

app.get('/blank', (_, res) => {
  res.sendFile(__dirname + '/views/blank.html');
})

app.use('/api/emails', email)
app.use('/api/customers', customer)
app.use('/api/managers', manager)
app.use('/api/files', files)


app.listen(PORT, () => console.log(`Server Running On Port *${PORT}`))