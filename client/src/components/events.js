import React, { Component } from 'react'
import Event from './event'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';


class Events extends Component  {


  state = {
    events: []
  }
  
 
  handleClickUp(e){
    console.log(this.props.events)
    e.preventDefault()
    this.setState({
      events: this.props.events.splice().sort((a,b) => b.counter - a.counter) 
    })
  }

  handleClickDown = (e) => {
    e.preventDefault()
    this.setState({
      events: this.props.events.splice().sort((a,b) => a.counter - b.counter) 
    })
  }
   
     render(){
      let events;

      if(this.state.events.length < 1) {
         events = this.props.events
      } else {
         events = this.state.events
      }

      let event = events.map(event =>{
              return  (
                  <div key={event.id}>
                      <Event event={event} getEvent={this.props.getEvent} counter={this.props.counter}/>
                  </div>)})

       
      return (
      
          <div className="container-fluid">
           <Button onClick={this.handleClickUp.bind(this)}>⇡</Button>
           <Button onClick={this.handleClickDown.bind(this)}>⇣</Button>
                  <h2 className='mr-auto'>{this.props.type} Pop-Ups</h2>
                  {event}
          </div>   
      )
  }
}


const mapStateToProps = (state, ownProps) => {
    let events;
    const filter = ownProps.match && ownProps.match.params.type
    if (filter === 'current') {
      //filter the events that have a start date before today and an end date after today
      events = state.events.filter(event => {
        return Date.parse(event.start_date) <= Date.now() && Date.parse(event.end_date) >= Date.now()
      })
    } else if (filter === 'upcoming') {
      //filter the events that have a start date and an end date after today
      events = state.events.filter(event => {
        return Date.parse(event.end_date) >= Date.now() && Date.parse(event.start_date) >= Date.now()
      })
    } else if(filter === "past") {
      //filter the events that have a start date and an end date before today
      events = state.events.filter(event => {
        return Date.parse(event.end_date) <= Date.now() && Date.parse(event.start_date) <= Date.now()
      })
    } else {
        events = state.events
    }
    //pass the filtered events as props to the ShowEvent component
    return {
      events
    }
}
  

export default connect(mapStateToProps)(Events)
