import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

function Contact() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const [done, setDone] = useState(false)

  const formRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_portfolio', 'template_2tot4ma', formRef.current, 'KO13da_GPdAzIRvMy')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item d-flex align-items-center">
              <i class="fa-solid fa-phone"></i>
              &nbsp;
              <div>+91 8921400258</div>
            </div>
            <div className="c-info-item d-flex align-items-center">
              <i class="fa-solid fa-envelope"></i>
              <div>
                &nbsp; akarshab361@gmail.com
              </div>
            </div>
            <div className="c-info-item d-flex align-items-center flex">
              <div>
                <i class="fa-solid fa-home"></i>
              </div>

              <div>&nbsp; Alayil House,
                P.O. Kothaparambu, Kerala,
                India.
                PIN : 680668</div>
            </div>
            <div className="resume">
              
<a href="https://drive.google.com/file/d/1enOkwjFKmpQS5rwsAq60OUPWN3S7AdZf/view?usp=sharing" className='btn btn-success' download={'AkarshAB'} target='_blank' >Download Resume <i className='fa-solid fa-download'></i></a>

            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch.</b> Always available for freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>


            <div className="label form-floating w-75">
              <input style={{backgroundColor : darkMode && "#333"}} className='form-control mb-3 border-0 border-bottom border-dark' type="text" placeholder='Name' name='user_name' />
              <label htmlFor="" className='form-floating'>Name</label>

            </div>

            <div className="label form-floating w-75">
              <input style={{backgroundColor : darkMode && "#333"}} className='form-control mb-3 border-0 border-bottom border-dark' type="text" placeholder='Subject' name='user_subject' />
              <label htmlFor="">Subject</label>
            </div>


            <div className="label form-floating w-75">
              <input style={{backgroundColor : darkMode && "#333"}}  className='form-control mb-3 border-0 border-bottom border-dark' type="text" placeholder='Email' name='user_email' />
              <label htmlFor="">
                Email
              </label>
            </div>


            <div className="label form-floating w-75 ">
              <textarea  style={{backgroundColor : darkMode && "#333"}} className='form-control mb-5 border-0 border-bottom border-dark' placeholder='Message' name="message" id=""></textarea>
              <label htmlFor="">Message</label>
            </div>


            <div className='w-75 text-center'><button className='btn btn-success w-50'>Submit</button> <br />
              {done && "Thank you for contacting... Will reply soon :)"}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact