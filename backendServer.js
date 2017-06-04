const express = require( 'express' )
const app = express()
const Post = require( './database/posts' )

app.all('/posts', ( request, response, next ) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  })

app.get( '/', ( request, response) => {
  Post.getAll().then( result => {
    console.log('result',result)
    return response.send('hello world')
  })
})

app.get( '/posts', ( request, response ) => {
  Post.getAll().then( result => {
    console.log('result',result)
    return response.json( result )
  })
})

app.listen( 3000, () => {
  console.log( 'Listening at localhost:3000')
})