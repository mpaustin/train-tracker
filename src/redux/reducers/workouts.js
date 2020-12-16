import react from 'react';

import {
    GET_WORKOUTS,
} from '../actions/workouts';

const initialState = {
    workouts: [],
}

const workouts = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKOUTS.request: {
            
        }
        case GET_WORKOUTS.success: {
            return Object.assign({}, state, {
                workouts: action.payload,
            })
        }
        case GET_WORKOUTS.error: {
            
        }
        default: {
            return state;
        }
    }
}

export default workouts;