import axios from 'axios';

const url = 'http://localhost:5000/jobs';

export const fetchJobs = () => axios.get(url);