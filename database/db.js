const pgp = require( 'pg-promise' )()
const db = pgp( 'postgres://estark@localhost:5432/cms-demo')

module.exports = db