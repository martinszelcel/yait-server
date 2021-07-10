const today = require('dayjs')
const Device = require('../../models/DeviceModel');

module.exports = async function (req, res) {
    const devices = await Device.find(
        {
            user: req.userId, 
            refreshToken: { $ne: null}, 
            lastUsed: {$gte: today().subtract(6, 'month')}
        },
        "ip userAgent _id lastUsed"
    );
    
    res.json(devices);
}