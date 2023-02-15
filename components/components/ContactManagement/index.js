import React from 'react'

import { ContactManagementBanner } from './ContactManagementBanner'
import { ContactManagementDeals } from './ContactManagementDeals';
import { ContactManagementLowerBanner } from './ContactManagementLowerBanner';
import { ContactManagementMaximize } from './ContactManagementMaximize';
import { ContactManagementPersonalize } from './ContactManagementPersonalize';



export default function ContactManagement () {

  return (
    <div>
    <ContactManagementBanner />
    <ContactManagementPersonalize />
    <ContactManagementDeals />
    <ContactManagementMaximize />
    <ContactManagementLowerBanner />
   
    
    </div>
  )
}
