import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true
});

const store = createStore(
    reducer,
    applyMiddleware(
        logger
    ));

export default store;