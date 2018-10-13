import React from 'react';

import { Route, Redirect } from 'react-router-dom';

// pages
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Project from './components/Project';
import Home from './components/Home';
import NotFound from './components/NotFound';


// Redux
// Mobx
// Flux

import PrivateRoute from './components/Auth';


class App extends React.Component {


  render() {


    // JSX
    return (
      <div>

        <Route exact path='/' component={Home} />
        <PrivateRoute path='/contact/:id/:name' component={ContactUs} />
        <PrivateRoute path='/project' component={Project} />
        <Route path='/login' component={Login} />
        {/* <Route component={NotFound} /> */}

      </div>
    );
  }
}

export default App;