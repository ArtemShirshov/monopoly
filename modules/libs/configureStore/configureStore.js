/* eslint-disable no-underscore-dangle, max-statements */
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducer from '../../reducers';
import rootSaga from '../../sagas';

export const sagaMiddleware = createSagaMiddleware();

export const axiosClient = axios.create({
    baseURL: window.SITE_URL,
    responseType: 'json',
});

export const FULFILLED = '_FULFILLED';
export const REJECTED = '_REJECTED';

export const axiosOptions = {
    successSuffix: FULFILLED,
    errorSuffix: REJECTED,
};

/**
 * Add middleware and enable hot loading
 *
 * @param {{}} initialState State before applying middleware etc
 * @returns {{}} React store
 */
export default function configureStore(initialState) {
    /* setup of https://github.com/zalmoxisus/redux-devtools-extension */
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = applyMiddleware(axiosMiddleware(axiosClient, axiosOptions), sagaMiddleware);

    const store = createStore(
        rootReducer,
        initialState,
        process.env.NODE_ENV === 'production' ? middleware : composeEnhancers(middleware),
    );

    /* istanbul ignore next */
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        /* istanbul ignore next */
        const replaceReducer = () => {
            const nextRootReducer = require('../../reducers/index');
            store.replaceReducer(nextRootReducer);
        };
        module.hot.accept('../../reducers', replaceReducer);
    }

    sagaMiddleware.run(rootSaga);
    return store;
}
