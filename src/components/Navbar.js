import React from 'react'
import './Navbar.css'

import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {

  return (
    <div>
        <div className="topbar bg-black  py-2">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="one">
                        <ul className="ps-0 list-unstyled mb-0 d-flex">
                            <li>
                            <FaPhone /> <a href="">
                                    + 91 8050461122
                                </a>

                            </li>
                            <li className="ps-4">
                                <a href="#">
                                <FaEnvelope className='mx-1'></FaEnvelope> Sakshamfood@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="two">
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="!" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../assets/map.png" className="pe-2" width="25" alt=""/>Noida
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="about-kanpur.php">Noida</a></li>
                                <li><a className="dropdown-item" href="map-kanpur.php">Map</a></li>
                                <li><a className="dropdown-item" href="how-to-reach.php">How to Reach</a></li>
                                <li><a className="dropdown-item" href="geological-background.php">Geographical
                                        Situation</a></li>
                                <li><a className="dropdown-item" href="population.php">Population</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       <div className='border'></div>
        </div>



        <div className="middle bg-black py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                       <a href="index.html">
                        <img src="../assets/saksham-logo.png " width="130" alt=""/>
                       </a>
                    </div>
                    <div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-dark" type="submit"> <FaSearch/> </button>
                        </form>
                    </div>
                    <div className="d-flex">
                        <a href="">
                            <img src="../assets/cart.png" width="30" height="30" className="me-4" alt=""/>
                        </a>
                     <a href="">
                        <img src="../assets/bar.png" width="30" height="30" alt=""/>
                     </a>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar