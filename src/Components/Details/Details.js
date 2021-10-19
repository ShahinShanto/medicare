import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {

    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/fakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    useEffect(() => {
        const found = services.find(service => service.key === parseInt(id))
        console.log(found)
        setSingleService(found)
        console.log(singleService)
    }, [services, id])

    return (
        <div>
            <div className="container">
                <h3 className="text-center my-4 fcolor">Test Details</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid" >

                    <div className="col">
                        <div className="card brdr shadow h-100">
                            <div className="">
                                <img src={singleService?.serviceImg} className="card-img-top p-3" alt="..." />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title fcolor">Name of Test: {singleService?.serviceName}</h4>
                                <p className="card-text">Test Cost: ${singleService?.fee}</p>
                                <p className="card-text">Refered Doctor: {singleService?.drName}</p>
                                <p className="card-text">Report Time: {singleService?.rTime}</p>
                                <div className="text-center">
                                    <Link to="/appoinment"><button className="btn brdr font-color ">Book</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;