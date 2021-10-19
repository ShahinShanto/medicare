import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-footer py-4 mt-5">
                <div className="row align-items-center">
                    <div className="g-5 mb-5 ">
                        <div className="d-flex px-5 flex-column flex-lg-row g-5 border-bottom ">
                            <div className="col-lg-3 col-12 px-4 text-white ">
                                <h2>Medicare</h2>
                                <p className="fw-light">Medicare is a Health center where you can find best doctors and also get best treatment. We care About your Health, we care about your needs .  </p>
                            </div>
                            <div className="col-lg-3 col-12 px-3 text-white">
                                <h2>Quick Links</h2>
                                <Link className="nav-link active p-2  text-white fw-light" aria-current="page" to="#"><i className="fas fa-home"></i> Home</Link>
                                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"><i className="fas fa-user-md"></i> Specialist</Link>
                                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"><i className="far fa-building"></i> Departments</Link>
                                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"><i className="far fa-question-circle"></i> About Us</Link>
                            </div>
                            <div className="col-lg-3 col-12 px-2 text-white">
                                <h2>Social Media</h2>
                                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"> <i className="fab fa-facebook-square"></i> Facebook</Link>
                                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"><i className="fab fa-twitter-square"></i> Twitter</Link>
                                <Link className="fw-light nav-link active p-2 text-white" aria-current="page" to="#"><i className="fab fa-whatsapp-square"></i> Whats App</Link>
                                <Link className="fw-light nav-link active p-2 text-white" aria-current="page" to="#"><i className="fab fa-linkedin"></i> Linkedin</Link>
                            </div>
                            <div className="col-lg-3 col-12 px-2 text-white">
                                <h2>Find Us</h2>
                                <p className="fw-light"><i className="fas fa-map-marker-alt"></i> 143 Gordon Terrace Embarrassing NG33 0ZT United Kingdom</p>
                                <p className="fw-light"><i className="fas fa-envelope"></i> info@medicare.com</p>
                                <p className="fw-light"><i className="fas fa-phone-square-alt"></i> +1800 326 3264</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-white fw-normal">All rights reserved by Shahin</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;