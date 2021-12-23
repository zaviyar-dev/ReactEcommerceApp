import {React, createContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {auth} from '../utils/firebase/indexxx'


const authContext = createContext(null)

const AuthProvider = ({children}) => {
const history = useHistory()   
const [user, setuser] = useState()
useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        setuser(user)
    })
}, [])
const logout = () => {
    auth.signOut().then(()=>{
        setuser(null)
        history.push('./login')
    })
}
    return (
        <authContext.Provider value={{user, logout}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider
export{authContext}
