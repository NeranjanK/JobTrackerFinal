import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getJobs } from './actions/jobs';
import Jobs from "./Components/Jobs/Jobs";
import Form from "./Components/Form/Form";
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);
    
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar}  position="static" color="inherit">
                <Typography className={classes.heading}  variant="h2" align="center">
                    JobTracker
                </Typography>
            </AppBar>
            <Grow in>
                 <Container>
                    <Grid container justifyContent="space-between" align-items="stretch" spacing={3}>
                        <Grid item xs={12} small={7}>
                            <Jobs />
                        </Grid>
                        <Grid item xs={12} small={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container>
    );
}

export default App;