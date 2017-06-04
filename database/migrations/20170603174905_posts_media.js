exports.up = knex =>
  knex.schema.createTable( 'posts_media', table => {
    table.integer( 'post_id' ).notNullable()
    table.integer( 'media_id' ).notNullable()
  })

exports.down = knex => knex.schema.dropTable( 'posts_media' )