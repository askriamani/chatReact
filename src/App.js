import React, { Component } from 'react';
import Layout  from './component/Layout';
import './index.css';

class App extends Component {
  render() {
    return (
     <div className="container">
        <Layout title="chat app"/>
     </div>
    
    );
  }
}

export default App;
