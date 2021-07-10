// Get user ip and remove ipv6
module.exports = function (req) {
    let ip = req.ip;
    if (ip.substr(0,7) == '::ffff:') {
        ip = ip.substr(7);
    }
    return ip;
}