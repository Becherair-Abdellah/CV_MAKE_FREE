import React from 'react'
import Name from './Name'
import Summary from './Summary'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'
import Languages from './Languages'
import Education from './Education'
import Hobies from './Hobies'
function Cv() {
  return (
    <div className='w-[794px] h-full bg-gray-100 mx-auto p-4'>
      <div className='children' >
        <div className="top flex gap-16 items-center">
          <div className="twocompo">
            <Name/>
            <Summary/>
          </div>
         
          <Contact/>
          
        </div>
        <div className="bottom grid grid-cols-2">
          <div className='projects' >
            <Projects/>
          </div>
          <div className="allcompon">
            <Skills/>
            <Languages/>
            <Education/>
            <Hobies/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cv
