import React, { Component } from 'react'
import Events from '../components/events';
import { connect } from 'react-redux'
import fetchEvents, { fetchEvent } from '../actions/fetchEvents'
import NewEvent from '../components/newEvent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowEvent from '../components/showEvent';



 class EventsContainer extends Component {

    componentDidMount () {
        this.props.getEvents()
    }
    

    render() {
        return (
        <div> 
            <Router>
                <React.Fragment>
                    <Route exact path='/' render={()=> <Events events={this.props.events}/>} />
                    <Route exact path='/events/new' component={NewEvent} />
                    <Route exact path='/events/:id' component={ShowEvent} />
                </React.Fragment>
            </Router>
            
        </div>
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            events: state.events
        }
    }

    const mapDispatchToProps = dispatch => {
        return{
            getEvents: () => dispatch(fetchEvents()),
            getEvent: (id) => dispatch(fetchEvent(id))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
