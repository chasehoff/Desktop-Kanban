import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../panels/Login'
import SignUp from '../panels/SignUp'

class Routes extends Component {
    render() {
        // return <Login />
        return(
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={SignUp} />
            </Switch>
        )
    }
}
export default Routes