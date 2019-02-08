import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {sentryCaptureException} from 'libs/sentryCaptureException';

import {ApplicationRouter} from './router';

configure({adapter: new Adapter()});

jest.mock('react-redux', () => ({Provider: 'Provider'}));
jest.mock('containers/pagesRouter/pagesRouter', () => ({
    PagesRouterConnected: 'PagesRouterConnected',
}));
jest.mock('libs/sentryCaptureException');

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ApplicationRouter />);
    sentryCaptureException.mockClear();
});

describe('<ApplicationRouter /> component', () => {
    test('componentDidCatch method should call "sentryCaptureException" function', () => {
        expect(sentryCaptureException).not.toBeCalled();

        wrapper.instance().componentDidCatch({error: 'test'}, {errorInfo: 'test2'});

        expect(sentryCaptureException).toBeCalledWith({error: 'test'}, {errorInfo: 'test2'});
    });
});
