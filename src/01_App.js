import React from 'react'
import {Switch,Route} from 'react-router-dom'
import About from './02_About'
import Contact from './03_Contact'
import User from './05_User'
import Search from './06_Search'
import Service from './04_Service'
import NavBar from './07_NavBar'

const App = () => {
    return (
        <>
        <NavBar/>

        <Switch>
            <Route exact path = '/' component = {()=> <About name = 'saurabh'/> }  />
            <Route exact path = '/contact' render = {()=> <Contact name = 'khandelwal'/> }  />
            <Route exact path = '/service/:fname/:lname' component  = {Service} />
            <Route exact path = '/user' component  = {User} />
            <Route exact path = '/search' component  = {Search} />
        </Switch>
        
            
        </>
    )
}

export default App
