const api = require('./api')({ base: 'http://t6.gsc.rocks' });
api.getServerPing().then(console.log).catch(console.log);
api.lookupPlayer("58E4E2DB").then(console.log).catch(console.log);
api.cleanClientName("^4Liam^7Bobz43^");
