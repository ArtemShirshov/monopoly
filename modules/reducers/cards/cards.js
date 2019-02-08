// @flow
import {createActions, handleActions, type ActionType} from 'redux-actions';

import {card} from 'constants/card/card';

import type {CardType} from './cardsType';

export const defaultState = card;

export const {setStatusCard, startPurchaseSaga} = createActions({
    SET_STATUS_CARD: (card: CardType): CardType => card,
    START_PURCHASE_SAGA: (purchase: CardType): CardType => purchase,
});

/**
 * Page info reducer
 *
 * @returns {RouteType} state New state
 */
export const cards = handleActions(
    {
        [setStatusCard]: (state: CardType, {payload}: ActionType<typeof setStatusCard>): CardType =>
            payload,
    },
    defaultState,
);
