import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchEvents } from '../../redux/actions'
import Events from './events/Events';
import EventsSideBar from './eventsSideBar/EventsSideBar';
import Pages from './pages/Pages';
import './style.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchEvents(page));
  }, [dispatch, page]);


  return (
    <div className="main">
        <div className="events-container">
            <Events />
            <EventsSideBar />
        </div>
        <Pages setPage={setPage}/>
    </div>
  )
}

export default MainPage;
