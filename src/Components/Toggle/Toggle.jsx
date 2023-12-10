import React, { useContext } from 'react'
import './Toggle.css'
import { ThemeContext } from '../../context'

function Toggle() {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }
  return (
    <div className='t'>
      <i class="fa-solid fa-sun text-warning t-icon"></i>
      <i class="fa-solid fa-moon text-warning t-icon"></i>
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  )
}

export default Toggle