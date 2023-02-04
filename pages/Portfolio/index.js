import React from 'react'
import { AnandamGreens } from '../../components/Portfolio/AnandamGreens/AnandamGreens'
import { JaipurRugs } from '../../components/Portfolio/JaipurRugs/JaipurRugs'
import { Jamboshop } from '../../components/Portfolio/Jamboshop/Jamboshop'
import { Myteam } from '../../components/Portfolio/MyTeam/Myteam'
import { Nextholiday } from '../../components/Portfolio/NextHoliday/Nextholiday'
import { Oncart } from '../../components/Portfolio/Oncart/Oncart'
import { PortfolioBanner } from '../../components/Portfolio/PortfolioBanner'
import { Salesbot } from '../../components/Portfolio/Salesbot/Salesbot'
import { Sportasy } from '../../components/Portfolio/Sportasy/Sportasy'
import { Taxwink } from '../../components/Portfolio/Taxwink/Taxwink'
import { Tigmoo } from '../../components/Portfolio/Tigmoo/Tigmoo'
import { Travelflap } from '../../components/Portfolio/Travelflap/Travelflap'
import { WifiStudy } from '../../components/Portfolio/WifiStudy/WifiStudy'
import { Yanbal } from '../../components/Portfolio/Yanbal/Yanbal'
import { Younity } from '../../components/Portfolio/Younity/Younity'

export default function Portfolio () {
  return (
    <div>
    <PortfolioBanner />
    <Nextholiday />
    <Yanbal />
    <Jamboshop />
    <Sportasy />
    <Taxwink />
    <Myteam />
    <Tigmoo />
    <Younity />
    <Salesbot />
    <WifiStudy />
    <Travelflap />
    <Oncart />
    <AnandamGreens/>
    <JaipurRugs />
    
    </div>
  )
}
