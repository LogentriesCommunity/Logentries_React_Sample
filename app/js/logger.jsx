const LogEntries = require ('./le.min.js');

module.exports = function (token, opts={}){
    if(!token){
        throw new Error ('A valid token is required for all LogEntries library implementations.');
    }

    opts.token = token;
    LogEntries.init(opts);
    return LogEntries;
}
