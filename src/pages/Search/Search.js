import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { changeSearchResults } from '../../redux/actions';

const Search = () => {
    const { value } = useParams();
    const dispatch = useDispatch();
    const { events } = useSelector(state => state.results);

    useEffect(() => {
        dispatch(changeSearchResults(value));
    },[dispatch, value]);

    console.log(events);

    return (
        <div>
            
        </div>
    )
}

export default Search;
