import React from 'react';
import './AboutUs.css';
import AboutUSPic from '../../Images/aboutp.png';
import medical from '../../Images/medical (1).jpg';
const AboutUs = () => {
    return (
        <div className="container-fluid mb-5 radious">
            <div className="py-5 bg container">
                <div className="row d-flex align-items-center d-flex justify-content-center text-color">
                    <div className="col-lg-6 align-items-center justify-content-center">
                        <img className="img-fluid img2" src={AboutUSPic} width="350" alt="" />
                    </div>
                    <div className="col-lg-6 ">
                        <h1 className=" mt-3" >ABOUT US</h1>
                        <p className=" text-secondary fw-light">It is indeed a great pleasure for me to introduce our brand new state of the art technology hospital in the region of Chittagong. Nowadays, if anyone needs good treatment, they need to look forward to Dhaka or Abroad. Because good and well facilitated hospitals are not available in the port city of Chittagong. <br />

                            The pursuit of excellence in all these areas is the result of our willingness, commitment, dedication and strong moral determination to provide the highest quality of care.
                        </p>
                        <h3 className=" my-3">Working Hours</h3>
                        <table className="table table-hover text-center">

                            <thead>
                                <tr>
                                    <th scope="col">DAY</th>
                                    <th scope="col">OPEN</th>
                                    <th scope="col">CLOSE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mon-Wed</td>
                                    <td>10:00am</td>
                                    <td>09:00pm</td>
                                </tr>
                                <tr>
                                    <td>Thu-Fri</td>
                                    <td>09:00am</td>
                                    <td>10:30pm</td>
                                </tr>
                                <tr>
                                    <td >Sat-Sun</td>
                                    <td>09:30am</td>
                                    <td>08:30pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=" bg container mt-5">
                    <div className="row d-flex align-items-center d-flex justify-content-center text-color">
                        <div className="col-lg-6">
                            <h1 >FACILITIES</h1>
                            <p className="py-4 text-secondary fw-light">Patients have effective and timely access to care, including appointments, tests, treatment and move out of the hospital. Services are tailored to meet the needs of individual patients, including vulnerable patients.
                                The world class department of laboratory service at Parkview Hospitals offers 24 hours a day and 7 days a week services in all branches of Laboratory Medicine. At the beginning 100 inpatient Bed.
                            </p>
                        </div>
                        <div className="col-lg-6 align-items-center justify-content-center">
                            <img className="img-fluid img2" src={medical} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid card2 my-3">
                <div className="row align-items-center ">
                    <div className="g-5">
                        <div className="d-flex flex-column flex-lg-row g-5 content ">
                            <div className="col-lg-3 col-12 d-flex mb-5">
                                <div className="text-center ">
                                    <i className="fas fa-clinic-medical icon"></i>
                                    <h1 className="text-followers fcolor">3468</h1>
                                    <h4 className="text-followers2 fcolor">Hospital Rooms</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12 d-flex mb-5">
                                <div className="text-center ">
                                    <i className="fas fa-user-md icon"></i>
                                    <h1 className="text-followers fcolor">557</h1>
                                    <h4 className="text-followers2 fcolor">Specialist Doctors</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12 d-flex mb-5 ">
                                <div className="text-center">
                                    <i className="fas fa-smile-beam icon"></i>
                                    <h1 className="text-followers fcolor">4379</h1>
                                    <h4 className="text-followers2 fcolor">Happy Patients</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12 d-flex mb-5">
                                <div className="text-center">
                                    <i className="far fa-calendar-alt icon"></i>
                                    <h1 className="text-followers fcolor">32</h1>
                                    <h4 className="text-followers2 fcolor">Years of Experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;