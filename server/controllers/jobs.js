import NewJob from "../models/jobMessage";

export const getJobs = async (req, res) => {
    // res.send("This works!");
    try {
        const newJob = await NewJob.find();

        console.log(newJob);

        res.status(200).json(newJob);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
} 

export const createJob = (req, res) => {
    res.send("Post creation!");
}