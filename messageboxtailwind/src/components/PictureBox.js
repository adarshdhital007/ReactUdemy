import React from 'react'
import image from '../images/images.jpg'

const PictureBox = () => {
  return (
    <div >
      <div className='p-4 color-black ring-black rounded-full ring-4' style={{
  width: '50px', 
  height: '50px',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  borderRadius: '50%', 
}}>
</div>
    </div>
  )
}

export default PictureBox