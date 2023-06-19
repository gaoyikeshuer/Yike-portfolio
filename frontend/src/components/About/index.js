import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';

const About = () => 
{
    
    const [letterClass, setLetterClass] = useState('text-animate')
useEffect(() => {
    return ()=> setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                 <AnimatedLetters 
                 letterClass={letterClass}
                 strArray={['A','b','o','u','t',' ','m','e']}
                 idx={17}
                 />
                </h1>
                <p>
                    I gradauted from Shanghai University. Now I am a master student at Trinity.
                </p>
            </div>
        </div>
    )
}

export default About;