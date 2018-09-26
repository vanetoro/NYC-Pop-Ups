import React, { Component } from 'react';
import './App.css';
import EventsContainer from './containers/eventsContainer';


class App extends Component {
 

  render() {

    return (
      <div className="App">
       <EventsContainer />
      </div>
    );
  }
}

export default App;


// let nextArtistinfo = $.getJSON(`/artists/${artist.id}/next_artist`)
// nextArtistinfo.done(function(nextArtistJSON){
//   $("#nextArtist").attr("data-id",nextArtistJSON.id)
// })