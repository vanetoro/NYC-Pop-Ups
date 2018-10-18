import React, { Component } from 'react'
import Event from './event'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';


class Events extends Component  {

    // if (!props.events) {
    //     return null
    // }

  componentWillReceiveProps(nextProps){
    this.setState({
      events: nextProps.events
    })
  }
  
  // handleClickRecentlyAdded(e){
  //   e.preventDefault()
  //   let recents = this.state.events.sort((a,b) => b.id - a.id).slice(0,3)
  //   this.setState({
  //     events: recents
  //   })
  // }
  
  handleClickUp(e){
    e.preventDefault()
    this.setState({
      events: this.state.events.sort((a,b) => b.counter - a.counter) 
    })
  }

  handleClickDown(e){
    e.preventDefault()
    this.setState({
      events: this.state.events.sort((a,b) => a.counter - b.counter) 
    })
  }
   
     render(){
      let event = this.props.events.map(event =>{
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
  // debugger
    console.log(ownProps, 'inside mapStateToProps')
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
