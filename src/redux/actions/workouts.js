import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const GET_WORKOUTS = {
    request: 'GET_WORKOUTS_REQUEST',
    success: 'GET_WORKOUTS_SUCCESS',
    error: 'GET_WORKOUTS_ERROR',
}

export const ADD_WORKOUT = {
    request: 'ADD_WORKOUT_REQUEST',
    success: 'ADD_WORKOUT_SUCCESS',
    error: 'ADD_WORKOUT_ERROR',
}

export const getWorkouts = (user, token) => async (dispatch) => {

    // const { getAccessTokenSilently } = useAuth0();

    // const token = await getAccessTokenSilently({
    //     audience: "https://mpaustin.us.auth0.com/api/v2/",
    //     scope: "read:workouts"
    // })

    dispatch({ type: GET_WORKOUTS.request });

    axios.get('http://localhost:3001/workouts', {
        params: {
            user,
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        dispatch({ type: GET_WORKOUTS.success, payload: res.data });
    }).catch(error => {
        dispatch({ type: GET_WORKOUTS.error });
    });
}