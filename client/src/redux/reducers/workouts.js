import react from 'react';

import {
    GET_WORKOUTS,
} from '../actions/workouts';

const initialState = {
    workouts: [],
    loading: false,
}

const workouts = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKOUTS.request: {
            return Object.assign({}, state, {
                loading: true,
            })
        }
        case GET_WORKOUTS.success: {
            return Object.assign({}, state, {
                workouts: action.payload,
                loading: false,
            })
        }
        case GET_WORKOUTS.error: {
            return Object.assign({}, state, {
                loading: false,
            })
        }
        default: {
            return state;
        }
    }
}

export default workouts;