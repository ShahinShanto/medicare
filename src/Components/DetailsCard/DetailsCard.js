import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCard = (props) => {
    const { drName, serviceName, rTime, fee, serviceImg } = props.data;
    return (

        <div className="col">
            <div className="card brdr shadow h-100">
                <div className="">
                    <img src={serviceImg} className="card-img-top p-3" alt="..." />
                </div>
                <div className="card-body">
                    <h4 className="card-title fcolor">Name of Test: {serviceName}</h4>
                    <p className="card-text">Test Cost: ${fee}</p>
                    <p className="card-text">Refered Doctor: {drName}</p>
                    <p className="card-text">Report Time: {rTime}</p>
                    <div className="text-center">
                        <Link to="/appoinment"><button className="btn brdr font-color ">Book</button></Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default DetailsCard;