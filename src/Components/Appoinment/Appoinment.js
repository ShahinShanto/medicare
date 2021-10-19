import React from 'react';

const Appoinment = () => {
    return (
        <div>
            <div className="container signin my-3" style={{ height: '31rem', width: '24rem' }}>
                <h4 className="text-center pt-3">Book your appointment</h4>
                <p className="text-center"> We will confirm your appointment within 2 hours</p>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputName4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputNamel4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputName4" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="inputNamel4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputName4" className="form-label">Department</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Choose</option>
                            <option value="1">Cardiac Clinic</option>
                            <option value="2">Dentistry</option>
                            <option value="3">Neurology</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="inputName4" className="form-label">Doctor</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Choose</option>
                            <option value="1">Dr. Sen</option>
                            <option value="2">Dr.Emma</option>
                            <option value="3">Dr. Robert Bruce</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="date" className="form-label">Date</label>
                        <input type="date" className="form-control" id="date" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Confirm
                            </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btncolor">Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appoinment;