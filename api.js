const axios = require('axios');
axios.defaults.timeout = 3000;
module.exports = function(config = {}) {
    var module = {};
    if (config.base === undefined) throw new Error('Missing Base URL. Cannot Continue');
    if (config.port !== undefined) config.base += ":".concat(config.port);
    module.base = config.base;
    module.getServerStatus = () => {
        return new Promise((resolve, reject) => {
            sendRequest('/api/status').then(obj => {
                resolve(obj);
            }).catch(err => {
                reject(err);
            })
        });
    }
    sendRequest = (path) => {
        return new Promise((resolve, reject) => {
            axios.get(`${module.base}${path}`).then((data) => resolve(data.data)).catch((err) => reject(err));
        });
    }

    return module;
}