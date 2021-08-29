import React from 'react'
import {useLocation, useParams,useHistory} from 'react-router-dom'

const Service = () => {
    const {fname,lname} =  useParams()
    const location = useLocation()
    const history =  useHistory()
   
    const func1  = () =>{
        history.goBack('/contact')
    }
    
    return (
        <>
           <h1>Service</h1> 
           <h1> FirstName = {fname} LastName = {lname} </h1>
           <h1> {location.pathname === '/service/saurabh/khandelwal' ? <button onClick = {func1} > HomePage </button>:null}  </h1>
        </>
    )
}

export default Service
