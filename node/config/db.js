const config = require('../../knexfile')
const isDev = require('electron-is-dev');
let env = isDev ? 'dev' : 'production';

const knex = require('knex')(config[env])


knex.migrate.latest([config])
module.exports = knex