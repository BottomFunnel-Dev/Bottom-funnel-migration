import React, { useState } from 'react'
import HireATalentDesc from '../../components/HireATalent/HireATalentDesc/HireATalentDesc'
import HireATalentDetail from '../../components/HireATalent/HireATalentDetail/HireATalentDetail'
import HireATalent from '../../components/HireATalent/HireATalentmain/HireATalentMain'
import HireATalentQue from '../../components/HireATalent/HireATalentQue/HireATalentQue'
import { currentopeningdata } from '../../Data/HireATalent'
let screens =["role","desc","que","detail"]

export default function index () {
//   const [screen, setScreen] = useState(screens[0])
// const [current, setCurrent] = useState(screens[0])

//   function pageChange(){
//    if(screen == current){
//     setCurrent 
//    }
//   }
  return (
    <div >
      {/* {
        screen == current ? (<HireATalent currentopeningdata={currentopeningdata}/>) 
        : 
      } */}
        
        <HireATalent currentopeningdata={currentopeningdata}/>
 

      {/* <button onClick={pageChange}>Next</button> */}
    </div>
  )
}
