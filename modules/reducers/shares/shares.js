// @flow
import {createActions, handleActions, type ActionType} from 'redux-actions';

// import type {PageType, RouteType} from './routeType';

export const defaultState = 100;

export const {setShares} = createActions({
    SET_SHARES: (sharesPrice: PageType): PageType => sharesPrice,
});

/**
 * Page info reducer
 *
 * @returns {RouteType} state New state
 */
export const shares = handleActions(
    {
        [setShares]: (state: PageType, {payload}: ActionType<typeof setShares>): PageType =>
            payload,
    },
    defaultState,
);
