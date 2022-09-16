import './index.scss'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import img1 from '../../assets/pictures/1.jpg'
import img2 from '../../assets/pictures/2.jpg'
import img3 from '../../assets/pictures/3.jpg'
import img4 from '../../assets/pictures/4.jpg'
const images = [img1,img2,img3,img4]
const Design = () => {
    return(
        <>
        <div className='container design-page'>
            <div className='text-zone'>
               

            </div>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
    <Masonry columnsCount={3} gutter="10px">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt=""
          style={{width: "100%", display: "block"}}
        />
      ))}
    </Masonry>
  </ResponsiveMasonry>
        </div>
        </>
    )
}

export default Design