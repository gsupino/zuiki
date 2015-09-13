import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import callAPIMiddleware from './apiMiddleware';
import loggerMiddleware from './loggerMiddleware';

const reducer = combineReducers(reducers);

export default function(data={}) {
    let finalCreateStore;
    if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
        const { devTools, persistState } = require('redux-devtools');
        finalCreateStore = compose(
            applyMiddleware( thunkMiddleware,callAPIMiddleware,loggerMiddleware),
            devTools(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
            createStore
        );
    } else {
        finalCreateStore = applyMiddleware(thunkMiddleware,callAPIMiddleware,loggerMiddleware)(createStore);
    }
    return finalCreateStore(reducer, data);
}

