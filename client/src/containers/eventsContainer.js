import React, { Component } from 'react'
import Events from '../components/events';
import { connect } from 'react-redux'
import fetchEvents from '../actions/fetchEvents'



 class EventsContainer extends Component {

    componentDidMount () {
        this.props.getEvents()
    }
    

    render() {
        return (
            <div> 
                <Events events={this.props.events}/>
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
            getEvents: () => dispatch(fetchEvents())
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
