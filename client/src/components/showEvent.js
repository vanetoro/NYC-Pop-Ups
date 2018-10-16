import React from 'react'
import { connect } from 'react-redux'
import EventDetails from './eventDetails';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { deleteEvent } from '../actions/eventActions'
import { withRouter } from "react-router-dom";

function ShowEvent(props) {
  
  console.log(props)
  const handleEdit= (e) => {
      e.preventDefault()
      props.editForm(props.event)
      
    }

  const handleDelete = (e) => {
    e.preventDefault()
    props.deleteEvent(props.event.id)
    props.history.push('/')

  }  
  let styleCss =  {  
    height: 250,
    width: 'auto',
    position: 'relative',
    top: 20,
    bottom: 0,  
    left: 0, 
    right: 0,  
    margin: 'auto',    
}
  return (
    
    <React.Fragment>
      <Row style={{position: 'relative'}}>
        <Col md={1}>
              <Button onClick={() => props.history.goBack()}> ⬅ </Button>
        </Col>
      <Col md={7}>
        <EventDetails event={props.event}/>
        <Button bsStyle='info' onClick={handleEdit}>Edit</Button>
        <Button bsStyle="danger" onClick={handleDelete}>Delete</Button>
      </Col>
     <Col md={4} >
       <Image style={styleCss} src={props.event.imageUrl} rounded responsive/>
     </Col>
     </Row>
    </React.Fragment>
  )
}   


const mapDispatchToProps = dispatch => {
  return {
    editForm: (state) => dispatch({ state, type: 'EDIT_EVENT' }),
    deleteEvent: (event) => dispatch(deleteEvent(event))
  }
}

// set state to the event that should be shown by the params id
const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id)
    let event = state.events.find((event) => event.id === id)
    let hood = state.hoods.find(hood => hood.id === event.neighborhood_id)
    event = {...event, hood: state.hoods.find(hood => hood.id === event.neighborhood_id)}
  return {
    event
  }
  
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ShowEvent) )
