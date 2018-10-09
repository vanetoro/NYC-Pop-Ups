import React, { Component } from 'react'
import NavBar from '../components/navbar';
import { connect } from 'react-redux'
import fetchEvents, { getHoods } from '../actions/eventActions'
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
                <NavBar newEvent={this.handleClick.bind(this)}
                        getEvents={this.props.getEvents}
                />
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        getEvents: () => dispatch(fetchEvents()),
        getHoods: () => dispatch(getHoods()),
        showNewEventForm: () => dispatch({type: 'ADD_EVENT'}),

    }
}

export default connect(null, mapDispatchtoProps)(NavbarContainer)