import React from 'react'
import './Projects.css'
import { projects } from '../../data'
// import p1 from '../../p1.png'

function Projects({ img, link }) {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circles ms-2"></div>
        <div className="p-circles"></div>
        <div className="p-circles"></div>
      </div>

      <a href={link} target='_blank'>
        <img src={img} alt="" className='p-img' />
      </a >

    </div>
  )
}

export default Projects