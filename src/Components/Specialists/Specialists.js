import React from 'react';
import { Link } from 'react-router-dom';

const Specialists = (props) => {
    const { specialize, drName, time, drImg, key } = props.data;
    return (

        <div className="col">
            <div className="card brdr shadow h-100 text-center">
                <div className="text-center">
                    <img src={drImg} className="card-img-top img-fluid p-3 text-center" style={{ height: '21rem', width: '18rem' }} alt="..." />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{drName}</h4>
                    <p className="card-text">{specialize}</p>
                    <p className="card-text">Time: {time}</p>
                    <div className="text-center">
                        <Link to={`/appoinment/${key}`}><button className="btn brdr font-color ">Appoinment</button></Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Specialists;