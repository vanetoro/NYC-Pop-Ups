import React, { Component } from 'react'
import Events from '../components/events';
import { connect } from 'react-redux'
import fetchEvents, { fetchEvent, postEvent, getHoods, fetchUpComingEvents } from '../actions/eventActions'
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
        this.props.getHoods()
        this.props.showNewEventForm()
    }

    handleUpComing(e){
        e.preventDefault()
        this.props.getUpcoming()
    }
    

    render() {

        return (
        <div id='eventsContainer'> 
            <div className='ml-auto'>
                <Button bsStyle="success" className='custom-btn'  onClick={this.handleClick.bind(this)}>Add Event</Button>
            </div>    
            <Router>
                <React.Fragment>
                    <Route exact path='/' render={()=> <Events events={this.props.events} type={this.props.type}/>} />
                </React.Fragment>
            </Router>
            <NewEvent
                show={this.props.show} 
                postEvent={this.props.postEvent} 
                showNewEventForm={this.props.showNewEventForm}
                neighborhoods={this.props.hoods}
            />
        </div>
        )
    }
}

    const mapStateToProps = (state) => {
        // debugger
        return {
            events: state.events,
            show: state.show,
            hoods: state.hoods, 
            type: this.type

        }
    }

    const mapDispatchToProps = dispatch => {
        return{
            getEvents: () => dispatch(fetchEvents()),
            getEvent: (id) => dispatch(fetchEvent(id)),
            showNewEventForm: () => dispatch({type: 'ADD_EVENT'}),
            postEvent: (state) => dispatch(postEvent(state)),
            getHoods: () => dispatch(getHoods()),
            // getUpcoming: () => dispatch(fetchUpComingEvents())
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
