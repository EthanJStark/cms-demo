const fetchParams = method => ({
  method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
})

const params = data =>
  Object.assign( {}, fetchParams( 'POST' ), { body: JSON.stringify( data ) } )

const checkJsonForSuccessField = json => {
  if( json.success ) {
    Promise.resolve( json )
  } else {
    Promise.reject( json.message )
  }
}
