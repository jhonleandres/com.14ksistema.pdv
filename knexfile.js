
module.exports = {
  dev: {
    client: 'sqlite3',
    connection: {
      filename:  './database/database.db'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './node/database/migrations',
    }
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: process.cwd() + '/database/database.db'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: process.cwd() + '/resources/app.asar/node/database/migrations',
    }
  }
};