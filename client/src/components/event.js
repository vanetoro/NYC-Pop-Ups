import React, {Component} from 'react'
import { Col, Image, Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import { postLike } from "../actions/eventActions"

function Event(props) {

       const handleClick = (e) => {
                e.preventDefault()
                createFormAndSubmit()
                
        }

        const createFormAndSubmit = ()=> {
                const formData = new FormData()
                formData.append('event[name]', props.event.name)
                formData.append('event[description]', props.event.description)
                formData.append('event[address]', props.event.address)
                formData.append('event[start_date]', props.event.start_date)
                formData.append('event[end_date]', props.event.end_date)
                formData.append('event[price]', props.event.price)
                formData.append('event[counter]', props.event.counter + 1)
                formData.append('event[neighborhood_id]', parseInt(props.event.neighborhood_id))

                // if no image provided skip adding image to the form data
                if(props.event.avatar ){
                    formData.append('event[avatar]', props.event.avatar)
                }
                props.postLike(formData, props.event.id)
            }

        
       
               // promises
               // state vs props
               // es6
               // stateless vs class
               // sorting feature - make the likes persist to database, sorting button -> once clicked it should sort the list from highest to lowest likes.



        return (
            <Col xs={6} md={3}>
                    <NavLink to={`/events/${props.event.id}`} className="nav-link" >
                        <br />
                        <h4 >{props.event.name}</h4> 
                <div style={{height: 200 }}>
                        <Image style={{height: 150, width: 'auto', marginLeft: 'auto', marginRight: 'auto'}} src={props.event.imageUrl} rounded responsive/>
                        <br/>
                        <Button bsSize='xs' onClick={handleClick.bind(this)}>Like</Button> {props.event.counter}
                </div>
                    </NavLink>
            </Col>
    )
}



 const mapDispatchToProps = (dispatch)=> {
   return{
       postLike: (formData, id) => dispatch(postLike(formData,id))
   }
 }


export default connect(null, mapDispatchToProps)(Event)
