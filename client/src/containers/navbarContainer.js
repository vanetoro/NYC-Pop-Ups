import React, { Component } from 'react'
import NavBar from '../components/navbar';
import { connect } from 'react-redux'
import fetchEvents, { getHoods } from '../actions/eventActions'
import '../navbar.css'
import NewEvent from '../components/newEvent'


class NavbarContainer extends React.Component {

    // componentDidMount() {
    //     // this.props.getEvents()
    //     this.props.getHoods()
    // }
    
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
                 {/* <NewEvent
                    show={this.props.show}
                    postEvent={this.props.postEvent}
                    removeForm={this.props.showNewEventForm}
                    neighborhoods={this.props.hoods}
                    edit={this.props.edit}
                /> */}
            </div>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//     //   events: state.events,
//       show: state.show,
//       hoods: state.hoods,
//     //   edit: state.editEvent
  
//       // ownProps: ownProps
//     }
//   }
const mapDispatchtoProps = (dispatch) => {
    return {
        getEvents: () => dispatch(fetchEvents()),
        getHoods: () => dispatch(getHoods()),
        showNewEventForm: () => dispatch({type: 'ADD_EVENT'}),

    }
}

export default connect(null, mapDispatchtoProps)(NavbarContainer)