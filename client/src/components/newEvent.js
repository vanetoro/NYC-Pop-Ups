import React from 'react'
import { Modal, Button, FormControl, DropdownButton, MenuItem, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import '../eventsContainer.css'


class NewEvent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            address: '',
            start_date: '',
            end_date: '',
            avatar: '',
            price: '',
            counter: 0,
            neighborhood: {
                name: 'Choose Neighborhood'
        }

        }
        this.validateForm = this.validateForm.bind(this)
    }
    
    // used to pass in the props to edit or clear them for the new form
    componentWillReceiveProps(nextProps){
        if(Object.keys(nextProps.edit).length > 0){
            this.editForm(nextProps)
        } else{
            this.newForm()
        }
        
    }

    // will set that state with the current event being displayed
    editForm(props){
        this.setState({
            type: 'Edit',
            id: props.edit.id,
            name: props.edit.name,
            description: props.edit.description,
            address: props.edit.address ,
            start_date: props.edit.start_date ,
            end_date: props.edit.end_date ,
            price: props.edit.price,
            neighborhood: props.neighborhoods.find(hood => hood.id === props.edit.neighborhood_id),
            formValid: true,
        })
    }
    // will set state when add event button is clicked
    newForm(){
        this.setState({
            type: 'Add',
            id: null,
            name: '',
            description: '',
            address: '',
            start_date: '',
            end_date: '',
            avatar: null,
            price: '',
            nameValid: false,
            neighborhoodValid: false,
            formValid: false,
            counter: 0,
            neighborhood: {
                name: 'Choose Neighborhood'
            }
    })
    }

    validateName(){
        if (this.state.name.length >= 3){
            console.log('valid name')
            this.setState({nameValid: true}, this.validateForm)
        } else{
            this.setState({nameValid: false})
        }

       
        
    }

    

    // capturing any change and setting it to the state
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        this.validateName()
    }

    // set that state of neighborhood chosen 
    handleSelect(id){
        let selectedNeighborhood = this.props.neighborhoods.find((hood) => hood.id === id)
        this.setState({
            neighborhood: selectedNeighborhood
        }, this.validateNeighborhood)
        
       
    }

    validateNeighborhood(){
        if(this.state.neighborhood.name !== 'Choose Neighborhood')
        this.setState({neighborhoodValid: true}, this.validateForm)
    }

    //set state of the file chosen to upload
    handleFileUpload(e){
        e.preventDefault()
        debugger
        this.setState({
            avatar: e.target.files[0]
        })
    }


    validateForm(){
        if(this.state.nameValid && this.state.neighborhoodValid){
                this.setState({
                formValid: true,
            } )
        }  
    }

    // bootsrap validation
    getValidationState() {
        const length = this.state.name.length;
        if (length > 3) return 'success';
        else if (length > 0) return 'error';
        return null;
      }
    
    
    // form submit 
    handleSubmit(e){
        e.preventDefault()

        // created form data to be able to send the attachement 
        const formData = new FormData()
        formData.append('event[name]', this.state.name)
        formData.append('event[description]', this.state.description)
        formData.append('event[address]', this.state.address)
        formData.append('event[start_date]', this.state.start_date)
        formData.append('event[end_date]', this.state.end_date)
        formData.append('event[price]', this.state.price)
        formData.append('event[neighborhood_id]', parseInt(this.state.neighborhood.id))
        // if no image provided skip adding image to the form data
        if(this.state.avatar ){
            formData.append('event[avatar]', this.state.avatar)
        }
        debugger
        // check if event is being update or created
        if(!this.state.id){
            this.props.postEvent(formData)
        }else{
            this.props.updateEvent(formData, this.state.id)
        }

    }
    


 
  
    render() {
        //  creating menu select for every neighboorhood 
        let neighborhoods = this.props.neighborhoods.map(neighborhood => 
        <MenuItem onSelect={this.handleSelect.bind(this)} 
                    eventKey={neighborhood.id}>{neighborhood.name}
        </MenuItem>)
        
        return (
            <Modal show={this.props.show}>
                <div className="modal-container">
                    <Modal.Header>
                        <Modal.Title>{this.state.type} Event</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <form >
                                <input id={this.state.id} type='hidden' name="id" />
                                <FormGroup validationState={this.getValidationState()}>
                                <label htmlFor="name" >Name</label>
                                <FormControl 
                                    type='text' 
                                    name='name' 
                                    id='name' 
                                    value= {this.state.name} 
                                    placeholder= 'Enter Name'
                                    onChange={this.handleChange.bind(this)} required/>
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
                                    value= {this.state.neighborhood_id} required> 
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
                        <Button bsStyle="primary"  disabled={!this.state.formValid} onClick={this.handleSubmit.bind(this)}>Save</Button>
                        
                    </Modal.Footer>
                </div>
            </Modal>
        )
    }
}


export default NewEvent;
