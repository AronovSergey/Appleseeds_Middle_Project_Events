import React from 'react';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css';
import LikeButton from '../likeButton/LikeButton';

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
    const history = useHistory();
    return (
        <div className="carousel">
            {arr.length > 0 && (
                <Slider {...settings}>
                    {arr.map(event => (
                        <div 
                            className="event-container center"
                            key={`${event.id}carousel`}
                        >
                            <h1>{event.name}</h1>
                            <img 
                                src={event.images[5].url} 
                                alt={event.name}
                                onClick={() => history.push(`/events/${event.id}`)}
                                className="event-container__img center" 
                            />
                            {event.dates && (
                                <h4>{`${event.dates.start.localDate} : ${event.dates.start.localTime}`}</h4>
                            )}
                            <div className="like-button">
                                <LikeButton event={event}/>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    )
}

export default Carousel;
