const express = require( 'express' )
const path = require( 'path' )
const app = express()

const index = require( './routes/index' )
const posts = require( './routes/posts' )

app.use( express.static( path.join( __dirname, 'public' )))
app.set( 'view engine', 'pug' )

app.use( '/', index )
app.use( '/posts', posts )

app.listen( 3000, () => {
  console.log( 'Listening at localhost:3000')
})