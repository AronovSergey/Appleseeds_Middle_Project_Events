import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchEvents } from '../../redux/actions'
import EventsSection from '../eventsSection/EventsSection';

const MainPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchEvents(page))
  }, [dispatch, page]);

    return (
        <div>
            <EventsSection />
        </div>
    )
}

export default MainPage;
