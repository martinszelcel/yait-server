const pino = require('pino');

// Create logger
module.exports = pino({
  prettyPrint: { 
    colorize: true, 
    translateTime: "yyyy-mm-dd HH:MM:ss" 
  }
});