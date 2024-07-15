import React, { useState, useEffect } from 'react';
import './AimationText.scss'; 


  


const AimationText = () => {
    const [slogan, setSlog]= useState(null)
    function getRandomSlogan() {
        const slogans = [
            "Capturing Moments, Creating Memories",
            "Live the Moment, Frame the Memory",
            "Every Shot Tells a Story",
            "Life in Focus",
            "Freeze Time, Feel Alive",
            "See the World, Live the Experience",
            "Moments that Matter",
            "Where Life Meets Lens",
            "Snapshots of Joy",
            "Cherish Every Moment",
            "Focus on What Matters",
            "Eternalize Your Moments",
            "A Picture is Worth a Thousand Words",
            "Frame the Beauty",
            "Capture Life's Wonders",
            "Preserve the Present",
            "Life Through a Lens",
            "Timeless Treasures",
            "Moments Frozen in Time",
            "Picture Perfect Memories",
            "Reflections of Reality",
            "Where Moments Become Memories",
            "Frame Your Story",
            "See the Beauty in Every Moment",
            "Life's Precious Moments",
            "Memories Captured Forever",
            "Focus on the Journey",
            "Cherished Captures",
            "Moments that Last a Lifetime",
            "Your Life, Your Story",
            "Life's Little Moments",
            "Capturing the Heartbeat of Life",
            "Experience Life Through the Lens",
            "The Art of Photography",
            "Moments that Take Your Breath Away",
            "Live, Love, Capture",
            "The Magic of Moments",
            "Through the Eyes of a Lens",
            "Life's Fleeting Moments",
            "Your Memories, Our Passion",
            "Treasure Every Moment",
            "Where Every Click Counts",
            "Life's Finest Moments",
            "The Essence of Time",
            "Memory Makers",
            "Lens of Life",
            "Timeless Snapshots",
            "In the Blink of an Eye",
            "Moments to Remember",
            "Creating Lasting Memories"
          ];
      
        const randomIndex = Math.floor(Math.random() * slogans.length);
        setSlog(slogans[randomIndex])
      }
    
      useEffect(() => {
        if(slogan === null){
            getRandomSlogan()
        }
      
        return () => {
          
        }
      }, [slogan])
  return (
    <div className='AimationText'>
    <div className="container">
     <h1 className='slogan'>{slogan}</h1>
    </div>
    </div>
  );
}

export default AimationText;
