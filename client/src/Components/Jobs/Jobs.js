import React from "react";
import { useSelector } from "react-redux";

import Job from "./Job/Job";

import useStyles from './styles';


const Jobs = () => {
    const jobs = useSelector((state) => state.jobs);
    const classes = useStyles();

    console.log(jobs)
    return (
        <>
            <h1>Jobs</h1>
            <Job />
            <Job />
        </>
    )
};

export default Jobs;