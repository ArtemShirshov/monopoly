// @flow
import type {SagaIterator} from 'redux-saga';
import {put, select, takeEvery} from 'redux-saga/effects';

import {startCreateUserSaga, addUser} from 'reducers/players';
import {getPlayers} from 'selectors/players/players';

const defaultFieldsUser = {
    id: 1,
    // TODO:
    //  Временное решение с ролями пользователей.
    //  Необходимо добавить выбор ролей.
    role: [1, 2, 3, 4],
    property: {
        card: [],
        centralCard: [],
        shares: 0,
        insurancePolicy: 0,
    },
};

/**
 * Create user
 * @param {number} payload - Id prescription
 */
export function* createUser({payload}: ActionCreatorType<number>): SagaIterator {
    const players = yield select(getPlayers);

    yield put(
        addUser({
            ...defaultFieldsUser,
            id: players.length + 1,
            name: payload,
        }),
    );
}

/**
 * Begin users saga
 */
export default function* UserSaga(): SagaIterator {
    yield takeEvery(startCreateUserSaga, createUser);
}
