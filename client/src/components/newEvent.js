import React from 'react'
import { Modal, Button, FormControl, DropdownButton, MenuItem, FormGroup, ControlLabel } from 'react-bootstrap';
import '../eventsContainer.css'


class NewEvent extends React.Component {


    state = {
        name: '',
        description: '',
        address: '',
        start_date: '',
        end_date: '',
        avatar: '',
        neighborhood: {
            name: 'Choose Neighborhood'
       }
    }

    handleChange(e){
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelect(id){
        this.setState({
            neighborhood: this.props.neighborhoods.find((hood) => hood.id === id)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('event[name]', this.state.name)
        formData.append('event[description]', this.state.description)
        formData.append('event[address]', this.state.address)
        formData.append('event[start_date]', this.state.start_date)
        formData.append('event[end_date]', this.state.end_date)
        formData.append('event[price]', this.state.price)
        formData.append('event[neighborhood_id]', parseInt(this.state.neighborhood.id))
        formData.append('event[avatar]', this.state.avatar)
        

        this.props.postEvent(formData)
    }

    handleFileUpload(e){
        e.preventDefault()
        this.setState({
            avatar: e.target.files[0]
        })
    }
 
  
    render() {

        console.log(this.state)
        
        let neighborhoods = this.props.neighborhoods.map(neighborhood => <MenuItem onSelect={this.handleSelect.bind(this)} eventKey={neighborhood.id}>{neighborhood.name}</MenuItem>)
        return (
            <Modal show={this.props.show}>
                <div className="modal-container">
                    <Modal.Header>
                        <Modal.Title>Create New Event</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <form >
                                <FormGroup>
                                <label htmlFor="name">Name</label>
                                <FormControl 
                                    type='text' 
                                    name='name' 
                                    id='name' 
                                    onChange={this.handleChange.bind(this)}/>
                                </FormGroup>        
                                <FormGroup> 
                                    <ControlLabel>Description</ControlLabel>
                                    <FormControl componentClass="textarea" 
                                    name= 'description'
                                    id= 'description'
                                    onChange={this.handleChange.bind(this)}/>
                                </FormGroup>
                                <FormGroup>
                                <label htmlFor="address">Address</label>
                                <FormControl 
                                    type="text" 
                                    name='address' 
                                    id='address' 
                                    onChange={this.handleChange.bind(this)}/>
                                </FormGroup>   
                                <FormGroup>
                                <label htmlFor="price">Price</label>
                                <FormControl 
                                    type="text" 
                                    name='price' 
                                    id='price' 
                                    onChange={this.handleChange.bind(this)}/>
                                </FormGroup>   
                                <label htmlFor="startDate">Start Date</label>
                                <FormGroup>
                                <FormControl 
                                    type='date' 
                                    name= 'start_date' 
                                    id= 'startDate'
                                    onChange={this.handleChange.bind(this)}/>
                                </FormGroup>
                                <FormGroup>    
                                <label htmlFor="endDate">End Date</label>
                                <FormControl 
                                    type="date" 
                                    name= 'end_date' 
                                    id= 'endDate' 
                                    onChange={this.handleChange.bind(this)}/>
                                    <br/>
                                </FormGroup>                                    
                                <FormGroup>    
                                    <label htmlFor="neighborhoodDropDown">Neighborhood </label>
                                    <br />
                                    <DropdownButton
                                    eventKey={1} onSelect={this.handleSelect.bind(this)} title={this.state.neighborhood.name} id='neighborhoodDropDown' > 
                                    {neighborhoods}
                                    </DropdownButton>
                                </FormGroup>    
                                <FormControl
                                    name="avatar"
                                    type="file"
                                    label="File"
                                    help="Example block-level help text here."
                                    onChange={this.handleFileUpload.bind(this)}
                                    />
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


