import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import { deleteEvent } from '../actions/eventActions'
import { withRouter } from "react-router-dom";



function ShowEvent(props) {
  
  const handleclick= (e) => {
      e.preventDefault()
      props.editForm(props.event)
      
    }

  const handleDelete = (e) => {
    e.preventDefault()
    props.deleteEvent(props.event.id)
    props.history.push('/')

  }  
  return (
    <React.Fragment>
            <h1>{props.event.name}</h1>
            <p>{props.event.description}</p>
            <p>Address: {props.event.address} </p>
            <p>
              Start Date: <Moment format="MMMM DD YYYY">{props.event.start_date}</Moment>
            </p>
            <p>
              End Date: <Moment format="MMMM DD YYYY">{props.event.end_date}</Moment>
            </p>
            <p>Price: {props.event.price}</p>
            <Button bsStyle='info' onClick={handleclick}>Edit</Button>
            <Button bsStyle="danger" onClick={handleDelete}>Delete</Button>
    </React.Fragment>
  )
}   


const mapDispatchToProps = dispatch => {
  return {
    editForm: (state) => dispatch({ state, type: 'EDIT_EVENT' }),
    deleteEvent: (id) => dispatch(deleteEvent(id))
  }
}

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id)
    let event = state.events.find((event) => event.id === id)
  return {
    event
  }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ShowEvent) )
