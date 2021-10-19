import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner1 from '../../Images/Banner/M1.png';
import Banner2 from '../../Images/Banner/M2.png';
import Banner3 from '../../Images/Banner/M3.png';
import Services from '../Services/Services';
import ChooseUs from '../ChooseUs/ChooseUs';
import QNA from '../QNA/QNA';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner1} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>

                <section className="container mt-3">
                    <h2 className="text-center mt-5 fcolor">We Offer Different Services</h2>
                    <p className="text-center mb-5 text-secondary">We at Medicare are always fully focused on helping your to overcame any surgeon procedure</p>
                    <div className="row row-cols-1 row-cols-lg-2 g-3 ">

                        {
                            services.map(data => <Services key={data.key} data={data}></Services>)
                        }
                    </div>
                </section>
            </div>
            <ChooseUs></ChooseUs>
            <QNA></QNA>
        </div>
    );
};

export default Home;