const db = require( './db' )

const getMediaForPostId = `SELECT media.* FROM media
  JOIN posts_media ON media.id = posts_media.media_id WHERE posts_media.post_id=$1`

const getAll = `SELECT * FROM media`

module.exports = {
  getMediaForPostId: postId => db.any( getMediaForPostId, postId ),
  getAll: () => db.any( getAll )
}