import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    name: String,
    creator: String,
    position: String,
    status: String,
    date: String
});

const NewJob = mongoose.model('NewJob', jobSchema);

export default NewJob;