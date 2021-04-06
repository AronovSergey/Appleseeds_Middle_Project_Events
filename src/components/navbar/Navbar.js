import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#545454",
      fontWeight: "500"
    },
});

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === 0) 
            history.push("/");
        else if(newValue === 1) 
            history.push("/list-of-all-events");
        else if(newValue === 2) 
            history.push("/favorites");
    };
    
    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                centered
            >
                <Tab label="Main Page" />
                <Tab label="List Of All Events" />
                <Tab label="My Favorites" />
            </Tabs>
        </Paper>
    );
}

export default Navbar;