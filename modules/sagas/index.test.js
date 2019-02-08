import {testSaga} from 'redux-saga-test-plan';

import appSaga from './app/app';
import wizardSaga from './wizard/wizard';

import rootSaga from './index';

jest.mock('./app/app', () => () => 'appSaga');
jest.mock('./wizard/wizard', () => () => 'wizardSaga');

describe('rootSaga saga', () => {
    it('Should iterate all sagas', () => {
        testSaga(rootSaga)
            .next()
            .all([appSaga(), wizardSaga()])
            .next()
            .isDone();
    });
});
