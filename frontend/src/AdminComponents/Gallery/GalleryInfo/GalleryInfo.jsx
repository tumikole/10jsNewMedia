import React, { useRef, useEffect, useState } from 'react';
import './GalleryInfo.scss'
import Video from '../../../Asserts/photographers-and-photography-studios-advertisement-commercial_1080p.mp4'
import Img from '../../../Asserts/wedding.webp'
import Img1 from '../../../Asserts/wedding1.webp'
import Img2 from '../../../Asserts/wedding3.jpg'


const GalleryInfo = () => {

  const photos = [
    { id: 1, title: 'Landscape', imageUrl: Img },
    { id: 2, title: 'Portrait', imageUrl: Img1 },
    { id: 3, title: 'Nature', imageUrl: Img2 },
    { id: 1, title: 'Landscape', imageUrl: Img },
    { id: 2, title: 'Portrait', imageUrl: Img1 },
    { id: 3, title: 'Nature', imageUrl: Img2 }, 
    { id: 1, title: 'Landscape', imageUrl: Img },
    { id: 2, title: 'Portrait', imageUrl: Img1 },
  ];

  // const videoRef = useRef(null); // Reference to the video element
  // const [isMuted, setIsMuted] = useState(true); // State to manage video mute/unmute

  // useEffect(() => {
  //   // Auto play video when component mounts
  //   videoRef.current.play().catch(error => {
  //     // Handle autoplay error (e.g., user interaction required)
  //     console.error('Autoplay error:', error);
  //   });
  // }, []);

  // const toggleMute = () => {
  //   // Toggle mute/unmute state
  //   setIsMuted(!isMuted);
  //   videoRef.current.muted = !isMuted;
  // };
  return (
    <div className='admingalleryInfo'>
      {/* <div className="video-background">
        <video ref={videoRef} className="video-bg" loop muted playsInline>
          <source src={Image1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      <section id="portfolio">
        <div className="photo-grid">
          {photos.map(photo => (
            <div>
              <img key={photo.id} alt={photo.title} src={photo.imageUrl} />
              <h2>{photo.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>

  )
}

export default GalleryInfo