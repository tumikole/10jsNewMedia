import React, { useRef, useEffect, useState } from 'react';
import './GalleryInfo.scss'
import Video from '../../../Asserts/photographers-and-photography-studios-advertisement-commercial_1080p.mp4'
import Img from '../../../Asserts/wedding.webp'
import Img1 from '../../../Asserts/wedding1.webp'
import Img2 from '../../../Asserts/wedding3.jpg'
import AimationText from './AimationText';


const GalleryInfo = () => {


  return (
    <div className='admingalleryInfo'>
      <AimationText />
      <div class="floor"></div>

      <div class="parent-gallery">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="cardholder">
                <div class="card">
                  <img src={Img} />
                  <p class="desc">Lorem Ipsum dolor</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="cardholder">
                <div class="card">
                  <img src={Img1} />
                  <p class="desc">Lorem Ipsum dolor</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="cardholder">
                <div class="card">
                  <img src={Img2} />
                  <p class="desc">Lorem Ipsum dolor</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="cardholder">
                <div class="card">
                  <img src={Img} />
                  <p class="desc">Lorem Ipsum dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default GalleryInfo