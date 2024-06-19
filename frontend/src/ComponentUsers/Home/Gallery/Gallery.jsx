import React, { useState, useEffect } from "react";
import "./Gallery.scss";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fadeBackground, setFadeBackground] = useState(false); // State for fading background

  // Array of image objects containing URLs and captions
  const images = [
    {
      url: "https://www.marthastewart.com/thmb/JT8AeN7LTuIJhvN8ksNztiArjBw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rochelle-nathan-wedding-confetti-0820-9e79ef88bced4d76b18d7822b7e77677.jpg",
      caption: "Caption Text for Image 1",
    },
    {
      url: "https://media.architecturaldigest.com/photos/65e7bfaf9257bd9a533e18eb/16:9/w_2560%2Cc_limit/0350E&J.jpg",
      caption: "Caption Text for Image 2",
    },
    {
      url: "https://venueatmidrand.co.za/wp-content/uploads/2019/09/shutterstock_1262894575-1024x600.jpg",
      caption: "Caption Text for Image 3",
    },
    {
      url: "https://blog.compassion.com/wp-content/uploads/2020/01/Birthdays-Around-the-World-DR-Facebook.jpg",
      caption: "Caption Text for Image 3",
    },
    {
      url: "https://mg.co.za/wp-content/uploads/2022/07/2cd9d763-000_1849g5.jpeg",
      caption: "Caption Text for Image 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change interval time here (in milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    showSlides(slideIndex);
    setFadeBackground(true); // Activate fading background when the slide changes
    const timeout = setTimeout(() => setFadeBackground(false), 500); // Reset fading background after 500ms
    return () => clearTimeout(timeout);
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => (prevIndex + n) % images.length);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (slides.length === 0 || dots.length === 0) {
      return;
    }
    if (n >= images.length) {
      setSlideIndex(0);
    }
    if (n < 0) {
      setSlideIndex(images.length - 1);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n].style.display = "block";
    dots[n].className += " active";
  }

  return (
    <div className={`SlideshowGalleryContainer ${fadeBackground ? 'fade' : ''}`}>
      <h1 className="homePageTitle">Gallery</h1>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div key={index} className="mySlides fade">
            <img src={image.url} alt={`Slide ${index + 1}`} />
            <div className="text">{image.caption}</div>
          </div>
        ))}
        <div className="nextPrevActionButtons">
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === slideIndex ? "active" : ""}`}
                onClick={() => currentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <br />

      <div style={{ display: "none" }}>
        {images.map((_, index) => (
          <span
            key={index}
            className="dot"
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
