import React from 'react'
import './WhyUs.css'

const WhyUs = () => {
  return (
    <div>
        <section className="logo_wrapper">
        <div className="container">
            <div className="row align-items-center g-4 mx-0">
                <div className="col-lg-6">
                    <h3 className="fs-4 mb-0 pb-1 fw-bold text-white">
                        Download Saksham App
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, vel.
                    </p>

                    <div classNameName='d-flex gap-2'>

                    <img src="../assets/google.png" width="140" alt="app button"/>
                    <img src="../assets/apple.png" width="140" alt="app button"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="text-lg-center ">
                        <a href="" classNameName="Btn fw-bold"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className=" bg-black py-5">

<div className="container ">
    <div className="row g-3 g-lg-5 mx-0">
        <div className="col-lg-5 col-12">
            <h3>
                Why US?
            </h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, animi.
            </p>
            <img src="../assets/whychose-image.webp" height="350" className="w-100 object-fit-contain" alt="why"/>
        </div>
        <div className="col-lg-7 col-12">
            <div className="ps-lg-5">
                <div className="d-flex pb-5">
                   
                <i className="fa-solid fa-circle mt-1 pe-3"></i>

                    <div>
                        <h5 className="text-white">
                            Great Wholesale price
                        </h5>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, animi.
                        </p>
                    </div>
                </div>
                <div className="d-flex pb-5">
                   
                    <i className="fa-solid fa-circle mt-1 pe-3"></i>
                    <div>
                        <h5 className="text-white">
                            Great Wholesale price
                        </h5>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, animi.
                        </p>
                    </div>
                </div>
                <div className="d-flex pb-5">
               
                    <i className="fa-solid fa-circle mt-1 pe-3"></i>
                    <div>
                        <h5 className="text-white">
                            Great Wholesale price
                        </h5>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, animi.
                        </p>
                    </div>
                </div>
                <img src="../assets/whychoose-delevery.png" className="w-100" alt="bike"/>
            </div>
        </div>
    </div>

</div>
</section>
    <hr classNameName='text-white m-0' />


    </div>
  )
}

export default WhyUs