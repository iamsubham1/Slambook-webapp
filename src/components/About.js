import React from 'react'
import img from '../book.svg'

const About = () => {
    return (
        <div className='Aboutpage'>
            <img src={img} width='35%' />
            <div className='abouttxt'>
                <h1>Aim of the project</h1>
                <h4>This is a website that allows you to go back in time by creating a slambook that you can share with your friends to fill.</h4>

            </div>

        </div>
    )
}

export default About
