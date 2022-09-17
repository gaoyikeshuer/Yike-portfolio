import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';//not familiar with these two func
import Typewriter from 'typewriter-effect';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ','Y', 'i', 'k', 'e',' ', 'G', 'a', 'o']
    useEffect(() => {
        return ()=> setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    return(
    
        <div className ="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>
                    H
                    </span>
                    <span className={`${letterClass} _1`}>
                    i,
                    </span>
                    <br />
            <span className={`${letterClass} _2`}>I</span>
            <span className={`${letterClass} _3`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={4}
            />
            <br/>
              <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}> </span>
            <span className={`${letterClass} _16`}>a</span>


                    
                    <Typewriter options={{
    strings: ['Designer', 'Programmer','Web developer'],
    autoStart: true,
    loop: true,
  }}
                    />
                </h1>
                 <Link to = '/Yike-portfolio/about' className="flat-button"> CONTACT ME </Link>
            </div>

        </div>
    )
};
export default Home;