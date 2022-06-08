export default (jobs = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return jobs;    
        default:
            return jobs;
    }
}