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
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <LoggedInRoute exact path='/' component={Room} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}


export default App
