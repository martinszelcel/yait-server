const verifyToken = require('./verifyToken');

module.exports = {
    required: function (req, res, next) {
        const {error, data} = verifyToken.accessToken(req);
        if (error) return res.sendStatus(error.code);
        req.tokenData = data;
        req.deviceId = data.deviceId;
        req.userId = data.userId;
        next()
      },
    optional: function (req, res, next) {
        const {error, data} = verifyToken.accessToken(req);
        req.tokenData = error ? null : data;
        req.deviceId = error ? null : data.deviceId;
        req.userId = error ? null : data.userId;
        next()
      },
}