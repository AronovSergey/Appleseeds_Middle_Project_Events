import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import { getAllLocalData } from './../../localStorage/localStorage';

const Favorites = () => {
    const events = getAllLocalData();

    console.log(events);

    return (
        <div>
            <Carousel arr={events}/>
        </div>
    )
}

export default Favorites;
