import React, { useEffect, useState } from 'react'
const AuthContext = React.createContext()

import firebase from './config/firebase'
import 'firebase/auth'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    })

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthProvider,
    AuthContext
}