import React from "react";
import { useSelector } from "react-redux";
import { Table, CircularProgress, TableCell, TableHead, TableRow, TableContainer, TableBody, Paper} from "@material-ui/core";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';

import Job from "./Job/Job";

import useStyles from './styles';

import { deleteJob } from "../../actions/jobs";


const Jobs = ({setCurrentId }) => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs);
    const classes = useStyles();

    console.log("Jobs:", jobs);
    return (
       !jobs.length ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Comapny Name</TableCell>
                        <TableCell align="center">Position</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobs.map((job) => (
                        <TableRow key={job._id} setCurrentId={setCurrentId}>
                            <TableCell component="th" scope="row">
                            {job.name}
                            </TableCell>
                            <TableCell align="center">{job.position}</TableCell>
                            <TableCell align="center">{job.date}</TableCell>
                            <TableCell align="center">{job.status}</TableCell>
                            <TableCell align="center">
                                <Button size="small" color="primary" onClick={() => setCurrentId(job._id)}><EditIcon fontSize="small" />Edit</Button>
                                <Button size="small" color="primary" onClick={() => dispatch(deleteJob(job._id))}><DeleteIcon fontSize="small" />Delete</Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
       )
    )
};

export default Jobs;