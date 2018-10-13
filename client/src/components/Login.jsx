import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {

  state = {
    value: ''
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // stop the page from refreshing
    const data = {
      password: '12345'
    };

    axios({
      method: 'POST',
      url: '/login',
      data: data
    })
      .then((response) => {
        console.log('Response: ', response.data);
        const isAuthenticated = response.data.isAuthenticated;

        window.isAuthenticated = isAuthenticated;
        this.setState({
          isAuthenticated
        });


      })
      .catch((error) => {
        console.log('Error: ', error);
      });
    // TODO
    // Send the data to my Server
    // Receive the reponse back from the server
    // const isAuthenticated = true; // from the server

  };

  render() {

    if (this.state.isAuthenticated) {
      return <Redirect to='/project?name=patrick&age50' />
    }

    // JSX
    return (
      <div>
        <h2>I am the Login Component</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" onChange={this.handleChange} />
          </div>

          <button>Login</button>

        </form>

        <Link to='/project?name=patrick&age=5'> Go to Project </Link> <br />
        <Link to='/contact/50/patrick'> Go to Contact </Link>
      </div>
    );
  }
}

export default Login;