import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
