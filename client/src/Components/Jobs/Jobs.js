import React from "react";
import { useSelector } from "react-redux";
import { Table, CircularProgress, TableCell, TableHead, TableRow, TableContainer, TableBody, Paper, Typography} from "@material-ui/core";
import { Button } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";


import useStyles from './styles';

import { deleteJob } from "../../actions/jobs";

import "./Jobs.css";



const Jobs = ({setCurrentId }) => {
    function setColor(status){
        if (status === "Rejected"){
            return "#F7977A"
        } else if (status === "Interviewing"){
            return "#FFF79A"
        } else if (status === "Accepted") {
            return "#82CA9D"
        } else {
            return "grey"
        }
    }

    const classes = useStyles();
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs);

    const user = JSON.parse(localStorage.getItem('profile'));
    // const classes = useStyles();

    // console.log("Jobs:", jobs);

    const currJobs = jobs.filter((job) => (job?.creator === user?.currentUser?._id) || (job?.creator === user?.currentUser?.name));

    // console.log("Curr Jobs: ", result);

    if (!user) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Sign In To Track Current Jobs
                </Typography>

            </Paper>
        )
    }

    return (
       !jobs.length ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table aria-label="simple table" className={classes.table} id="customers">
                    <TableHead>
                        <tr>
                            <th style={{
                                textAlign: "center"
                            }}>Comapny Name</th>
                            <th style={{
                                textAlign: "center"
                            }}>Position</th>
                            <th style={{
                                textAlign: "center"
                            }}>Date</th>
                            <th style={{
                                textAlign: "center"
                            }}>Status</th>
                            <th style={{
                                textAlign: "center"
                            }}>Resources</th>
                            <th style={{
                                textAlign: "center"
                            }}>Actions</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {currJobs.map((job) => (
                            <tr style={{backgroundColor: setColor(job.status)}}>
                                <td align="center">{job.name}</td>
                                <td align="center">{job.position}</td>
                                <td align="center">{job.date}</td>
                                <td align="center">{job.status}</td>
                                <td align="center">
                                    <a href="https://www.themuse.com/advice/behavioral-interview-questions-answers-examples" target="_blank">
                                        Behavioral
                                    </a>
                                    <br></br>
                                    <a href="https://igotanoffer.com/blogs/product-manager/product-manager-interview-questions" target="_blank">
                                        PM
                                    </a>
                                    <br></br>
                                    <a href="https://h1ros.github.io/posts/coding/leetcode-top-100-problem-selection/" target="_blank">
                                        SWE
                                    </a>
                                </td>
                                <td align="center">
                                    { (user?.currentUser?._id === job?.creator) || (user?.currentUser?.name === job?.creator) && (
                                        <>
                                        <Button size="small"  onClick={() => setCurrentId(job._id)}><EditIcon fontSize="small" />Edit</Button>
                                        <Button size="small"  onClick={() => dispatch(deleteJob(job._id))}><DeleteIcon fontSize="small" />Delete</Button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
       )
    )
};

export default Jobs;