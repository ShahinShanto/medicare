import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className="container">
            <div className="text-center my-5">
                <h2 className="fcolor">
                    Why you should choose us.</h2>
                <p>Our promises</p>
            </div>

            <div className="row row-cols-1 row-cols-lg-3">
                <div className="card mb-3 shadow ">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 text-center ">
                            <i className="fas fa-heartbeat icons"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    Honesty & transparency</h5>
                                <p className="card-text text-secondary">We are honest and transparent with our services. You will get best service from us. We care about you.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 shadow">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <i className="fas fa-search-dollar icons"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    Extra Discount</h5>
                                <p className="card-text text-secondary">You will get discounts in many services of us. You also get best service in a reasonalbe price. You value your money.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 shadow ">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <i className="fas fa-info-circle icons"></i>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body fcolor">
                                <h5 className="card-title">
                                    24/7 Support</h5>
                                <p className="card-text text-secondary">You will get 24/7 support from us. We are always available to help you. Your satisfaction is our goal. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ChooseUs;