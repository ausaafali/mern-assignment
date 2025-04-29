let bcrypt = require('bcrypt')
let user = require('../Collection/User')
let user_function = {
    register: async function (req, res) {
        try {
            let { name, email, password, gender, age } = req.body
            // email duplication
            const email_check = await user.findOne({ email: email });

            if (email_check) {
                res.status(409).json({ msg: 'Email already exists' })
            } else {
                // password encryption
                let enc_password = bcrypt.hashSync(password, 15)
                let user_data = new user({ name, email, password: enc_password, gender, age })
                let save_data = await user_data.save()
                res.status(200).json({ msg: 'Registered successfully' })

            }

        } catch (error) {
            res.status(501).json({ msg: error.message })
        }
    }
}

module.exports = user_function;