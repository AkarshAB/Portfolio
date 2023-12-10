import React from 'react'
import './Intro.css'
import propic from '../../propic.png'

function Intro() {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Akarsh</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Frontend Developer</div>
                {/* <div className="i-title-item">Photographer</div> */}
              </div>
            </div>

            <div className="i-desc">
              I design and develop  services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
            </div>

          </div>
        </div>
        <div className="i-right">
        <div className="i-bg"></div>
          <img src={propic} alt="" className="i-img" />
        </div>
      </div>
    </>
  )
}

export default Intro