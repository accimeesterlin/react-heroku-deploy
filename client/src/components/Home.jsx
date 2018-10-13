import React from 'react';
import { Redirect, Link } from 'react-router-dom';


class Home extends React.Component {


  goForward = () => {
    this.props.history.goForward();
  };

  goBackForward = () => {
    this.props.history.goBack();
  };



  render() {

    const isAllowed = true;
    
    // JSX
    return (
      <div>
        <h2>I am the Home Component</h2>

        <Link to="/project">Click me</Link>

        <button onClick={this.goBackForward}>Go Backward</button>
        <button onClick={this.goForward}>Go Forward</button>
      </div>
    );
  }
}

export default Home;