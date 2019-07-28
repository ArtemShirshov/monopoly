// @flow
import {createActions, handleActions, type ActionType} from 'redux-actions';

// import type {PageType, RouteType} from './routeType';

export const defaultState = [
    {
        id: 1,
        name: 'Артем',
        role: [1, 2],
        property: {
            card: [],
            centralCard: [],
            shares: 0,
            insurancePolicy: 0,
        },
    },
    {
        id: 2,
        name: 'Настя',
        role: [3, 4],
        property: {
            card: [],
            centralCard: [],
            shares: 0,
            insurancePolicy: 0,
        },
    },
];

export const {
    setPlayer,
    setPurchaseShares,
    startPurchaseSharesSaga,
    startCreateUserSaga,
    addUser,
} = createActions({
    SET_PLAYER: (player: PageType): PageType => player,
    SET_PURCHASE_SHARES: (player: PageType): PageType => player,
    START_PURCHASE_SHARES_SAGA: purchase => purchase,
    START_CREATE_USER_SAGA: (userName: string): string => userName,
    ADD_USER: player => player,
});

/**
 * Page info reducer
 *
 * @returns {RouteType} state New state
 */
export const players = handleActions(
    {
        [setPlayer]: (state: PageType, {payload}: ActionType<typeof setPlayer>): PageType =>
            payload,
        [setPurchaseShares]: (
            state: PageType,
            {payload}: ActionType<typeof setPurchaseShares>,
        ): PageType => payload,
        [setPurchaseShares]: (
            state: PageType,
            {payload}: ActionType<typeof setPurchaseShares>,
        ): PageType => payload,
        [addUser]: (state: PageType, {payload}: ActionType<typeof setPurchaseShares>): PageType => [
            ...state,
            payload,
        ],
    },
    defaultState,
);
