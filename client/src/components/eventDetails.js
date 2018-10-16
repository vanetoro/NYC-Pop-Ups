import React from 'react'
import Moment from 'react-moment'


function EventDetails(props){
    debugger
    return(
    <React.Fragment>
        <h1>{props.event.name}</h1>
        <p>{props.event.description}</p>
        <p>Address: {props.event.address} in {props.event.hood.name} </p>
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
export default EventDetails;