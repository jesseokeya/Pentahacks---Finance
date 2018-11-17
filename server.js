const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(_db, {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => console.log(`Server Running On Port *${PORT}`))