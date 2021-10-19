import React from 'react';
import { Link } from 'react-router-dom';

const Specialists = (props) => {
    const { specialize, drName, time, drImg } = props.data;
    return (

        <div className="col">
            <div className="card brdr shadow h-100 text-center">
                <div className="text-center">
                    <img src={drImg} className="card-img-top p-5 text-center" style={{ height: '22rem', width: '20rem' }} alt="..." />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{drName}</h4>
                    <p className="card-text">{specialize}</p>
                    <p className="card-text">Time: {time}</p>
                    <div className="text-center">
                        <Link to="/appoinment"><button className="btn brdr font-color ">Appoinment</button></Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Specialists;