const express = require( 'express' )
const router = express.Router()
const Posts = require( '../database/posts' )

router.post( '/edit/title/:id', ( request, response ) => {
  const postId = request.params.id
  const { updatedTitle } = request.body
  Posts.editTitle( updatedTitle, postId )
    .then( () => response.redirect('/'))
    .catch( error => response.status(500).json({error}) )
})

module.exports = router