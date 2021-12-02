import React from 'react'
import NavBar from "./Navbar"
import HeroSection from "./Herosection"
import AppSection from './Appsection'
import CardSection from './Cardsection'
import Footer from './Footersection'
const App = ()=>{
    return(
        <div>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )
}

export default App;