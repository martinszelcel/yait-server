const User = require('../../models/UserModel');
const Device = require('../../models/DeviceModel');
const getIp = require('./utils/getIp');

module.exports = async function (req, res) {
    const user = req.body;
    const userAgent = req.get('User-Agent');
    const ip = getIp(req);

    // Validate send user data
    const errors = validateUser(user);
    if (errors) {
        return res.status(422).json(errors);
    }

    // Check if email is not taken
    const existingUser = await User.findOne({email: user.email});
    if (existingUser) {
        return res.status(422).json({email: "Account with this email adress already exists"});
    }

    // Create new user
    const newUser = new User({
        firstName: user.firstName, 
        lastName: user.lastName, 
        email: user.email
    });

    await newUser.setPassword(user.password);

    // Save user
    await newUser.save();

    // Create new device for the user
    const device = new Device({
        user: newUser,
        ip: ip,
        userAgent: userAgent
    });

    // Create tokens for device
    const {accessToken, refreshToken} = device.createTokens();

    // Save device
    await device.save();

    // Send tokens
    res.status(201).json({accessToken, refreshToken})
}

const validateUser = function (user) {
    let errors = {};

    if(!user.email) 
        errors["email"] = "Email is required"
    
    if(!user.password)
        errors["password"] = "Password is required"

    return Object.keys(errors).length && errors;
}