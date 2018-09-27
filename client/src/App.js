import React, { Component } from 'react';
import './App.css';
import EventsContainer from './containers/eventsContainer';
import NavBar from './components/navbar';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
 

  render() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <hr></hr>
          <EventsContainer />
        </div>
      </Router>
    );
  }
}

export default App;