import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './SignIn.css';
const SignIn = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleLogin, error } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => { signInUsingGoogle().then(result => { history.push(redirect_uri) }) }
    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center my-3" >
                    <div className="col">
                        <div className="card brdr shadow h-100">
                            <div className="card-body signin">
                                <h4 className="text-center pt-3 mb-3">Sign In your account</h4>
                                <div>
                                    <form onSubmit={handleLogin} className="row g-3">
                                        <div className="col">
                                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4" placeholder="Email Address" />
                                        </div>
                                        <div className="mb-1 mt-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div>
                                            {error}
                                        </div>
                                        <div className=" form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Confirm Sign In</label>
                                        </div>
                                        <div className="text-center  ">
                                            <button type="submit" className="btn btn-light btncolor mt-1" style={{ height: '2.5rem', width: '11rem' }}>Sign In</button>
                                            <div className="mt-2">
                                                <p className=" mb-3">New Customer? <br /> <Link className="text-primary" to="/register"> Register Here.</Link></p>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fcolor text-center">
                <h6>  Or Sign  In with your  <br /><button onClick={handleGoogleLogin} className="btn"> Google Account <i className="fab fa-google-plus-g"></i></button></h6>

            </div>
        </div>

    );
};

export default SignIn;