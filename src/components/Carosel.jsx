import React from 'react';
import pizza5 from '../assets/images/pizza5.jpg'
import pizza4 from '../assets/images/pizza4.jpg'
import pizza3 from '../assets/images/pizza3.jpg'
import pizza2 from '../assets/images/pizza2.jpg'
import pizza1 from '../assets/images/pizza1.jpg'


const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={pizza5} className="d-block w-100" alt="Pizza Bernie" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Pizza Bernie</h5>
                        <p>Very cheap. It's only 3$/pizza</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={pizza2} className="d-block w-100" alt="Delicious Pizza" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Delicious</h5>
                        <p>Improve your tasting.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={pizza3} className="d-block w-100" alt="Best Service" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Service</h5>
                        <p>Best Service.</p>
                    </div>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
