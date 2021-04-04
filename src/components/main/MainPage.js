import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchEvents } from '../../redux/actions'
import Events from './events/Events';
import EventsSideBar from './eventsSideBar/EventsSideBar';
import './style.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const [page] = useState(2);

  useEffect(() => {
    dispatch(fetchEvents(page))
  }, [dispatch, page]);

    return (
        <div className="events-container">
            <Events/>
            <EventsSideBar />
        </div>
    )
}

export default MainPage;
