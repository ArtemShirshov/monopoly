import React from 'react';
import renderer from 'react-test-renderer';

import {ApplicationRouter} from './router';

jest.mock('react-redux', () => ({Provider: 'Provider'}));
jest.mock('containers/pagesRouter/pagesRouter', () => ({
    PagesRouterConnected: 'PagesRouterConnected',
}));

describe('<ApplicationRouter />', () => {
    it('should render ApplicationRouter page ', () => {
        const tree = renderer.create(<ApplicationRouter />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
