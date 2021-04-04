import React, { useState ,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEvents } from '../../redux/actions'

const MainPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchEvents(page))
  }, [dispatch, page]);

    return (
        <div>
            Main Page
        </div>
    )
}

export default MainPage;
