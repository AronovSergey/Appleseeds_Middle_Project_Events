import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FaChevronRight size={50} color={'black'} />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FaChevronLeft size={50} color={'black'} />
        </div>
    );
}

const Carousel = ({ arr }) => {
    return (
        <div className="carousel">
            {arr.length > 0 && (
                <Slider {...settings}>
                    {arr.map(event => (
                        <div 
                            className="event-container center"
                            key={`${event.id}carousel`}
                        >
                            <div>{event.name}</div>
                            <img 
                                src={event.images[5].url} 
                                alt={event.name}
                                className="event-container__img center" 
                            />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    )
}

export default Carousel;
