import React from 'react'
import { Modal, Button, FormControl, DropdownButton, MenuItem, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import '../eventsContainer.css'


class NewEvent extends React.Component {

        state = {
            name: '',
            description: '',
            address: '',
            start_date: '',
            end_date: '',
            avatar: '',
            price: '',
            neighborhood: {
                name: 'Choose Neighborhood'
        }
    }
    
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(Object.keys(nextProps.edit).length > 0){
            this.editForm(nextProps)
        } else{
            this.newForm()
        }
        
    }

    editForm(props){
        this.setState({
            id: props.edit.id,
            name: props.edit.name,
            description: props.edit.description,
            address: props.edit.address ,
            start_date: props.edit.start_date ,
            end_date: props.edit.end_date ,
            price: props.edit.price,
            neighborhood: props.neighborhoods.find(hood => hood.id === props.edit.neighborhood_id)
        })
    }

    newForm(){
        this.setState({
            id: null,
            name: '',
            description: '',
            address: '',
            start_date: '',
            end_date: '',
            avatar: null,
            price: '',
            neighborhood: {
                name: 'Choose Neighborhood'
        }
    })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelect(id){
        this.setState({
            neighborhood: this.props.neighborhoods.find((hood) => hood.id === id)
        })
    }

    handleFileUpload(e){
        e.preventDefault()
        this.setState({
            avatar: e.target.files[0]
        })
    }

    getValidationState() {
        const length = this.state.name.length;
        if (length > 1) return 'success';
        else if (length > 0) return 'error';
        return null;
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
        if(!this.state.id){
            this.props.postEvent(formData)
        }else{
            this.props.updateEvent(formData, this.state.id)
        }
        debugger
        // props.history.push('/')
    }

 
  
    render() {
        console.log(this.state)
        let neighborhoods = this.props.neighborhoods.map(neighborhood => 
        <MenuItem onSelect={this.handleSelect.bind(this)} 
                    eventKey={neighborhood.id}>{neighborhood.name}
        </MenuItem>)
    
        return (
            <Modal show={this.props.show}>
                <div className="modal-container">
                    <Modal.Header>
                        <Modal.Title>Create New Event</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <form >
                                <input id={this.state.id} type='hidden' name="id" />
                                <FormGroup validationState={this.getValidationState()}>
                                <label htmlFor="name">Name</label>
                                <FormControl 
                                    type='text' 
                                    name='name' 
                                    id='name' 
                                    value= {this.state.name} 
                                    placeholder= 'Enter Name'
                                    onChange={this.handleChange.bind(this)}/>
                                    <FormControl.Feedback />
                                </FormGroup>        
                                <FormGroup> 
                                    <ControlLabel>Description</ControlLabel>
                                    <FormControl componentClass="textarea" 
                                    validationState={this.getValidationState()}
                                    name= 'description'
                                    id= 'description'
                                    value= {this.state.description} 
                                    placeholder= "Write a short description"
                                    onChange={this.handleChange.bind(this)}/>
                                    <FormControl.Feedback />
                                </FormGroup>
                                <FormGroup>
                                <label htmlFor="address">Address</label>
                                <FormControl 
                                    type="text" 
                                    name='address' 
                                    id='address' 
                                    value= {this.state.address} 
                                    onChange={this.handleChange.bind(this)}/>
                                </FormGroup>   
                                <FormGroup>
                                <label htmlFor="price">Price</label>
                                <FormControl 
                                    type="text" 
                                    name='price' 
                                    id='price' 
                                    value= {this.state.price} 
                                    onChange={this.handleChange.bind(this)}/>
                                </FormGroup>   
                                <label htmlFor="startDate">Start Date</label>
                                <FormGroup>
                                <FormControl 
                                    type='date' 
                                    name= 'start_date' 
                                    id= 'startDate'
                                    value= {this.state.start_date} 
                                    onChange={this.handleChange.bind(this)}/>
                                </FormGroup>
                                <FormGroup>    
                                <label htmlFor="endDate">End Date</label>
                                <FormControl 
                                    type="date" 
                                    name= 'end_date' 
                                    id= 'endDate' 
                                    value= {this.state.end_date} 
                                    onChange={this.handleChange.bind(this)}/>
                                    <br/>
                                </FormGroup>                                    
                                <FormGroup>    
                                    <label htmlFor="neighborhoodDropDown">Neighborhood </label>
                                    <br />
                                    <DropdownButton
                                    placeholder="Choose Neighborhood"
                                    eventKey={1} 
                                    onSelect={this.handleSelect.bind(this)} 
                                    title={this.state.neighborhood.name} 
                                    id='neighborhoodDropDown' 
                                    value= {this.state.neighborhood_id} > 
                                    {neighborhoods}
                                    </DropdownButton>
                                    <HelpBlock>Must pick a neighborhood</HelpBlock>
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


