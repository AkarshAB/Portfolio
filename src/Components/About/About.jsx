import React from 'react'
import './About.css'
import pic from '../../pic.png'
function About() {
  return (
    <>
      <div className="a">
        <div className="a-left">
          <div className="a-bg"></div>
          <img src={pic} alt="" className="a-img" />
        </div>

        <div className="a-right">
          <div className="a-right-wrapper">
            <h2 className='a-intro'>About Me</h2>
            <p>I'm Akarsh, an enthusiastic web developer eager to make a mark in the industry. While I'm new to the field, my passion for web development drives me to continuously learn and improve. I'm a problem solver with an eye for design, and I'm excited to contribute to the world of web development. Let's build something amazing together!</p>
            

            

          </div>
        </div>

      </div>
    </>
  )
}

export default About