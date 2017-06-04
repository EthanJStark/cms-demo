module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user: 'estark',
      database: 'cms-demo'
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://estark@localhost:5432/cms-demo'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}