import React, { useContext } from 'react'
import { Navigate,useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { Spinner } from 'flowbite-react'


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='text-center'>
            <Spinner aria-label="Center-aligned spinner" className="mx-auto" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace  />
    }

    if(user){
        return children;
    }

}

export default PrivateRoute