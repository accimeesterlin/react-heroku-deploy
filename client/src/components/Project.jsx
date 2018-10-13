import React from 'react';
import qs from 'stringquery';


class Project extends React.Component {



  pushUrl = () => {
    this.props.history.push('/contact');
  };

  replaceUrl = () => {
    this.props.history.replace('/contact');
  };

  
  render() {

    const data = qs(this.props.location.search);

    console.log('Props: ', this.props);
    console.log('Data: ', data);
    // JSX
    return (
      <div>

        <h1>Name: {data.name}</h1>
        <h1>Name: {data.age}</h1>
        <h2>I am the Project Component</h2>


        <button onClick={this.pushUrl}>PUSH</button>
        <button onClick={this.replaceUrl}>REPLACE</button>
      </div>
    );
  }
}

export default Project;