import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchEvents, fetchNumberOfPages } from '../../redux/actions'
import Events from '../../components/events/Events';
import EventsSideBar from '../../components/hoveredEvent/HoveredEvent';
import MineBreadcrumbs from '../../components/mineBreadcrumbs/Breadcrumbs';
import Pages from '../../components/pagination/Pagination';
import './style.css';

const ListOfAllEvents = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('events');
  const [page, setPage] = useState(1);

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
      <div className="center">
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

export default ListOfAllEvents;
