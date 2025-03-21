import React from 'react'
import './Category.css'

const Category = () => {
  return (
    <div>
      <section className="category_wrapper">
        <div className="container">
            <div className="row justify-content-center mx-0">
                <h3 className="mb-0">
                    Shop by Category
                </h3>
                <span className="text-white pb-5">
                    Daily Freshest Products and much more!
                </span>
                <div className="col-12 col-lg-10">
                    <div className="row justify-content-center g-4 g-lg-0">
                        <div className="col-lg-3 col-6">
                          <a href="">
                            <div className="box1 text-center">
                                <img src="./assets/1.webp" className="category_img" alt="oil"/>
                                <h6 className="fs-4 pt-2 text-white">
                                    Frozen  <br/>
                                    Foods
                                </h6>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="box2 text-center">
                                <img src="./assets/2.webp" className="category_img" alt="oil"/>
                                <h6 className="fs-4 pt-2 text-white">
                                    Dairy  <br/>
                                    Products
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                           <a href="">
                            <div className="box3 text-center">
                                <img src="./assets/3.webp" className="category_img" alt="oil"/>
                                <h6 className="fs-4 pt-2 text-white">
                                    Processed <br/>

                                    Foods
                                </h6>
                            </div>
                           </a>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="box4 text-center">
                                <img src="./assets/1.webp" className="category_img" alt="oil"/>
                                <h6 className="fs-4 pt-2 text-white">
                                    Fat &amp; Oil
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    </div>
  )
}

export default Category