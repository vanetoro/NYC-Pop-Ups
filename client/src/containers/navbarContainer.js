import React, { Component } from 'react'
import NavBar from '../components/navbar';
import { connect } from 'react-redux'
import fetchEvents, { fetchUpComingEvents, fetchCurrentEvents, fetchPastEvents, getHoods } from '../actions/eventActions'
import '../navbar.css'

class NavbarContainer extends React.Component {

    handleClick(e){
        e.preventDefault()
        this.props.getHoods()
        this.props.showNewEventForm()
    }

    render() {
        return (
            <div>
                <NavBar getUpcoming={this.props.getUpcoming} 
                        getCurrent={this.props.getCurrent}
                        getPast={this.props.getPast}
                        newEvent={this.handleClick.bind(this)}
                        getEvents={this.props.getEvents}
                />
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        getCurrent: () => dispatch(fetchCurrentEvents()),
        getUpcoming: () => dispatch(fetchUpComingEvents()),
        getPast: () => dispatch(fetchPastEvents()),
        getHoods: () => dispatch(getHoods()),
        showNewEventForm: () => dispatch({type: 'ADD_EVENT'}),
        getEvents: () => dispatch(fetchEvents())

    }
}

export default connect(null, mapDispatchtoProps)(NavbarContainer)