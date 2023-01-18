import React from 'react';
import styles from './youtubeLink.module.css';
const YoutubeLink = ({embedId}) => {
  return (
    <div className={styles.youtubePop}>
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
