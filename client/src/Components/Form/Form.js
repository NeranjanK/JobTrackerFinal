import React from "react";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Form = () => {
    const classes = useStyles();

    const handleSubmit = () => {

    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Create a New Job Tracker
                </Typography>
                <TextField 
                name="name" 
                variant="outlined" 
                label="Name" 
                fullWidth
                value={jobData.name}
                onChange={}  />

            </form>

        </Paper>
    )
};

export default Form;