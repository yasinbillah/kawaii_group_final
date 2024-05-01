import React from 'react'
import AboutTop from '../../components/AboutTop/AboutTop'
import Mission from '../../components/Mission/Mission'
import AboutSlider from '../../components/aboutSlider/aboutSlider'
import Vision from '../../components/Vision/Vision'

const Pages = () => {
  return (
    <div className='mt-8'>
      <AboutTop />
      <Mission />
      <Vision />
      <AboutSlider />
    </div>
  )
}

export default Pages
