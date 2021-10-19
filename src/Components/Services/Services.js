import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = (props) => {
    const { serviceImg, description, serviceName } = props.data;

    return (
        <div>
            <div className="">
                <div className="card mb-3 shadow">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-4">
                            <img src={serviceImg} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body fcolor">
                                <h4 className="card-title">{serviceName}</h4>
                                <p className="card-text text-secondary">{description}</p>
                                <Link to="/details"> <button className="btn mt-4 font-color brdr ">See Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};
export default Services;