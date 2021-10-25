import React, { Component } from 'react';

import Splash from '../components/Splash';
import MapPage from './MapPage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false
    };
  }

  render() {
    return <div>{!this.state.submit ? <Splash /> : <MapPage />}</div>;
  }
}

export default App;
