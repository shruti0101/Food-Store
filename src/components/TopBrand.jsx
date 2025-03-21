import React from 'react'
import Slider from 'react-slick'
import './TopBrand.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TopBrand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }

  return (
    <div>
      <section className="logo_wrapper">
        <div className="container">
          <h2 className="text-center pb-5">Top Brands across </h2>
          <Slider {...settings}>
            <div className="slide">
              <img src="../assets/partner-logo.png" alt="Partner Logo" />
            </div>
            <div className="slide">
              <img src="../assets/partner-logo.png" alt="Partner Logo" className='img-fluid' />
            </div>
            <div className="slide">
              <img src="../assets/partner-logo.png" alt="Partner Logo" />
            </div>
            <div className="slide">
              <img src="../assets/partner-logo.png" alt="Partner Logo" />
            </div>
            <div className="slide">
              <img src="../assets/partner-logo.png" alt="Partner Logo" />
            </div>
            <div className="slide">
              <img src="../assets/partner-logo.png" alt="Partner Logo" />
            </div>
            <div className="slide">
              <img src="../assets/partner-logo.png" alt="Partner Logo" />
            </div>
            <div className="slide">
              <img src="../assets/partner-logo.png" alt="Partner Logo" />
            </div>
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default TopBrand