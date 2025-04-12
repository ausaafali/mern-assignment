const FeedbackModel = require('../models/Feedback');
const User = require('../models/User');
const Health = require('../models/Healthinfo');
const Personal = require('../models/Personalrecord');

let functions = {
    Home: async function (req, res) {
        res.send('home')
    },
    //FOR FEEDBACK (POST)
    PostFeedback: async function (req, res) {
        try {
            const { name, email, message } = req.body;
            const newFeedback = new FeedbackModel({ name, email, message });
            await newFeedback.save();
            res.status(200).json({ message: "Feedback submitted successfully!" });
        } catch (err) {
            console.error(err); // <- Already good
            res.status(500).json({ message: "Error submitting feedback", error: err.message }); // Add this
        }
    },
    //FOR USER DATA (POST)
    PostUser: async function (req, res) {
        try {
            const { name, email, password } = req.body;
            const newUser = new User({ name, email, password });
            await newUser.save();
            res.status(200).json({ message: "User created successfully!" });
        } catch (e) {
            console.log(e)
            // print error
            res.status(500).json({ message: 'Error submitting user', error: e.message })
        }
    },
    //FOR HEALTHINFO DATA (POST)
    PostHealth: async function (req, res) {
        try {
            const { sugar, heart_rate, bp, colestrol } = req.body;
            const newHealth = new Health({ sugar, heart_rate, bp, colestrol });
            await newHealth.save();
            res.status(200).json({ message: "Health Information added successfully!" });
        } catch (e) {
            console.log(e)
            // print error
            res.status(500).json({ message: 'Error submitting healthInfo', error: e.message })
        }
    },
    //FOR PERSONAL DATA (POST)
    PostPersonal: async function (req, res) {
        try {
            const { height, weight, bmi, category, } = req.body;
            const newPersonal = new Personal({ height, weight, bmi, category });
            await newPersonal.save();
            res.status(200).json({ message: "Personal Record added successfully!" });
        } catch (e) {
            console.log(e)
            // print error
            res.status(500).json({ message: 'Error submitting personalData', error: e.message })
        }
    }
}
module.exports = functions