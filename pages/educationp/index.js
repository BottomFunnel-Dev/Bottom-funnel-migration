import React from 'react'
import EducationBanner from '../../components/Educationp/EducationBanner'
import Navbar from '../../components/Navbar/Navbar'

export default function Education() {
  return (
    <div>
         <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <EducationBanner/>
        
    </div>
  )
}
