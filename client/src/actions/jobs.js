import * as api from '../api';

// Action creators

export const getJobs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchJobs();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}