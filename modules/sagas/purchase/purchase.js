// @flow
import type {SagaIterator} from 'redux-saga';
import {put, select, takeEvery} from 'redux-saga/effects';

import {startPurchaseSaga, setStatusCard} from 'reducers/cards';
import {setPlayer, setPurchaseShares, startPurchaseSharesSaga} from 'reducers/players';
import {getCards} from 'selectors/cards/cards';
import {getPlayers} from 'selectors/players/players';
import {setCard, setCardPlayer, setSharesPlayer} from 'sagas/utils/purchase';

/**
 * Set active prescription
 * @param {number} payload - Id prescription
 */
export function* purchaseCard({payload}: ActionCreatorType<number>): SagaIterator {
    const {selectedCard, selectedPlayer} = payload;
    const cards = yield select(getCards);
    yield put(setStatusCard(setCard(cards, selectedCard.place)));

    const players = yield select(getPlayers);
    yield put(setPlayer(setCardPlayer(players, selectedPlayer, selectedCard)));
}

/**
 * Set active prescription
 * @param {number} payload - Id prescription
 */
export function* purchaseShares({payload}: ActionCreatorType<number>): SagaIterator {
    const {player, number} = payload;
    const players = yield select(getPlayers);

    yield put(setPurchaseShares(setSharesPlayer(players, player, number)));
}

/**
 * Begin of wizard saga
 */
export default function* purchaseSaga(): SagaIterator {
    yield takeEvery(startPurchaseSaga, purchaseCard);
    yield takeEvery(startPurchaseSharesSaga, purchaseShares);
}
