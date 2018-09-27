import React, { Component } from 'react';
import './App.css';
import EventsContainer from './containers/eventsContainer';
import NavBar from './components/navbar';


class App extends Component {
 

  render() {

    return (
      <div className="App">
       <NavBar />
       <EventsContainer />
      </div>
    );
  }
}

export default App;