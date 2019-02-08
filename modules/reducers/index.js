// @flow
import {combineReducers} from 'redux';

// information about current page
import {route} from './route/route';
import {players} from './players';
import {cards} from './cards';
import {shares} from './shares';
import {notification} from './notification';

const reducers = {
    route,
    players,
    cards,
    shares,
    notification,
};

export type ReducersType = typeof reducers;

export default combineReducers(reducers);
