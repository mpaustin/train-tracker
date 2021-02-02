import axios from 'axios';
import { getWorkouts } from './workouts';

export const LOG_IN = {
    request: 'LOG_IN_REQUEST',
    success: 'LOG_IN_SUCCESS',
    error: 'LOG_IN_ERROR',
}

export const LOG_OUT = 'LOG_OUT';

export const GET_WORKOUTS = {
    request: 'GET_WORKOUTS_REQUEST',
    success: 'GET_WORKOUTS_SUCCESS',
    error: 'GET_WORKOUTS_ERROR',
}

export const logIn = ({
    username,
    password,
}) => async (dispatch) => {
    dispatch({ type: LOG_IN.request });

    const colonSep = `${username}:${password}`;
    const encoded = Buffer.from(colonSep, 'binary').toString('base64');

    axios.get('/logIn', {
        headers: {
            Authorization: `Basic ${encoded}`
        }
    }).then(res => {
        
        dispatch({
            type: LOG_IN.success,
            payload: username,
        });

    }).then(res => {
        dispatch(getWorkouts(username));
    }).catch(error => {

        dispatch({ type: LOG_IN.error });

    });

};

export const logOut = () => async (dispatch) => {
    dispatch({ type: LOG_OUT });
};