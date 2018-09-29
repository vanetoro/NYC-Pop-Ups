import React from 'react'
import { Modal, Button, FormControl, DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import '../eventsContainer.css'

class NewEvent extends React.Component {

    state = {
        name: '',
        location: '',
        startDate: '',
        endDate: '',

    
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e){
        debugger
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.postEvent(this.state)
    }


    render() {
        let hoods = this.props.hoods.map(hood => <MenuItem eventKey={hood.id}>{hood.name}</MenuItem>)
        console.log(this)
        return (
            <Modal show={this.props.show}>
                <div className="modal-container">
                    <Modal.Header>
                        <Modal.Title>Create New Event</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form >
                            <label htmlFor="name">Name</label>
                            <FormControl 
                                type='text' 
                                name='name' 
                                id='name' 
                                onChange={this.handleChange.bind(this)}/>
                            <label htmlFor="location">Location</label>
                            <FormControl 
                                type="text" 
                                name='location' 
                                id='location' 
                                onChange={this.handleChange.bind(this)}/>
                            <label htmlFor="startDate">Start Date</label>
                            <FormControl 
                                type='date' 
                                name= 'startDate' 
                                id= 'startDate' 
                                onChange={this.handleChange.bind(this)}/>
                            <label htmlFor="endDate">End Date</label>
                            <FormControl 
                                type="date" 
                                name= 'endDate' 
                                id= 'endDate' 
                                onChange={this.handleChange.bind(this)}/>
                                <ButtonToolbar>
                                <DropdownButton eventKey={1} title='Choose a Neighborhood' id='dropDown'> 
                                {hoods}
                                </DropdownButton>
                                </ButtonToolbar> 
                            </form>
                            
                    </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.handleClick.bind(this)}>Cancel</Button>
                    <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        )
    }
}


export default NewEvent;


