// @flow
import React, {PureComponent, type Node} from 'react';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';

import {PagesRouterConnected} from 'containers/pagesRouter/pagesRouter';
import configureStore from 'libs/configureStore/configureStore';

const store = configureStore();

/**
 * React Router
 *
 * @return {Node} React router component
 */
export class ApplicationRouter extends PureComponent<PropsType> {
    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        return (
            <Provider store={store}>
                <PagesRouterConnected />
            </Provider>
        );
    }
}

export default hot(module)(ApplicationRouter);
