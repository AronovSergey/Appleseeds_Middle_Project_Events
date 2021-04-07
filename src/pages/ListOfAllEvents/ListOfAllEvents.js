import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchEvents, fetchNumberOfPages } from '../../redux/actions'
import EventsList from '../../components/eventsList/EventsList';
import HoveredEvent from '../../components/hoveredEvent/HoveredEvent';
import Categories from '../../components/categories/Categories';
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
      <Categories 
        type={type}
        setType={setType}
        setPage={setPage}
      />
      <div className="center">
        <EventsList />
        <HoveredEvent />
      </div>
      <Pages 
        setPage={setPage}
        page={page}
      />
    </div>
  )
}

export default ListOfAllEvents;
