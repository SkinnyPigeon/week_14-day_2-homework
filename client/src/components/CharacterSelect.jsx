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

    return(
      <h1>Hello</h1>
    )
  }

})

module.exports = CharacterSelect;