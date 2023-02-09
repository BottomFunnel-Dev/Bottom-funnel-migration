import React from 'react'
import "./AiContentApplowerbanner.css"
import Image from 'next/image';

export const AiContentApplowerbanner = () => {
  return (
    <div className='aicontentlowerbannermain'>
      <Image
          src={'Images/AiContentsolution/bannersBackgrounds/Rectangle line.webp'}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
    </div>
  )
}

