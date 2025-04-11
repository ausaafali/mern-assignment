let exp = require("express")
let r = exp.Router()
let cont = require('../dropper/pages')

r.get("/", cont.Home)


// NEW ROUTES
r.post('/feedback', cont.PostFeedback)

module.exports = r
