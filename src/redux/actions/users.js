import axios from 'axios';

export const LOG_IN = {
    request: 'LOG_IN_REQUEST',
    success: 'LOG_IN_SUCCESS',
    error: 'LOG_IN_ERROR',
}

export const LOG_OUT = 'LOG_OUT';

export const logIn = ({
    username,
    password,
}) => async (dispatch) => {
    dispatch({ type: LOG_IN.request });

    const colonSep = `${username}:${password}`;
    const encoded = Buffer.from(colonSep, 'binary').toString('base64');

    axios.get('http://localhost:3001/logIn', {
        headers: {
            Authorization: `Basic ${encoded}`
        }
    }).then(res => {
        console.log('response status', res.status);

        dispatch({
            type: LOG_IN.success,
            payload: 'Matt',
        });

    }).catch(error => {

        dispatch({ type: LOG_IN.error });

    });

};

export const logOut = () => async (dispatch) => {
    dispatch({ type: LOG_OUT });
};