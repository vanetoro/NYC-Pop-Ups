import React, { Component } from 'react'

export default class NewEvent extends Component {

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

    handleSubmit(e){
        e.preventDefault()
    }

    render() {
        console.log(this.state)
        return (
            <div className='row'>
                <form className='form-group'  onSumbit={this.handleSubmit}>
                   Name: <input className='form-control' type='text' name='name' onChange={this.handleChange.bind(this)}/>
                   Location:<input className='form-control' type="text" name='location' onChange={this.handleChange.bind(this)}/>
                   Start Date: <input className='form-control' type='date' name= 'startDate' onChange={this.handleChange.bind(this)}/>
                   End Date: <input className='form-control' type="date" name= 'endDate' onChange={this.handleChange.bind(this)}/>
                   <input type='submit'/>
                </form>
            </div>
        )
    }
}
