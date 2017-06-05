const RETURN_KEY = 13

const selector = ( parent, id, tagToShow ) =>
  `.${parent}[data-id=${id}] > ${tagToShow}`

const titleEdited = event => {
  const elementToHide = $( event.target )
  console.log('elementToHide',elementToHide)
  const id = elementToHide.data( 'id' )
  const elementToShow = $( selector( 'item__title', id, 'span' ) )

  // if( event.keyCode === RETURN_KEY ) {
  //   let updatedTitle = elementToHide[0].value
  //   fetch( `/items/${id}`, params( { title: updatedTitle } ) )
  //     .then( result => result.json() )
  //     .then ( checkJsonForSuccessField )
  //     .then( json => {
  //       toggle( elementToShow, elementToHide )
  //       $( elementToShow[0] ).html(updatedTitle)
  //   })
  // }
}

$( document ).ready( () => {
  $( '.post__edit-title' ).keypress( titleEdited )
})