import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import DetailsCard from '../DetailsCard/DetailsCard';

const Details = (props) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    return (
        <div>
            <div className="container">
                <h3 className="text-center my-4 fcolor">Test Details</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid" >

                    {
                        details.map(data => <DetailsCard key={data.key} data={data}></DetailsCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Details;