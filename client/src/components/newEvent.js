import React, { Component } from 'react'

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

    handleSubmit(e){
        e.preventDefault()
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
            <div className='row'>
                <form className='form' onSumbit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className='form-control' 
                        type='text' 
                        name='name' 
                        id='name' 
                        onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input className='form-control' 
                        type="text" 
                        name='location' 
                        id='location' 
                        onChange={this.handleChange.bind(this)}/>
                </div>
                    <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input className='form-control' 
                        type='date' 
                        name= 'startDate' 
                        id= 'startDate' 
                        onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input className='form-control' 
                        type="date" 
                        name= 'endDate' 
                        id= 'endDate' 
                        onChange={this.handleChange.bind(this)}/>
                </div>   
                   <input type='submit'/>
                </form>
            </div>
        </div>
        )
    }
}


export default NewEvent;