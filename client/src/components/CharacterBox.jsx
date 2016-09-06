var React = require( 'react' );
var CharacterSelect = require( './CharacterSelect' );
var CharacterDetails = require( './CharacterDetails' );

var CharacterBox = React.createClass({

  getInitialState: function() {
    return { characters: [], currentCharacter: null }
  },

  setCurrentCharacter: function( character ) {
    this.setState({ currentCharacter: character })
  }

  componentDidMount: function() {
    var url = "http://hp-api.herokuapp.com/api/characters";
    var request = new XMLHttpRequest();
    request.open( "GET", url );
    request.onload = function() {
      if( request.status === 200 ) {
        var data = JSON.parse( request.responseText );
        this.setState({ characters: data, currentCharacter: data[0] });
      }
    }.bind( this );
    request.send( null );
    console.log( this.state.characters );
  },

  render: function() {
    return(
      <CharacterSelect characters={ this.state.characters } setCurrentCharacter={ this.setCurrentCharacter }/>
    )
  }

});

module.exports = CharacterBox;