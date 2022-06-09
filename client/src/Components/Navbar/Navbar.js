import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation(); 

    console.log("User:", user);

    useEffect(() => {
        const token = user?.jti

        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location])

    const logout = () => {
        dispatch( { type: 'LOGOUT' })

        history.push('/')

        setUser(null);
    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Job Tracker</Typography>
                {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
            </div>

            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.name} src={user.picture}></Avatar>
                        <Typography className={classes.userName} variant="h6">
                            { user.name ? user.name : user.currentUser.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">
                        Sign In
                    </Button>

                )}
            </Toolbar>
        </AppBar>

    );
};

export default Navbar;