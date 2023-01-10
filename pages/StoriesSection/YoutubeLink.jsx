import React from 'react'
import './youtubeLink.css'
const YoutubeLink = ({embedId}) => {
  return (
    <div className='youtubePop'>
       <iframe
      width="850"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    </div>
  )
}

export default YoutubeLink
