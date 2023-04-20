import React from 'react'
import Navbar from './Navbar'
import HomeText from './HomeText'
import About from './About'
import Scroll from './Scroll'

const Container = () => {
    return (
        <>
            <Navbar />
            <div id='container1'>
                <div id='Home' className='Home'>
                    <HomeText />
                    <Scroll />
                </div>
                <div id='About'>
                    <About />
                    <Scroll />
                </div>
                <div id='Inspiration'><Scroll /></div>
                <div id='Author'><Scroll /></div>
                <div id='Help'><h2>help part</h2></div>
            </div>
        </>
    )
}

export default Container
