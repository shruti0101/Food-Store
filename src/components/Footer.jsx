import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
<footer className="footer_wrapper">
        <div className="container">
            <div className="row my-3 pb-3 g-4">
                <div className="col-lg-4 col-12 col-md-12">
                    <div>
                    <a href="index.html">
                        <img src="assest/images/icons/sakshum-logo.png" width="140" alt=""/>
                    </a>
                        <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, excepturi.</p>
                    </div>
                    <h6 className="text-white">
                        Follow Us
                    </h6>
                    <div>
                        <ul className="d-flex list-unstyled ps-0">
                            <li><a href="">
                                    <img src="../assets/facebook.svg" className="img_social rounded-5" alt="facebook"/>
                                </a></li>
                            <li><a href="">
                                    <img src="../assets/x.png" className="img_social" alt="facebook"/>
                                </a></li>
                            <li><a href="">
                                    <img src="../assets/instagram.png" className="img_social" alt="facebook"/>
                                </a></li>
                            <li><a href="">
                                    <img src="../assets/linkedin.png" className="img_social" alt="facebook"/>
                                </a></li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-2 col-6 col-md-4">
                    <h5 className="text-white">
                        Company
                    </h5>
                    <ul className="list-unstyled ps-0">
                        <li className="footer_li"><a href="index.html" className="footer_anchor">
                                Home
                            </a></li>
                        <li className="footer_li"><a href="about-us.html" className="footer_anchor">
                                About Us
                            </a></li>
                        <li className="footer_li"><a href="blogs.html" className="footer_anchor">
                                Blogs
                            </a></li>
                        <li className="footer_li"><a href="contact-us.html" className="footer_anchor">
                                Contact Us
                            </a></li>
                        <li className="footer_li"><a href="testimonials.html" lass="footer_anchor">
                                Testimonials
                            </a></li>

                    </ul>
                </div>
                <div className="col-lg-2 col-6 col-md-4">
                    <h5 className="text-white">
                        Quick Links
                    </h5>
                    <ul className="list-unstyled ps-0">
                        <li className="footer_li"><a href="product.html" className="footer_anchor">
                                Products
                            </a></li>
                        <li className="footer_li"><a href="insurance.html" className="footer_anchor">
                                Insurance
                            </a></li>
                        <li className="footer_li"><a href="faq.html" className="footer_anchor">
                                FAQ's
                            </a></li>
                        <li className="footer_li"><a href="privacy-policy.html" className="footer_anchor">
                                Privacy Policy
                            </a></li>
                        <li className="footer_li"><a href="term-condition.html" lass="footer_anchor">
                                Terms &amp; Conditions
                            </a></li>

                    </ul>
                </div>
                <div className="col-lg-2 col-6 col-md-4">
                    <h5 className="text-white">
                        Partners
                    </h5>
                    <ul className="list-unstyled ps-0">
                        <li className="footer_li"><a href="shipment.html" className="footer_anchor">
                                Shipments
                            </a></li>

                        <li className="footer_li"><a href="" className="footer_anchor">
                                Featured Vendors
                            </a></li>
                        <li className="footer_li"><a href="" className="footer_anchor">
                                Careers
                            </a></li>
                        <li className="footer_li"><a href="" className="footer_anchor">
                                Delivery Partner
                            </a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-6 col-md-4">
                    <h5 className="text-white">
                        Quick Links
                    </h5>
                    <ul className="list-unstyled ps-0">
                        <li className="footer_li"><a href="" className="footer_anchor">
                                Careers
                            </a></li>
                        <li className="footer_li"><a href="" className="footer_anchor">
                                Builder
                            </a></li>
                        <li className="footer_li"><a href="" className="footer_anchor">
                                Property Listing
                            </a></li>
                        <li className="footer_li"><a href="" className="footer_anchor">
                                Property Detail
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>


    </div>
  )
}

export default Footer