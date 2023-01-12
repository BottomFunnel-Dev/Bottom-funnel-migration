import React from 'react'
import { TelecommunicationsCustomerApp } from './Telecommunications-Customer-App/TelecommunicationsCustomerApp'
import { TelecommunicationsFooter } from './Telecommunications-Footer/TelecommunicationsFooter'
import { TelecommunicationsHeader } from './Telecommunications-Header/TelecommunicationsHeader'

export const Telecommunications = () => {
  return (
    <div>
        <TelecommunicationsHeader />
        <TelecommunicationsCustomerApp />
        <TelecommunicationsFooter />
    </div>
  )
}
