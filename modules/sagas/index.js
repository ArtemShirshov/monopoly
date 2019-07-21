import {all} from 'redux-saga/effects';

import purchaseSaga from './purchase/purchase';
import UserSaga from './User/User';

/**
 * RootSaga
 */
export default function* rootSaga() {
    yield all([purchaseSaga(), UserSaga()]);
}
