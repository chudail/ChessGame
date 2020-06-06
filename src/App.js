import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar.js';
import ImageSlider from './components/ImageSlider.js';
import electronic from './images/electronic.jpg';
import furniture from './images/furniture.jpg';
import medicine from './images/medicine.jpg';
import stationary from './images/stationary.jpg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {

    return (
      <div className="App">
        <Toolbar />
        <ImageSlider />
        <img src={electronic} class="Thumbnail m-5" alt="electronic" />
        <img src={furniture}  class="Thumbnail m-5" alt="furniture" />
        <img src={medicine} width="120" height="180" class="Thumbnail m-5" alt="medicine" />
        <img src={stationary} class="Thumbnail" alt="stationary" />
      </div>

    );
  }
}

export default App;