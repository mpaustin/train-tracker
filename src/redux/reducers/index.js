import { combineReducers } from 'redux';
import workouts from './workouts';
import users from './users';

const rootReducer = combineReducers({
    workouts,
    users,
});

export default rootReducer;