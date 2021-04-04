import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "1.6rem",
      marginLeft: "36%",
    },
  }));

const Pages = ({ setPage }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination 
                count={10}
                color="secondary"
                onChange={(e) => setPage(e.target.textContent)}
            />
        </div>
    )
}

export default Pages;
