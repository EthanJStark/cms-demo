const express = require( 'express' )
const router = express.Router()
const Posts = require( '../database/posts' )
const Media = require( '../database/media' )

router.get( '/', ( request, response ) => {
  Posts.getAll().then( posts => {
    const unresolvedPromises = posts.map( post => {
      return Media.getMediaForPostId(post.id).then( media => Object.assign( post, media ))
    })

    Promise.all(unresolvedPromises)
      .then( results => response.render( 'index', { results } ))
  })
})

module.exports = router