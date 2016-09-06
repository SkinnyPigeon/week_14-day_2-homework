var React = require('react');
var ReactDOM = require('react-dom');
var CharacterBox = require( './components/CharacterBox' );

window.onload = function(){
  ReactDOM.render(
    <CharacterBox />,
    document.getElementById('app')
  );
}
