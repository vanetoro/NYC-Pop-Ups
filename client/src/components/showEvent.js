import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'

function ShowEvent(props) {
  // let hoodId = parseInt(props.event.neighborhood_id) -1
  // let hood = props.hoods[hoodId]
//   console.log(props)
  return (
    <React.Fragment>
            <h1>{props.event.name}</h1>
            <p>Description</p>
            <p>Address: {props.event.location} in </p>
            <p>
              Start Date: <Moment format="MMMM DD YYYY">{props.event.start_date}</Moment>
            </p>
            <p>
              End Date: <Moment format="MMMM DD YYYY">{props.event.end_date}</Moment>
            </p>
            <p>Price: {props.event.price}</p>
    </React.Fragment>
  )
}   

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id)
    let event = state.events.find((event) => event.id === id)
  return {
    event
  }
}

export default connect(mapStateToProps)(ShowEvent)  