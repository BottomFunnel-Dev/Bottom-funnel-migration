import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import { Amydus } from '../../components/Portfolio/Amydus/Amydus'
import { AnandamGreens } from '../../components/Portfolio/AnandamGreens/AnandamGreens'
import { Blueberry } from '../../components/Portfolio/Blueberry/Blueberry'
import { Blueberrytravel } from '../../components/Portfolio/Blueberrytravel/Blueberrytravel'
import { CattleCountry } from '../../components/Portfolio/CattleCountry/CattleCountry'
import { Ciana } from '../../components/Portfolio/Ciana/Ciana'
import { JaipurRugs } from '../../components/Portfolio/JaipurRugs/JaipurRugs'
import { Jamboshop } from '../../components/Portfolio/Jamboshop/Jamboshop'
import { MukundaGeneral } from '../../components/Portfolio/MukundaGeneral/MukundaGeneral'
import { Myteam } from '../../components/Portfolio/MyTeam/Myteam'
import { Nextholiday } from '../../components/Portfolio/NextHoliday/Nextholiday'
import { Oncart } from '../../components/Portfolio/Oncart/Oncart'
import { Physicsfunshop } from '../../components/Portfolio/Physicsfun shop/Physicsfunshop'
import { PortfolioBanner } from '../../components/Portfolio/PortfolioBanner'
import { Roshiwelness } from '../../components/Portfolio/RoshiWelness/Roshiwelness'
import { Salesbot } from '../../components/Portfolio/Salesbot/Salesbot'
import { SPJElectronics } from '../../components/Portfolio/SPJ Electonics/SPJElectronics'
import { Sportasy } from '../../components/Portfolio/Sportasy/Sportasy'
import { Taxwink } from '../../components/Portfolio/Taxwink/Taxwink'
import { Tigmoo } from '../../components/Portfolio/Tigmoo/Tigmoo'
import { Travelflap } from '../../components/Portfolio/Travelflap/Travelflap'
import { Voylla } from '../../components/Portfolio/Voylla/Voylla'
import { WifiStudy } from '../../components/Portfolio/WifiStudy/WifiStudy'
import { Yanbal } from '../../components/Portfolio/Yanbal/Yanbal'
import { Younity } from '../../components/Portfolio/Younity/Younity'

export default function Portfolio () {
  return (
    <div>

    <Navbar
    productMount={{
      navMount: false,
    }}
    navredux={{
      color: "white",
      logo: true,
    }}
  />
    <PortfolioBanner />
    <Nextholiday />
    <Ciana />
    <Jamboshop />
    <Sportasy />
    <Travelflap />
    <Oncart />
    <SPJElectronics />
    <Blueberry />
    <Blueberrytravel />
    <MukundaGeneral />
    <AnandamGreens/>
    <Voylla />
    <CattleCountry />
    <Roshiwelness />
    <JaipurRugs />
    <Yanbal />
    <Physicsfunshop />
    <Amydus />
    <Myteam />
   <Taxwink />

   
    
    <Tigmoo />
    <Younity />
    <Salesbot />
    <WifiStudy />
  
   
 
    
    
    
 
    
  
  
   
   
   
    </div>
  )
}
