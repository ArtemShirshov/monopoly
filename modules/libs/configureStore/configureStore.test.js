import {createStore, applyMiddleware, compose} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';

import configureStore, {axiosClient, axiosOptions, sagaMiddleware} from './configureStore';

jest.mock('redux', () => ({
    createStore: jest.fn(() => 'mockStore'),
    applyMiddleware: jest.fn(() => 'applyMiddleware'),
    compose: jest.fn(() => 'composeEnhancers'),
}));

jest.mock('redux-saga', () => () => ({run: jest.fn()}));
jest.mock('redux-axios-middleware', () => jest.fn(() => 'axiosMiddleware'));
jest.mock('../reducers', () => 'rootReducer');
jest.mock('../sagas', () => 'rootSaga');

afterAll(() => {
    process.env.NODE_ENV = 'test';
});

const mockFuncs = [createStore, applyMiddleware, axiosMiddleware, compose, sagaMiddleware.run];

beforeEach(() => {
    const mockClear = mockFunc => mockFunc.mockClear();
    mockFuncs.forEach(mockClear);
});

describe('configureStore function', () => {
    const isNotCalled = mockFunc => expect(mockFunc).not.toBeCalled();

    it('configureStore: should call "createStore" function (development)', () => {
        process.env.NODE_ENV = 'development';
        mockFuncs.forEach(isNotCalled);

        expect(configureStore({store: 'testStore'})).toBe('mockStore');

        expect(axiosMiddleware).toBeCalledWith(axiosClient, axiosOptions);
        expect(applyMiddleware).toBeCalledWith('axiosMiddleware', sagaMiddleware);
        expect(compose).toBeCalledWith('applyMiddleware');
        expect(sagaMiddleware.run).toBeCalledWith('rootSaga');
        expect(createStore).toBeCalledWith('rootReducer', {store: 'testStore'}, 'composeEnhancers');
    });

    it('configureStore: should call "createStore" function (production)', () => {
        process.env.NODE_ENV = 'production';
        mockFuncs.forEach(isNotCalled);

        expect(configureStore({store: 'testStore'})).toBe('mockStore');

        expect(axiosMiddleware).toBeCalledWith(axiosClient, axiosOptions);
        expect(applyMiddleware).toBeCalledWith('axiosMiddleware', sagaMiddleware);
        expect(compose).not.toBeCalled();
        expect(sagaMiddleware.run).toBeCalledWith('rootSaga');
        expect(createStore).toBeCalledWith('rootReducer', {store: 'testStore'}, 'applyMiddleware');
    });
});
