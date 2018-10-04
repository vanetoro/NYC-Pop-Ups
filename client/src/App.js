import React, { Component } from 'react';
import './App.css';
import EventsContainer from './containers/eventsContainer';
// import NavBar from './components/navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import NavbarContainer from './containers/navbarContainer';

class App extends Component {
 

  render() {

    return (
      <Router>
        <div className="App">
          <NavbarContainer/>
          <hr></hr>
          <EventsContainer />
        </div>
      </Router>
    );
  }
}

export default App;