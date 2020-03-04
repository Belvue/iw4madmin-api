const api = require('./api')({ base: 'http://t6.gsc.rocks' });
api.getServerPing().then(console.log).catch(console.log);
