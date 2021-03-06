import React, { useState, useEffect } from "react";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { createJob, updateJob } from "../../actions/jobs";

const Form = ({ currentId, setCurrentId }) => {

    const job = useSelector((state) => currentId ? state.jobs.find((p) => p._id === currentId) : null);
    const [jobData, setJobData] = useState({
        name: '',
        position: '',
        date: '', 
        status: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));


    useEffect(() => {
        if(job) setJobData(job);

    }, [job])

    const handleSubmit = (e) => {
        e.preventDefault();


        if(currentId) {
            dispatch(updateJob(currentId, {...jobData, creator: user.currentUser.name}));
        } else{
            dispatch(createJob({ ...jobData, creator: user.currentUser.name }));
        }
        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setJobData({ name: '', position: '', date: '', status: ''});

    };

    if (!user) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Sign In To Add New Jobs
                </Typography>

            </Paper>
        )
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? 'Edit Job' : 'Create New Job'}
                </Typography>
                <TextField 
                name="name" 
                variant="outlined" 
                label="Company Name" 
                fullWidth
                value={jobData.name}
                onChange={(e) => setJobData({ ...jobData, name: e.target.value })}  />

                <TextField 
                name="position" 
                variant="outlined" 
                label="Position" 
                fullWidth
                value={jobData.position}
                onChange={(e) => setJobData({ ...jobData, position: e.target.value })}  />

                <TextField 
                name="date" 
                variant="outlined" 
                label="Date" 
                fullWidth
                value={jobData.date}
                onChange={(e) => setJobData({ ...jobData, date: e.target.value })}  />

                <TextField 
                name="status" 
                variant="outlined" 
                label="Status" 
                fullWidth
                value={jobData.status}
                onChange={(e) => setJobData({ ...jobData, status: e.target.value })}  />

                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    )
};

export default Form;