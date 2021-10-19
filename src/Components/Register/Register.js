import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Register.css';


const Register = () => {
    const { handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, error } = useAuth();
    return (
        <div className="container signin my-3" style={{ height: '31rem', width: '24rem' }}>
            <h4 className="text-center pt-3">Register</h4>
            <form onSubmit={handleRegistration} className="row g-3">
                <div className="col-md-12">
                    <label for="inputName4" className="form-label">Name</label>
                    <input required onBlur={handleNameChange} type="text" className="form-control" id="inputName4" />
                </div>
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input required onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-12">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input required onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword4" />
                </div>
                <div>
                    <p>{error}</p>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btncolor">Registration</button>
                </div>
                <div className=" text-center">
                    <p>Already have an account? <br /> <Link className="text-dark" to="/signin"> Sign In Here.</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;