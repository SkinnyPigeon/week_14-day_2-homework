var React = require( 'react' );

var CharacterDetails = function( props ) {

  if( !props.character ) {
    return (
      <p>Awaiting Selection...</p>
    )
  }

  return(
    <div>
      <h4>Name: { props.character.name }</h4>
    </div>
  )

};

module.exports = CharacterDetails;