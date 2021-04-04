import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchEvents, fetchNumberOfPages } from '../../redux/actions'
import Events from './events/Events';
import EventsSideBar from './eventsSideBar/EventsSideBar';
import MineBreadcrumbs from './mineBreadcrumbs/Breadcrumbs';
import Pages from './pages/Pages';
import './style.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('events');
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchEvents(type, page));
  }, [dispatch, type, page]);


  useEffect(() => {
    dispatch(fetchNumberOfPages(type));
  }, [dispatch, type]);

  return (
    <div className="main">
      <MineBreadcrumbs 
        type={type}
        setType={setType}
        setPage={setPage}
      />
      <div className="events-container">
        <Events />
        <EventsSideBar />
      </div>
      <Pages 
        setPage={setPage}
        page={page}
      />
    </div>
  )
}

export default MainPage;
