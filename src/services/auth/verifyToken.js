const jwt = require('jsonwebtoken');

module.exports = {
    accessToken: function (req) {
        // Get token from authorization header
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
      
        // Return error if token is null
        if (token == null) return {error: {code: 401}, data: null};
        
        // Verify provided token
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            return {error: null, data: decoded};
        } catch (err) {
            return {error: {code: 403}, data: null};
        }
        
      },
    refreshToken: function (token) {
        // Return error if token is null
        if (token == null) return {error: {code: 401}, data: null};
        
        // Verify provided token
        try {
            const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
            return {error: null, data: decoded};
        } catch (err) {
            return {error: {code: 403}, data: null};
        }
    }
}