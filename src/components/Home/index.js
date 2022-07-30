import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './index.scss';
const Home = () => {
    return(
        <div className ="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br/> I'm Yike<br />
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