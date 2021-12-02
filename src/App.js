import React from 'react'
import NavBar from "./Navbar"
import MastHead from './Masthead'
import Portfolio from './Portfolio'
import About from './About'
import ContactMe from './Contactme'
const App = () =>{
    return(
        <div>
            <NavBar/>
            <MastHead/>
            <Portfolio/>
            <About/>
            <ContactMe/>
        </div>
    )
}

export default App