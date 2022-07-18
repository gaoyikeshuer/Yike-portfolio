import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx})=>{
    return (
        <span>
            {
                strArray.map((char,i)=>(//notice that here has a space between letterClass and i+idx
                    <span key={char +i} className ={`${letterClass} _${i+idx}`}>
                     {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters