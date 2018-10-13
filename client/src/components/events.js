import React from 'react'
import Event from './event'
import { connect } from 'react-redux'


function Events(props) {
    if (!props.events) {
        return null
    }
 
    let event = props.events.map(event =>{
            return  (
                <div key={event.id}>
                    <Event event={event} getEvent={props.getEvent}/>
                </div>)})
    return (
        <div className="container-fluid">
                <h2 className='mr-auto'>{props.type} Pop-Ups</h2>
                {event}
        </div>   
    )
}



const mapStateToProps = (state, ownProps) => {
    let events;
    
    const filter = ownProps.match && ownProps.match.params.type
    if (filter == 'current') {
      //filter the events that have a start date before today and an end date after today
      events = state.events.filter(event => {
        return Date.parse(event.start_date) <= Date.now() && Date.parse(event.end_date) >= Date.now()
      })
    } else if (filter == 'upcoming') {
      //filter the events that have a start date and an end date after today
      events = state.events.filter(event => {
        return Date.parse(event.end_date) >= Date.now() && Date.parse(event.start_date) >= Date.now()
      })
    } else if(filter == "past") {
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
