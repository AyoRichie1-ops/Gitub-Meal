import React from 'react'

const Hero = () => {
  return (
    <div className='hero-wrapper px-4 d-flex justify-content-center justify-content-md-start align-items-center'>
      <div className="text-start">
        <p className="display-5 text-success fs-18 fw-normal">
          Healthy Foods
        </p>
        <h1 className="text-white fw-light">
          Explore Differrent Meals
        </h1>
        <button className="btn btn-success text-white">
          <a href="#below" className="text-decoration-none text-white">
            See More Below
          </a>
        </button>
      </div>
    </div>
  )
}

export default Hero