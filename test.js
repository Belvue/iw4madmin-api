const api = require('./api')({ base: 'http://34.249.159.220', port: '1624' });

api.getServerStatus().then(console.log).catch(console.log);
