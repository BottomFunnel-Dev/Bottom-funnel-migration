import React from 'react'
import { EducationAdministration } from './EducationAdministration';
import { EducationBanner } from './EducationBanner'
import { EducationGroupwise } from './EducationGroupwise';
import { EducationITteams } from './EducationITteams';
import { EducationSupport } from './EducationSupport';

export default function Education () {
  return (
    <div>
    <EducationBanner />
    <EducationSupport />
    <EducationITteams />
    <EducationAdministration />
    <EducationGroupwise />    
    </div>
  )
}
