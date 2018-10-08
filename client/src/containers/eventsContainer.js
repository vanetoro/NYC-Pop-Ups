import React, { Component } from 'react'
import Events from '../components/events';
import { connect } from 'react-redux'
import fetchEvents, { fetchEvent, postEvent, getHoods } from '../actions/eventActions'
import NewEvent from '../components/newEvent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowEvent from '../components/showEvent';
import '../eventsContainer.css'


 class EventsContainer extends Component {
    
    componentDidMount () {
        this.props.getEvents()
        this.props.getHoods()

    }

    // handleClick(e){
    //     e.preventDefault()
    //     this.props.showNewEventForm()
    // }

    // handleUpComing(e){
    //     e.preventDefault()
    //     this.props.getUpcoming()
    // }
    

    render() {

        return (
        <div id='eventsContainer'> 
            <div className='ml-auto'>
            </div>    
            <Router>
                <React.Fragment>
                    <Route exact path='/' 
                                render={()=> <Events events={this.props.events} 
                                                     type={this.props.type}
                                                     getEvent={this.props.getEvent}
                                                     />} />
                    <Route exact path='/events/:id' render={() => <ShowEvent event={this.props.events} hoods={this.props.hoods}/>} />                                
                </React.Fragment>
            </Router>
            <NewEvent
                show={this.props.show} 
                postEvent={this.props.postEvent} 
                removeForm={this.props.showNewEventForm}
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
            postEvent: (state) => dispatch(postEvent(state)),
            showNewEventForm: () => dispatch({type: 'ADD_EVENT'}),
            getHoods: () => dispatch(getHoods())
            // getEvent: (id) => dispatch(fetchEvent(id)),
            // getUpcoming: () => dispatch(fetchUpComingEvents())
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
