import React from 'react'
import { Button} from 'react-bootstrap';
import { withRouter } from "react-router-dom";



function HomePage(props) {
    return (
        <div>
            Welcome to pop-ups page <Button onClick={() => props.history.push('/all')}>Enter</Button>
        </div>
    )
}


export default withRouter(HomePage)
