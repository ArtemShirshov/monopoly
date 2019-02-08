import {all} from 'redux-saga/effects';

import purchaseSaga from './purchase/purchase';

/**
 * RootSaga
 */
export default function* rootSaga() {
    yield all([purchaseSaga()]);
}
