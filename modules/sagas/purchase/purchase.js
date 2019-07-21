// @flow
import type {SagaIterator} from 'redux-saga';
import {put, select, takeEvery, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {startPurchaseSaga, setStatusCard} from 'reducers/cards';
import {setPlayer, setPurchaseShares, startPurchaseSharesSaga} from 'reducers/players';
import {getCards} from 'selectors/cards/cards';
import {getPlayers} from 'selectors/players/players';
import {setCard, setCardPlayer, setSharesPlayer} from 'sagas/utils/purchase';
import {findPlayer} from 'libs/player/player';
import {showNotification} from 'sagas/notification/notification';

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

    const currentPlayer = yield call(findPlayer, players, selectedPlayer);
    yield call(showNotification, {text: currentPlayer.name});
    yield call(delay, 1000);
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
