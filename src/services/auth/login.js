const getIp = require("./utils/getIp");
const User = require("../../models/UserModel")
const Device = require("../../models/DeviceModel")

module.exports = async function (req, res) {
    const user = req.body;
    const userAgent = req.get('User-Agent');
    const ip = getIp(req);

    // Validate send user data
    const errors = validateUser(user);
    if (errors) {
        return res.status(422).json(errors);
    }

    // Check if user exists and password is valid
    const existingUser = await User.findOne({email: user.email});
    if (existingUser && existingUser.validatePassword(user.password)) {

        // Create new device for the user
        const device = new Device({
            user: existingUser,
            ip: ip,
            userAgent: userAgent
        });

        // Create tokens
        const {accessToken, refreshToken} = device.createTokens();
        
        // Save device
        await device.save();

        // Send tokens
        res.status(200).json({accessToken, refreshToken});

    } else {
        return res.status(401).json("Wrong email or password");
    }
}

const validateUser = function (user) {
    let errors = {};

    if(!user.email) 
        errors["email"] = "Email is required"
    
    if(!user.password)
        errors["password"] = "Password is required"

    return Object.keys(errors).length && errors;
}