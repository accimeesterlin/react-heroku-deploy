import React, { Component } from 'react';


// Functional Component
// Dumb Component
// Stateless
// Presentational Component


// Class Component
// Container
// StateFull
// Smart
class Contactt extends Component {

  state = {

  };


  render() {
    console.log('Props: ', this.props);
    const id = this.props.match.params.id;
    const name = this.props.match.params.name;

    // JSX
    return(
      <div>
        <h1>ID: {id}</h1>
        <h1>Name: {name}</h1>
        <h2>I am the Contactt Component</h2>
      </div>
    );
  }
}

export default Contactt;