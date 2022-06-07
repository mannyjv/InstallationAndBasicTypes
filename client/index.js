import React, { Component } from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom/client';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      argonautes: [],
    };
    this.addArgonaute = this.addArgonaute.bind(this);
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/api/argonautes');
      const argonautes = response.data;
      this.setState({
        argonautes,
      });
    } catch (err) {
      console.log('There was a problem getting the argonautes!');
    }
  }

  async addArgonaute(a) {
    try {
      const response = await axios.post('/api/argonautes', { name: a });
      const newArgonaute = await response.data[0];
      this.setState({
        argonautes: [...this.state.argonautes, newArgonaute],
      });
    } catch (err) {
      console.log('There was a problem adding a argonaute!');
    }
  }
  render() {
    return (
      <div id="container">
        <Header />
        <MainSection
          listOfArgonautes={this.state.argonautes}
          addArgonaute={this.addArgonaute}
        />
        <Footer />
      </div>
    );
  }
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
