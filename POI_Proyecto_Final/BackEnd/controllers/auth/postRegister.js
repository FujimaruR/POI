// Reference for User model
const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const postRegister = async (req, res) => {
    try {
        const { username, mail, password } = req.body;

        // check if user exists 
        const userMailExists = await User.exists({ mail: mail.toLowerCase() });

        const userExists = await User.exists({ username: username });

        if (userMailExists) {
            return res.status(409).send('Email already in use.')
        }

        if (userExists) {
            return res.status(409).send('Username already in use.')
        }

        // ENCRPYT PASSWORD
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Create user document and save in database
        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword
        })

        // Create JWT token
        const token = jwt.sign({

            userID: user._id,
            mail

        },

            // TOKEN KEY, NEVER SHARE THIS. 
            process.env.TOKEN_KEY, {
            expiresIn: '24h',
        }
        );


        res.status(201).json({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username,
                password: user.password
            }
        })


    }
    catch (err) {
        return res.status(500).send("Error ocurred. Pleaste try again")
    }
}

module.exports = postRegister;