// @flow
import type {SagaIterator} from 'redux-saga';

import {put, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {setNotification, clearNotification} from 'reducers/notification';

/**
 * Set active prescription
 * @param {number} payload - Id prescription
 */
export function* showNotification({text}: ActionCreatorType<number>): SagaIterator {
    yield put(setNotification(text));

    yield call(delay, 5000);

    yield put(clearNotification());
}
