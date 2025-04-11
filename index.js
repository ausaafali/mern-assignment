let express = require('express')
let app = express()
let route = require('./routes/router')
const mongoose = require('mongoose');
require('dotenv').config()
let port_no = process.env.PORT

mongoose.connect(process.env.DB)
    .then(() => console.log('===== MongoDB connected'))
    .catch(err => console.error('----- MongoDB connection error:', err));

//to enable json body parsing
app.use(express.json());

app.use('/', route)

app.listen(port_no, () => {
    console.log(`===== Server is running on port ${port_no}`)
})