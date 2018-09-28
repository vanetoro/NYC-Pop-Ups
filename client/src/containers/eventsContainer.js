import React, { Component } from 'react'
import Events from '../components/events';
import { connect } from 'react-redux'
import fetchEvents, { fetchEvent, postEvent } from '../actions/eventActions'
import NewEvent from '../components/newEvent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowEvent from '../components/showEvent';
import { Button } from 'react-bootstrap'
import '../eventsContainer.css'


 class EventsContainer extends Component {
    
    componentDidMount () {
        this.props.getEvents()
    }

    handleClick(e){
        e.preventDefault()
        this.props.addEvent()
    }
    

    render() {

        return (
        <div> 
            <Router>
                <React.Fragment>
                    <Route exact path='/' render={()=> <Events events={this.props.events}/>} />
                    <Route exact path='/events/:id' component={ShowEvent} />
                </React.Fragment>
            </Router>
            <Button bsStyle="primary" onClick={this.handleClick.bind(this)}>Add Event</Button>
            <NewEvent show={this.props.show} postEvent={this.props.postEvent}/>
        </div>
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            events: state.events,
            show: state.show
        }
    }

    const mapDispatchToProps = dispatch => {
        return{
            getEvents: () => dispatch(fetchEvents()),
            getEvent: (id) => dispatch(fetchEvent(id)),
            addEvent: () => dispatch({type: 'ADD_EVENT'}),
            postEvent: (state) => dispatch(postEvent(state))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
