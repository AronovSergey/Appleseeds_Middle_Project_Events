import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1.6rem",
    },
}));

const MinePagination = ({ page, setPage }) => {
    const classes = useStyles();
    const[localPage, setLocalPage] = useState(page);
    const { numberOfPages } = useSelector(state => state.events);

    const onPageChange = (event, value) => {
        setPage(parseInt(value));
        setLocalPage(parseInt(value));
    }

    useEffect(() =>{
        setLocalPage(page);
    }, [page])

    return (
        <div className={classes.root + ' center'}>
            <Pagination 
                count={numberOfPages}
                color="secondary"
                page={localPage}
                onChange={onPageChange}
            />
        </div>
    )
}

export default MinePagination;
