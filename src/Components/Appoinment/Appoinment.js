import React from 'react';
import swal from 'sweetalert';
import { useState } from 'react';


const Appoinment = () => {

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [phone, setDate] = useState();
    const handleInput1 = e => {
        setUser(e.target.value);
    }
    const handleInput2 = e => {
        setEmail(e.target.value);
    }
    const handleInput3 = e => {
        setDate(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user && email && phone) {
            swal({
                title: "Are you sure?",
                text: "You want to confirm your booking?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("You Booking is Confirm. We will notify you via mail.", {
                            icon: "success",
                        });
                    } else {
                        swal(" Thanks. You can confirm later.");
                    }
                });
        }
    }
    return (
        <div className="container">
            <div className="row d-flex align-items-center d-flex justify-content-center text-color">
                <div className="col-lg-6 align-items-center justify-content-center">
                    <div className="container signin my-3 rounded-3" >
                        <h4 className="text-center pt-3">Book your appointment</h4>
                        <p className="text-center"> We will confirm your appointment within 2 hours</p>
                        <div>
                            <form onSubmit={handleSubmit} className="row g-3">
                                <div className="col-md-6">
                                    <label for="inputName4" className="form-label">Name</label>
                                    <input onBlur={handleInput1} placeholder="Name" required type="text" className="form-control" id="inputNamel4" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input onBlur={handleInput2} placeholder="E-mail Address" required type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputName4" className="form-label">Phone</label>
                                    <input onBlur={handleInput3} placeholder="Phone Number" type="number" className="form-control" id="inputNamel4" required />
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
                                    <input required type="date" className="form-control" id="date" />
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
                                    <button type="submit" class="btn btncolor mb-4" >
                                        Book Now
                                    </button>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="text-center">Visiting Hours</h3>
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
        </div>
        // <div className="container-fluid mb-2">
        //     <div className="container signin my-3" >
        //         <h4 className="text-center pt-3">Book your appointment</h4>
        //         <p className="text-center"> We will confirm your appointment within 2 hours</p>
        //         <div>
        //             <form className="row g-3">
        //                 <div className="col-md-6">
        //                     <label for="inputName4" className="form-label">Name</label>
        //                     <input type="text" className="form-control" id="inputNamel4" />
        //                 </div>
        //                 <div className="col-md-6">
        //                     <label for="inputEmail4" className="form-label">Email</label>
        //                     <input type="email" className="form-control" id="inputEmail4" />
        //                 </div>
        //                 <div className="col-md-6">
        //                     <label for="inputName4" className="form-label">Phone</label>
        //                     <input type="text" className="form-control" id="inputNamel4" />
        //                 </div>
        //                 <div className="col-md-6">
        //                     <label for="inputName4" className="form-label">Department</label>
        //                     <select className="form-select" id="autoSizingSelect">
        //                         <option selected>Choose</option>
        //                         <option value="1">Cardiac Clinic</option>
        //                         <option value="2">Dentistry</option>
        //                         <option value="3">Neurology</option>
        //                     </select>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <label for="inputName4" className="form-label">Doctor</label>
        //                     <select className="form-select" id="autoSizingSelect">
        //                         <option selected>Choose</option>
        //                         <option value="1">Dr. Sen</option>
        //                         <option value="2">Dr.Emma</option>
        //                         <option value="3">Dr. Robert Bruce</option>
        //                     </select>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <label for="date" className="form-label">Date</label>
        //                     <input type="date" className="form-control" id="date" />
        //                 </div>
        //                 <div className="col-12">
        //                     <div className="form-check">
        //                         <input className="form-check-input" type="checkbox" id="gridCheck" />
        //                         <label className="form-check-label" for="gridCheck">
        //                             Confirm
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div className="text-center">
        //                     <button type="submit" className="btn btncolor mb-4">Book Now</button>
        //                 </div>
        //             </form>
        //         </div>

        //     </div>

        // </div>
    );
};

export default Appoinment;