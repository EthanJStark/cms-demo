const express = require( 'express' )
const router = express.Router()
const Posts = require( '../database/posts')

router.get( '/', ( request, response) => {
  Posts.getAll().then( result => {
    console.log('result',result)
    return response.send('hello world')
  })
})

router.post( '/edit/title/:id', ( request, response ) => {
  const postId = request.params.id
  console.log('postId',postId)
  Posts.editTitle( 'blah2', postId ).then( _ => {
    console.log( 'maybe edited' )
    return "success"
  })
})

module.exports = router