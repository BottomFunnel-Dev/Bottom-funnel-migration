import React from 'react'
import './bottomButton.css'

export const BottomButton = ({buttonText}) => {
  return (
    <div className='bottomButton' style={buttonText.buttonBack}>{buttonText.buttonContent}</div>
  )
}
