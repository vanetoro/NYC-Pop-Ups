import React, { Component } from 'react'

export default class EventsContainer extends Component {
    state={
        events: ''
    }
    componentDidMount () {
        window.fetch('/api/events')
        .then(response => response.json())
        .then(data => {
        this.setState({
            events: data
            })
        })
    }
     handleClick() {
        document.getElementsByClassName('events').text = this.state.events[0].name
     }
    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <div className="events"></div>
            </div>
        )
    }
}
