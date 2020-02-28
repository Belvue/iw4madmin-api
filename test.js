const api = require('./api')({ base: 'http://34.249.159.220', port: '1624' });
api.lookupPlayer("58E4E2DB").then(console.log).catch(console.log);
api.cleanClientName("^4Liam^7Bobz43^");  //returns a string