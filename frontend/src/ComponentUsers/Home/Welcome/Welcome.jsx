import React, { useEffect, useRef } from "react";
import "./Welcome.css"; // Assuming you have the CSS styles in a separate file
import Image from "../../../Asserts/blog.svg";
import Image2 from "../../../Asserts/1298800.svg";
import Image3 from "../../../Asserts/3141156.svg";
import Image4 from "../../../Asserts/blog.svg";
import Image5 from "../../../Asserts/service.svg";


const Welcome = ({ stills, itemLength, getAllStills }) => {
    return (
      <div className="bubbleContainer">
        <div className="bubbles">
          <div className="jumbotron">
            <h1 className="display-4 home-page-header">
              Welcome to 10js Media Production
            </h1>
            <p className="lead">We make memories last forever</p>
          </div>
          <section class="bubble-holder">
            <div class="bubble-1 bubble-container bubble-animation-x">
              <div class="bubble-large bubble-animation-y">
                {/* <img src={Image} alt="" /> */}
              </div>
            </div>
  
            <div class="bubble-2 bubble-container bubble-animation-x">
              <div class="bubble-large bubble-animation-y">
              {/* <img src={Image2} alt="" /> */}
  
              </div>
            </div>
  
            <div class="bubble-3 bubble-container bubble-animation-x">
              <div class="bubble-large bubble-animation-y">
              {/* <img src={Image3} alt="" /> */}
  
              </div>
            </div>
  
            <div class="bubble-4 bubble-container bubble-animation-x">
              <div class="bubble-small bubble-animation-y">
              {/* <img src={Image4} alt="" /> */}
  
              </div>
            </div>
  
            <div class="bubble-5 bubble-container bubble-animation-x">
              <div class="bubble-small bubble-animation-y">
              {/* <img src={Image5} alt="" /> */}
  
              </div>
            </div>
  
            <div class="bubble-6 bubble-container bubble-animation-x">
              <div class="bubble-small bubble-animation-y">
              {/* <img src={Image4} alt="" /> */}
  
              </div>
            </div>
  
            <div class="bubble-7 bubble-container bubble-animation-x">
              <div class="bubble-small bubble-animation-y">
              {/* <img src={Image} alt="" /> */}
  
              </div>
            </div>
  
            <div class="bubble-8 bubble-container bubble-animation-x">
              <div class="bubble-small bubble-animation-y"></div>
            </div>
  
            <div class="bubble-9 bubble-static">
            </div>
            <div class="timestwo">
            <img src={Image2} alt="" />
            </div>
            <div class="bubble-10 bubble-static">
            {/* <img src={Image4} alt="" /> */}
  
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Welcome;