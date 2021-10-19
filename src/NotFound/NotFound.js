import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container-fluid">
            <div className="text-center design container-fluid p-5">
                <h1>404</h1>
                <h3>The page you are looking for is not available</h3>
                <Link className="nav-link text" to="/Home"> <button type="button" className="btn btn-dark">Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;