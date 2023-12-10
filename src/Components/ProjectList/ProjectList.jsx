import React from 'react'
import Projects from '../Projects/Projects'
import './ProjectList.css'
import { projects } from '../../data'
projects
function ProjectList() {
  return (
    <>
    <div className="pl">
      <div className="pl-texts">
        <h1 className='pl-title'>Projects</h1>
      </div>
      <div className="pl-list">

        {
          projects.map ((item) => (
            <Projects key={item.id} img={item.img} link={item.link}/>
          ))
        }

      </div>
    </div>
    </>
  )
}

export default ProjectList