// @flow
import {createActions, handleActions, type ActionType} from 'redux-actions';

// import type {PageType, RouteType} from './routeType';

export const defaultState = {
    text: '',
    type: '',
    isShow: false,
};

export const {setNotification, clearNotification} = createActions({
    SET_NOTIFICATION: (notification: PageType): PageType => notification,
    CLEAR_NOTIFICATION: () => defaultState,
});

/**
 * Page info reducer
 *
 * @returns {RouteType} state New state
 */
export const notification = handleActions(
    {
        [setNotification]: (state: PageType, {payload}: ActionType<typeof setPlayer>): PageType =>
            ({...state, text: payload, isShow: true}),
        [clearNotification]: (
            state: PageType,
            {payload}: ActionType<typeof setPurchaseShares>,
        ): PageType => payload,
    },
    defaultState,
);
