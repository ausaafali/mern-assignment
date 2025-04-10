let functions = {
    Home: async function (req, res) {
        res.send('home')
        res.end()
    },
    Contact: async function (req, res) {
        res.send('contact')
        res.end()
    },
    Feedback: async function (req, res) {
        res.send('feedback')
        res.end()
    },
    Help: async function (req, res) {
        res.send('help')
        res.end()
    },
    Faq: async function (req, res) {
        res.send('faq')
        res.end()
    },
    Privacy_policy: async function (req, res) {
        res.send('privacy_policy')
        res.end()
    },
   
}
module.exports = functions