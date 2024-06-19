import React from 'react'
import './Groupies.css'

export const Groupies = () => {
  return (
    <div className='groupies'>
          <h1 class="text-accent">pricing</h1>
    <p class="fs-500">plans that work for everyone</p>
    <div class="plans flow-content">
        <div class="plan plan--light">
            <h2 class="plan-title">basic</h2>
            <p class="plan-price">$4.99<span>/month</span></p>
            <p class="plan-description">
                Eleifend cursus volutpat risus convallis nam sed
                quam sollicitudin eget leo at erat cursus justo
            </p>
            <a href="#" class="btn">Join Now</a>
        </div>

        <div class="plan plan--accent">
            <h2 class="plan-title">super</h2>
            <p class="plan-price">$19.99<span>/month</span></p>
            <p class="plan-description">
                Eleifend cursus volutpat risus convallis nam sed
                quam sollicitudin eget leo at erat cursus justo
            </p>
            <a href="#" class="btn">Join Now</a>
        </div>

        <div class="plan plan--light">
            <h2 class="plan-title">Enterprise</h2>
            <p class="plan-price">$49.99<span>/month</span></p>
            <p class="plan-description">
                Eleifend cursus volutpat risus convallis nam sed
                quam sollicitudin eget leo at erat cursus justo
            </p>
            <a href="#" class="btn">Join Now</a>
        </div>
    </div>
    <p class="fs-500 mb">Need something different? No problem!</p>
    <a href="#" class="btn btn-mb">Get in touch</a>
    </div>
  )
}
