import React, { useEffect, useState } from 'react';
import Specialists from '../Specialists/Specialists';

const Specialist = (props) => {
    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setSpecialists(data));
    }, [])

    return (
        <div>
            <div className="container">
                <h3 className="text-center my-4 fcolor">We Have Specialist Doctors To Solve <br /> Your Problems</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid" >

                    {
                        specialists.slice(0, 6).map(data => <Specialists key={data.key} data={data}></Specialists>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Specialist;