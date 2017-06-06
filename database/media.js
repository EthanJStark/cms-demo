const db = require( './db' )

const getMediaForPostId = `select media.* from media join posts_media
  on media.id = posts_media.media_id where posts_media.post_id=$1`

module.exports = {
  getMediaForPostId: postId => db.any( getMediaForPostId, postId )
}