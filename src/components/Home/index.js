import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','Y', 'i', 'k', 'e',' ', 'G', 'a', 'o']
    useEffect(() => {
        return ()=> setTimeout(() => {
          setLetterClass('text-animate-hover')}, 4000)
      }, []) // why there is a ()=> between return and setTimeout? and how to use useEffect?

    return(
        <div className ="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                   
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
               <AnimatedLetters  letterClass ={letterClass}
                    strArray = {nameArray}
                    idx = {15}
                    /><br />
                  
                    I'm a
                    
                    <Typewriter options={{
    strings: ['Architectural designer', 'Programmer','Web developer'],
    autoStart: true,
    loop: true,
  }}
                    />
                </h1>
                 <Link to = '/contact' className="flat-button"> CONTACT ME </Link>
            </div>

        </div>
    )
};
export default Home;