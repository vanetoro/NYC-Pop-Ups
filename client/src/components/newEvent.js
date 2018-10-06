import React from 'react'
import { Modal, Button, FormControl, DropdownButton, MenuItem, FormGroup } from 'react-bootstrap';
import '../eventsContainer.css'

class NewEvent extends React.Component {


    state = {
        name: '',
        address: '',
        startDate: '',
        endDate: '',
        neighborhood: {
            name: 'Choose Neighborhood'
       }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelect(id){
        let index = id - 1
        this.setState({
            neighborhood: this.props.neighborhoods[index]
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.postEvent(this.state)
    }
 

    render() {
        let neighborhoods = this.props.neighborhoods.map(neighborhood => <MenuItem onSelect={this.handleSelect.bind(this)} eventKey={neighborhood.id}>{neighborhood.name}</MenuItem>)
        console.log(this.state)
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
                                <label htmlFor="address">Address</label>
                                <FormControl 
                                    type="text" 
                                    name='address' 
                                    id='address' 
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
                                    <br/>
                                <FormGroup>    
                                    <label htmlFor="neighborhoodDropDown">Neighborhood </label>
                                    <br />
                                    <DropdownButton
                                    eventKey={1} title={this.state.neighborhood.name} id='neighborhoodDropDown' > 
                                    {neighborhoods}
                                    </DropdownButton>
                                </FormGroup>    
                                </form>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.props.removeForm()}>Cancel</Button>
                        <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        )
    }
}


export default NewEvent;


