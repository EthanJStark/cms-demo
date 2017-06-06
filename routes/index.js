const express = require( 'express' )
const router = express.Router()
const Posts = require( '../database/posts' )

router.get( '/', ( request, response ) => {
  console.log('We Get here');
  Posts.getAll().then( posts => {
    console.log('posts',posts)
    response.render( 'index', { posts } )
  })
})

module.exports = router