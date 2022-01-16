import React from 'react'
import {ArrowBack } from '@material-ui/icons'
import {Link,NavLink} from 'react-router-dom'
import { } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import './comment.css'
export default withRouter(({ history }) => {
    return (
        <div className="commentbar">
           
            <div className="commentiico">
                
            <ArrowBack onClick={() => history.goBack()}/>
            </div>
           
            <div className="commenttext">
            <h3>NEWS COMMENTARY</h3>
        </div>
        </div>
    )
});



