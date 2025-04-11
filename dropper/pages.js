const FeedbackModel = require('../models/Feedback');

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
    }

}
module.exports = functions