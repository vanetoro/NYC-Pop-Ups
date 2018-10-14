import React, { Component } from 'react';
import './App.css';
import EventsContainer from './containers/eventsContainer';
import { BrowserRouter as Router} from 'react-router-dom';
import HomePage from './components/home';

class App extends Component {
 

  render() {

    return (
      <Router>
        <div className="App">
          
          <hr></hr>
          <HomePage />
          
        </div>
      </Router>
    );
  }
}

export default App;