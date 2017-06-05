const express = require( 'express' )
const router = express.Router()
const Posts = require( '../database/posts' )

router.get( '/', ( request, response ) => {
  Posts.getAll().then( posts => {
    console.log('posts',posts)
    return response.render( 'index', { posts } )
  })
})

module.exports = router