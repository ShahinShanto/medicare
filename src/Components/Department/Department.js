import React from 'react';
import img1 from '../../Images/Departments/4-01.png';
import img2 from '../../Images/Departments/6-01.png';
import img3 from '../../Images/Departments/8-01.png';
import img4 from '../../Images/Departments/7-01.png';
import img5 from '../../Images/Departments/3-01.png';
import img6 from '../../Images/Departments/2-01.png';
import img7 from '../../Images/Departments/5-01.png';
import img8 from '../../Images/Departments/9-01.png';
import department from '../../Images/departments.jpg';
const Department = () => {
    return (
        <div className="container">
            <div className="container-fluid mb-5 radious">
                <div className="py-5 bg">
                    <div className="row d-flex align-items-center d-flex justify-content-center text-color px-5">
                        <div className="col-lg-6">
                            <h1 >DEPARTMENTS</h1>
                            <p className="py-4 text-secondary fw-light">A list of all our Departments are given below. You can see the details of our department here. Medicare Hospital's mission is to providing excellent care for patient lays out the vision for the hospital that includes medical services structured around the needs of patients.
                            </p>
                        </div>
                        <div className="col-lg-6 align-items-center justify-content-center">
                            <img className="img-fluid img2" src={department} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 container">
                <div className="col">
                    <div className="card brdr shadow h-100 text-center">
                        <div className="text-center">
                            <img src={img1} className="card-img-top text-center" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">MEDICINE</h4>
                            <div className="text-center">
                                <button className="btn brdr font-color ">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brdr shadow h-100 text-center">
                        <div className="text-center">
                            <img src={img2} className="card-img-top text-center" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">ORTHOPEDICS</h4>
                            <div className="text-center">
                                <button className="btn brdr font-color ">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brdr shadow h-100 text-center">
                        <div className="text-center">
                            <img src={img3} className="card-img-top text-center" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">PEDIATRICS</h4>
                            <div className="text-center">
                                <button className="btn brdr font-color ">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brdr shadow h-100 text-center">
                        <div className="text-center">
                            <img src={img4} className="card-img-top text-center" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">NEPHROLOGY</h4>
                            <div className="text-center">
                                <button className="btn brdr font-color ">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brdr shadow h-100 text-center">
                        <div className="text-center">
                            <img src={img5} className="card-img-top text-center" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">UROLOGY</h4>
                            <div className="text-center">
                                <button className="btn brdr font-color ">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brdr shadow h-100 text-center">
                        <div className="text-center">
                            <img src={img6} className="card-img-top text-center" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">CARDIOLOGY</h4>
                            <div className="text-center">
                                <button className="btn brdr font-color ">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brdr shadow h-100 text-center">
                        <div className="text-center">
                            <img src={img7} className="card-img-top text-center" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">GYNAE & OBS</h4>
                            <div className="text-center">
                                <button className="btn brdr font-color ">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card brdr shadow h-100 text-center">
                        <div className="text-center">
                            <img src={img8} className="card-img-top text-center" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">ENT</h4>
                            <div className="text-center">
                                <button className="btn brdr font-color ">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;