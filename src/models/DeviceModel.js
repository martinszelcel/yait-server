const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');

const DeviceSchema = new Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    ip: { type: String, required: true },
    userAgent: { type: String, required: true },
    refreshToken: { type: String, required: true, select: false },
    lastUsed: { type: Date, default: Date.now()}
});

DeviceSchema.methods.createTokens = function () {
    const tokenData = {
        deviceId: this.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        userId: this.user.id
    }

    const accessToken = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
    const refreshToken = jwt.sign(tokenData, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '0.5y' })
    
    // Asign refresh token to device
    this.refreshToken = refreshToken;

    return {accessToken, refreshToken}
}

module.exports = mongoose.model('Device', DeviceSchema);