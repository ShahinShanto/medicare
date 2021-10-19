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
            <div className="container signin my-3" style={{ height: '26rem', width: '22rem' }}>

                <div className=" pt-4">
                    <h5 className="text-center">Sign in to your account</h5>
                </div>

                <form onSubmit={handleLogin} className="mt-5" >
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 mt-4">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div>
                        {error}
                    </div>
                    <div className=" mt-4 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Confirm Sign In</label>
                    </div>
                    <div className="text-center  ">
                        <button type="submit" className="btn btn-light btncolor mt-3" style={{ height: '2.5rem', width: '11rem' }}>Sign In</button>
                        <div className="mt-2">
                            <p>New Customer? <Link className="text-dark" to="/register"> Register Here.</Link></p>
                        </div>

                    </div>

                </form>
            </div>
            <div className="fcolor text-center">
                <h6>  Or Sign  In with your<Link onClick={handleGoogleLogin} className="text-dark"> Google Account <i className="fab fa-google-plus-g"></i></Link></h6>

            </div>
        </div>
    );
};

export default SignIn;