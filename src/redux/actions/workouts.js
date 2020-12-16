import axios from 'axios';

export const GET_WORKOUTS = {
    request: 'GET_WORKOUTS_REQUEST',
    success: 'GET_WORKOUTS_SUCCESS',
    error: 'GET_WORKOUTS_ERROR',
}

export const getWorkouts = (user) => async (dispatch) => {
    dispatch({ type: GET_WORKOUTS.request });
    axios.get('http://localhost:3001/workouts', {
        params: {
            user,
        },
    }).then(res => {
        dispatch({ type: GET_WORKOUTS.success, payload: res.data });
    }).catch(error => {
        dispatch({ type: GET_WORKOUTS.error });
    });
}