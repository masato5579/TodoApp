import React from 'react'
import LoggedInRoute from './LoggedInRoute'
import { AuthProvider } from './AuthService'


import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Rooms/Room'



import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'



const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path='/' component={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}


export default App
