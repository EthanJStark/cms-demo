const db = require( './db' )

const getAll = `SELECT * FROM posts`

const editTitle = `UPDATE posts SET title=$1 WHERE id=$2`

module.exports = {
  getAll: () => db.any( getAll ),
  editTitle: ( newTitle, postId ) => db.none( editTitle, [ newTitle, postId ] )
}