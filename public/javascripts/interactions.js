const RETURN_KEY = 13

const selector = ( parent, id, tagToShow ) =>
  `.${parent}[data-id=${id}] > ${tagToShow}`

const toggle = ( elementToShow, elementToHide ) => {
  $( elementToHide[ 0 ] ).addClass( 'item--hidden' )
  $( elementToShow[ 0 ] ).removeClass( 'item--hidden' )
}

const titleEdited = event => {
  const elementToHide = $( event.target )
  const id = elementToHide.data( 'id' )
  const elementToShow = $( selector( 'post__title', id, 'h2' ) )
  if( event.keyCode === RETURN_KEY ) {
    let updatedTitle = elementToHide[0].value
    fetch( `/posts/edit/title/${id}`, params( { updatedTitle } ) )
  }
}

$( document ).ready( () => {
  $( '.post__edit-title' ).keypress( titleEdited )
})