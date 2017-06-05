const express = require( 'express' )
const path = require( 'path' )
const app = express()
const bodyParser = require( 'body-parser' )

const index = require( './routes/index' )
const posts = require( './routes/posts' )

app.use( express.static( path.join( __dirname, 'public' )))
app.set( 'view engine', 'pug' )

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: false }))

app.use( '/', index )
app.use( '/posts', posts )

app.use( (error, request, response, next) => {

  response.locals.message = error.message

  response.status( error.status || 500 )
  response.render( 'error' )
})

app.listen( 3000, () => {
  console.log( 'Listening at localhost:3000')
})