import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/Logo-01.png';
import useAuth from '../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="px-5 sticky-top bg-light shadow-sm ">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img src={Logo} alt="" width="170" />
                    </Link>
                    <button className="navbar-toggler brdr" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link font-color" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-color" to="/specialist">Specialist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-color" to="/department">Departments</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link text font-color" to="/aboutus">About US</Link>
                            </li>
                            {user?.email ?
                                <><div className="nav-item">
                                    <Link className="nav-link nav-margin fcolor" to="/contact">Sign in as: <span className="text-dark">{user?.displayName}</span> </Link>
                                </div>
                                    <button className="btn btn-brdr bg-dark" onClick={logOut}>Log out</button> </> :
                                <div className="nav-item">
                                    <li className="nav-item">
                                        <Link to="/signin">
                                            <button type="button" className="btn btn-brdr font-color" >Sign in</button>
                                        </Link>
                                    </li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;