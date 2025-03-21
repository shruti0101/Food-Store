import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div>
        <section className="home_wrapper banner_classes">
        <div className="container">
            <div className="row mx-0">
                <div className="col-lg-6">
                    <div>
                        <h2 className="top_slogen fw-bold">
                            Premium Quality
                        </h2>
                        <h3 className="home_banner_heading">
                            Frozen Foods
                        </h3>
                        <p className="pe-lg-5 fs-4 text-end me-lg-5">
                            Delivered to Your Doorstep!
                        </p>
                        <div className="mt-4">
                            <a href="#" className="btn_app fw-bold">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                  <img src="../assets/mobile-image.png" className="img-fluid mobile_img w-100" alt="banner"  />
                

                </div>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Home