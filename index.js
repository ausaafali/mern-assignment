let express = require('express')
let app = express()
let route = require('./routes/router')
require('dotenv').config()
let port_no = process.env.PORT


app.use('/', route)
app.listen(port_no, () => {
    console.log(`Server is running on port ${port_no}`)
})