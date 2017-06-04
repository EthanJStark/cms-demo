const express = require( 'express' )
const app = express()
const Post = require( './database/posts' )

app.get( '/', ( request, response) => {
  Post.getAll().then( result => {
    console.log('result',result)
    return response.send('hello world')
  })
})


app.listen( 3000, () => {
  console.log( 'Listening at localhost:3000')
})