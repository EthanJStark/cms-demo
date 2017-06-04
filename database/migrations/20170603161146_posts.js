exports.up = knex =>
  knex.schema.createTable( 'posts', table => {
    table.increments( 'id' ).primary()
    table.string( 'title' ).notNullable()
    table.string( 'status' ).notNullable()
    table.integer( 'user_id' ).notNullable()
    table.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable( 'posts' )