// @flow
import {createActions, handleActions, type ActionType} from 'redux-actions';

import type {PageType, RouteType} from './routeType';

export const defaultState = {
    page: '',
    params: {},
};

export const {setPage} = createActions({
    SET_PAGE: (pageInfo: PageType): PageType => pageInfo,
});

/**
 * Page info reducer
 *
 * @returns {RouteType} state New state
 */
export const route = handleActions(
    {
        [setPage]: (state: PageType, {payload}: ActionType<typeof setPage>): PageType => ({
            ...payload,
        }),
    },
    defaultState,
);
