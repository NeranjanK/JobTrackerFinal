import axios from 'axios';

const API = axios.create({baseURL: 'https://neranjan-jobtracker.herokuapp.com/' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

// const url = 'http://localhost:5000/jobs';

export const fetchJobs = () => API.get('/jobs');

export const createJob = (newJob) => API.post('/jobs', newJob);

export const updateJob = (id, updatedJob) => API.patch(`jobs/${id}`, updatedJob);

export const deleteJob = (id) => API.delete(`jobs/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);
