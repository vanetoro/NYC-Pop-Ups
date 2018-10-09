import React, { Component } from 'react'
import Events from '../components/events'
import { connect } from 'react-redux'
import fetchEvents, { fetchEvent, postEvent, getHoods } from '../actions/eventActions'
import NewEvent from '../components/newEvent'
import { Route, Switch, withRouter } from 'react-router-dom'
import ShowEvent from '../components/showEvent'
import '../eventsContainer.css'

class EventsContainer extends Component {
  componentDidMount() {
    this.props.getEvents()
    this.props.getHoods()
  }


  render() {
    return (
      <div id="eventsContainer">
        <React.Fragment>
          <Switch>
            <Route exact path="/" render={() => <Events 
                                                
                                                type={this.props.type} 
                                                getEvent={this.props.getEvent} />}
            />
            <Route exact path="/:type" component={Events} events={this.props.events} />
            <Route exact path="/events/:id" component={ShowEvent} />
          </Switch>
        </React.Fragment>
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
  return {
    events: state.events,
    show: state.show,
    hoods: state.hoods,
    type: this.type
    // ownProps: ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(fetchEvents()),
    getEvent: id => dispatch(fetchEvent(id)),
    postEvent: state => dispatch(postEvent(state)),
    showNewEventForm: () => dispatch({ type: 'ADD_EVENT' }),
    getHoods: () => dispatch(getHoods())
    // getEvent: (id) => dispatch(fetchEvent(id)),
    // getUpcoming: () => dispatch(fetchUpComingEvents())
  }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
);