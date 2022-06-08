import NewJob from "../models/jobMessage.js";

export const getJobs = async (req, res) => {
    try {
        const newJob = await NewJob.find();

        console.log(newJob);

        res.status(200).json(newJob);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
} 

export const createJob = async (req, res) => {
    const job = req.body;

    const newJob = new NewJob(job);

    try {
        await newJob.save();

        res.status(201).json(newJob);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}