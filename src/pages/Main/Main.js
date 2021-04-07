import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Calendar from '../../components/calendar/Calendar';
import { fetch200Events } from './../../redux/actions'

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetch200Events())
    }, [dispatch]);

    return (
        <div>
            <Calendar />
        </div>
    )
}

export default Main;
