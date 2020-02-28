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
            });
        });
    };

    module.lookupPlayer = (xuid = "00000000") => {
        return new Promise((resolve, reject) => {
            if(xuid === "00000000") reject("Pass in a valid XUID.");
            if(xuid.length < 8 || xuid.length > 8) reject("Pass in a valid XUID.");
            sendRequest(`/api/gsc/clientInfo/${xuid}`).then(obj => {
                if(obj.length <= 0) reject("Not Connected to the Server.");
                resolve(obj.trim());
            }).catch(err => {
                if(err.response.status === 500) reject("Pass in a valid XUID.");
                else reject(err);
            });
        });
    };

    module.cleanClientName = (name) => {
        let pattern = /\^[0-9]/gm;
        if(pattern.test(name)) {
            name = name.replace(pattern, '');
        }
        return name;
    };

    sendRequest = (path) => {
        return new Promise((resolve, reject) => {
            axios.get(`${module.base}${path}`).then((data) => resolve(data.data)).catch((err) => reject(err));
        });
    };
    return module;
}