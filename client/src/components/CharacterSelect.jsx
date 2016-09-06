var React = require( 'react' );

var CharacterSelect = React.createClass({

  handleChange: function(e) {
    var newIndex = e.target.value;
    this.setState({ selectedIndex: newIndex });
    this.props.setCurrentCharacter( this.props.characters[ newIndex ]);
  },

  getInitialState: function() {
    return { selectedIndex: null }
  },

  render: function() {

    var characterNodes = this.props.characters.map( function( character, index ) {
      return(
        <option key={ index } value={ index }> { character.name } </option>
      )
    })

    return(
      <select value={ this.state.selectedIndex } onChange={ this.handleChange }> { characterNodes } </select>
    )
  }

})

module.exports = CharacterSelect;