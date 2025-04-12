let exp = require("express")
let r = exp.Router()
let cont = require('../dropper/pages')

r.get("/", cont.Home)


// NEW ROUTES
r.post('/feedback', cont.PostFeedback)
r.post('/adduser', cont.PostUser)
r.post('/addhealth', cont.PostHealth)
r.post('/addpersonal', cont.PostPersonal)

module.exports = r
