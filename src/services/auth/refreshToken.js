const getIp = require("./utils/getIp");
const verifyToken = require("./verifyToken");
const Device = require("../../models/DeviceModel")

module.exports = async function (req, res) {
    const token = req.body.refreshToken;
    const userAgent = req.get('User-Agent');
    const ip = getIp(req);
    const { error, data } = verifyToken.refreshToken(token);

    // Reject request if token null/invalid
    if (error) return res.sendStatus(error.code);

    // Find device
    const device = await Device.findById(data.deviceId, "+refreshToken").populate('user');

    // Reject request if device has other refresh token
    if (device.refreshToken != token) return res.sendStatus(403);

    // Update device data
    device.userAgent = userAgent;
    device.ip = ip;
    device.lastUsed = Date.now();

    // Create new tokens
    const {accessToken, refreshToken} = device.createTokens();

    await device.save();

    // Send tokens
    res.status(200).json({accessToken, refreshToken});
}