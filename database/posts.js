const db = require( './db' )

module.exports = {
  getAll: () => db.any( 'SELECT * FROM posts' )
}