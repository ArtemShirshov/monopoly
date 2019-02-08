import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {connect} from 'react-redux';

import {sentryCaptureException} from 'libs/sentryCaptureException';

import {PagesRouter, mapDispatchToProps} from './pagesRouter';

configure({adapter: new Adapter()});

jest.mock('react-redux', () => ({connect: jest.fn(() => () => {})}));
jest.mock('@reach/router', () => ({
    Router: 'Router',
    Match: 'Match',
}));
jest.mock('libs/sentryCaptureException');
jest.mock('containers/dynamicPage/dynamicPage', () => ({
    DynamicPageConnected: 'DynamicPageConnected',
}));
jest.mock('constants/routes/routes', () => ({
    StaticRoutes: [
        {
            path: '/',
            page: 'home',
            component: 'HomeConnected',
        },
    ],
}));

let props;
let wrapper;

beforeEach(() => {
    props = {
        setPage: jest.fn(),
    };

    wrapper = shallow(<PagesRouter {...props} />);
    props.setPage.mockClear();
    sentryCaptureException.mockClear();
});

describe('<PagesRouter /> component', () => {
    test('connect', () => {
        expect(connect).toHaveBeenCalledWith(null, mapDispatchToProps);
    });

    test('componentDidCatch method should call "sentryCaptureException" function', () => {
        expect(wrapper.state().hasError).toBe(false);
        expect(sentryCaptureException).not.toBeCalled();

        wrapper.instance().componentDidCatch({error: 'test'}, {errorInfo: 'test2'});

        expect(wrapper.state().hasError).toBe(true);
        expect(sentryCaptureException).toBeCalledWith({error: 'test'}, {errorInfo: 'test2'});
    });

    test('setPage method should call "setPage" action', () => {
        expect(props.setPage).not.toBeCalled();
        wrapper.instance().setPage('test', {id: '1000'});
        expect(props.setPage).toBeCalledWith({page: 'test', params: {id: '1000'}});
    });

    test('Match component children should call "setPage" method', () => {
        wrapper.instance().setPage = jest.fn();
        expect(wrapper.instance().setPage).not.toBeCalled();
        wrapper
            .find('Match')
            .props('children')
            .children({match: {id: '1000'}});
        expect(wrapper.instance().setPage).toBeCalledWith('home', {id: '1000'});
    });
});
