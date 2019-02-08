import React from 'react';
import renderer from 'react-test-renderer';

import {PagesRouter} from './pagesRouter';

jest.mock('@reach/router', () => ({
    Router: 'Router',
    Match: () => 'Match',
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

describe('<PagesRouter />', () => {
    const props = {
        setPage: () => {},
    };

    it('should render pagesRouter page ', () => {
        const tree = renderer.create(<PagesRouter {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
