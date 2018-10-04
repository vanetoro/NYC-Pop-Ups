import React, { Component } from 'react'
import NavBar from '../components/navbar';
import { connect } from 'react-redux'
import { fetchUpComingEvents, fetchCurrentEvents, fetchPastEvents } from '../actions/eventActions'
import '../navbar.css'

class NavbarContainer extends React.Component {
    render() {
        return (
            <div>
                <NavBar getUpcoming={this.props.getUpcoming} 
                        getCurrent={this.props.getCurrent}
                        getPast={this.props.getPast}/>
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        getCurrent: () => dispatch(fetchCurrentEvents()),
        getUpcoming: () => dispatch(fetchUpComingEvents()),
        getPast: () => dispatch(fetchPastEvents())
    }
}

export default connect(null, mapDispatchtoProps)(NavbarContainer)