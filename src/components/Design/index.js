import './index.scss'
import { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import img1 from '../../assets/pictures/1.jpg'
import img2 from '../../assets/pictures/2.jpg'
import img3 from '../../assets/pictures/3.jpg'
import img4 from '../../assets/pictures/4.jpg'
const images = [img1,img2,img3,img4]
const Design = () => {
    const [data, setData] = useState({img:'', i:0})
    const viewImage = (img,i) =>{
     setData({img,i})
    }
    const imgAction = (action) =>{
        let i = data.i;
        if(action === 'next-img'){
            setData({img:images[i+1],i:i+1})
        }
        if(action ==='previous-img'){
            setData({img:images[i-1], i:i-1})
        }
        if(!action){
            setData({img:'', i:0})
        }
    }
    return(
        <>
       
        <div className='container design-page'>
        {data.img &&
        <div style={{width:'100%',
                 height: '100vh',
                background: 'black',
                position:'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                overflow: 'hidden'}}>
         <button onClick={() => imgAction()} style={{position:'absolute', top:'10px', right:'10px'}}>X</button>
         <button onClick={()=> imgAction('previous-img')}>Previous</button>
         <img src= {data.img} alt='' style = {{width:'auto', maxWidth: '90%', maxHeight: '90%'}}/>
         <button onClick={()=> imgAction('next-img')}>Next</button>
        </div>
        }
           
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
    <Masonry columnsCount={3} gutter="10px">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt=""
          style={{width: "100%", display: "block", cursor: "pointer"}}
          onClick = {()=>viewImage(image,i)}
        />
      ))}
    </Masonry>
  </ResponsiveMasonry>
        </div>
        </>
    )
}

export default Design