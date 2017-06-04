exports.up = knex =>
  knex.schema.createTable( 'posts_tags', table => {
    table.integer( 'post_id' ).notNullable()
    table.string( 'tag_id' ).notNullable()
  })

exports.down = knex => knex.schema.dropTable( 'posts_tags' )