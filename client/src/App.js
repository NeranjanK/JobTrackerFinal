import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getJobs } from './actions/jobs';
import Jobs from "./Components/Jobs/Jobs";
import Form from "./Components/Form/Form";
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [currentId, dispatch]);
    
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Job Tracker</Typography>
                {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
            </AppBar>
            <Grow in>
                <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Jobs setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;