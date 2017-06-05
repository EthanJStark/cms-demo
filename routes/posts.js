const express = require( 'express' )
const router = express.Router()
const Posts = require( '../database/posts')



router.get( '/', ( request, response) => {
  Posts.getAll().then( result => {
    console.log('result',result)
    return response.send('hello world')
  })
})

module.exports = router