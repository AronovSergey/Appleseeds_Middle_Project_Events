import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../../components/carousel/Carousel';
import { updateFavorites } from './../../redux/actions';
import { getAllLocalData } from './../../localStorage/localStorage';

const Favorites = () => {
    const dispatch = useDispatch();
    const { update } = useSelector(state => state.events);

    const events = getAllLocalData();
    const length = events.length;

    useEffect(() => {
        if(update === 0)
            dispatch(updateFavorites(length))
    }, [dispatch, length, update]);

    return (
        <div>
            <Carousel arr={events}/>
            <h1 className="center">{`Number Of Favorites:   ${update}`}</h1>
        </div>
    )
}

export default Favorites;
