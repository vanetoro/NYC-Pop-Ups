import React from 'react'
import Moment from 'react-moment';
import { connect } from 'react-redux'

function ShowEvent(props) {
    console.log(props)
    // let hoodId = parseInt(props.event.neighborhood_id) -1
    // let hood = props.hoods[hoodId]
    return (
        <div>
            <h1>{props.event.name}</h1>
            <p>Description</p>
            <p>Address: {props.event.location} in </p>
            <p>Start Date: <Moment format='MMMM DD YYYY'>{props.event.start_date}</Moment></p> 
            <p>End Date: <Moment format='MMMM DD YYYY'>{props.event.end_date}</Moment></p> 
            <p>Price: {props.event.price}</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    debugger
}

export default connect(mapStateToProps)(ShowEvent)
