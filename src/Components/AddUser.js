import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {withRouter} from 'react-router-dom';
const AddUser = () => {
    return (
        <Router>
<Route
 path='/Adduser' 
 exact 
 render = {(props)=> (
    <form>
    <text type='name'>User Name</text>
    <input type='name'></input>
    <text type='name'>Email</text>
    <input type='name'></input>
</form>
)} />
    </Router>
    )}

export default withRouter(AddUser)
