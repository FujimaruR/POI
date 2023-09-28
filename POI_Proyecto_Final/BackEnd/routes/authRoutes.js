const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth')

// Pattern for password validate.
const patternPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])\S{8,}$/;


// Validate with JOI library BACK-END Validate
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    // Pattern 
    password: Joi.string().min(8).max(20).required().pattern(new RegExp(patternPassword)),
    mail: Joi.string().email().required().required(),
});

const loginSchema = Joi.object({
    password: Joi.string().min(8).max(20).required() .pattern(new RegExp(patternPassword)),
    mail: Joi.string().email().required(),
})


// Validate.body works for validate before the register or login with the controllers. 

router.post('/register', validator.body(registerSchema), authControllers.controllers.postRegister);

router.post('/login', validator.body(loginSchema), authControllers.controllers.postLogin)


// test route to verify if our middleware is working
router.get('/test', auth, (req, res) =>{
    res.send('request passed');
})

module.exports = router;

