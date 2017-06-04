exports.up = knex =>
  knex.schema.createTable( 'media', table => {
    table.increments( 'id' ).primary()
    table.string( 'type' ).notNullable()
    table.integer( 'user_id' ).notNullable()
    table.text( 'content' ).notNullable()
  })

exports.down = knex => knex.schema.dropTable( 'media' )