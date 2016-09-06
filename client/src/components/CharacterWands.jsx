var React = require( 'react' );

var CharacterWand = function( props ) {

  console.log( props );

  return(
    <div id="wands">
      <h4>Wand: </h4>
      <h5>Wood - { props.wand.wood }</h5>
      <h5>Core - { props.wand.core }</h5>
      <h5>Length - { props.wand.length }</h5>
    </div>
  )

};

module.exports = CharacterWand;