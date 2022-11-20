const server = require('./config/server.ts')

require('./config/database.js')
require('./config/routes.ts')(server)