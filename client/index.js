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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    try {
      // const response = await axios.get('/api/argonautes');
      // const argonautes = response.data;
      // this.setState({
      //   argonautes: argonautes,
      // });
    } catch (err) {
      console.log('There was a problem getting the argonautes!');
    }
  }

  async handleSubmit(argonaute) {
    try {
      // const response = await axios.post('/api/argonautes');
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
          handleSubmit={this.handleSubmit}
        />
        <Footer />
      </div>
    );
  }
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
