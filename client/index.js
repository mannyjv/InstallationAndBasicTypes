import React, { Component } from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom/client';
import Header from './Header';
import MainSection from './MainSection';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="container">
        <div id="header">
          <Header />
        </div>
        <div id="main">
          <MainSection />
        </div>
      </div>
    );
  }
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
