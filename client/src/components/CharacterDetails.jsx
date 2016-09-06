var React = require( 'react' );
var CharacterWands = require( './CharacterWands' );

var CharacterDetails = function( props ) {

  if( !props.character ) {
    return (
      <p>Awaiting Selection...</p>
    )
  }

  return(
    <div id="character-sheet">
      <h4>Name: { props.character.name }</h4>
      <h5>Ancestry: { props.character.ancestry }</h5>
      <h5>House: { props.character.house }</h5>
      <h5>DOB: { props.character.yearOfBirth }</h5>
      <CharacterWands wand={ props.character.wand } />
    </div>
  )

};

module.exports = CharacterDetails;