import { EmojiObjectsRounded } from '@material-ui/icons';
import react from 'react';

import {
    LOG_IN,
    LOG_OUT,
} from '../actions/users';

const initialState = {
    user: '',
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN.request:
        case LOG_IN.success: {
            return Object.assign({}, state, {
                user: action.payload,
            });
        }
        case LOG_OUT: {
            return Object.assign({}, state, {
                user: '',
            });
        }
        default: {
            return state;
        }
    }
}

export default users;