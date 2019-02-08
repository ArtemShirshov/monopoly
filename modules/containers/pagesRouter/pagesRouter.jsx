// @flow
import React, {Fragment, PureComponent, type Node} from 'react';
import {connect} from 'react-redux';
import {Router, Match} from '@reach/router';

import {StaticRoutes} from 'constants/routes/routes';
import type {VoidFunctionType} from 'constants/flow/flowTypes';

import {Header} from 'components/header/header';
import {NotificationConnected} from 'components/notification/notification';
import {setPage, type PageType} from 'reducers/route/index';

type PropsType = {
    setPage: VoidFunctionType<PageType>,
};

type StateType = {
    hasError: boolean,
};

/**
 *  Class for PagesRouter
 */
export class PagesRouter extends PureComponent<PropsType, StateType> {
    state = {
        hasError: false,
    };

    /**
     * Catch JavaScript errors anywhere in their child component tree
     *
     * @param {{}} error - error
     * @param {{}} errorInfo - error info
     */
    componentDidCatch(error: {}, errorInfo: {}) {
        this.setState({hasError: true});
    }

    /**
     * Set match page and params
     *
     * @param {string} page - page name
     * @param {{}} match - params from url
     */
    setPage = (page: string, match: {}) => {
        this.props.setPage({page, params: match});
    };

    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        if (this.state.hasError) {
            return <p>Something went wrong.</p>;
        }

        return (
            <Fragment>
                <Header />
                <NotificationConnected />
                <Router>
                    {StaticRoutes.map(route => (
                        <route.component path={route.path} key={route.path} page={route.page} />
                    ))}
                </Router>
                {StaticRoutes.map(route => (
                    <Match path={route.path} key={route.path}>
                        {props => Boolean(props.match) && this.setPage(route.page, props.match)}
                    </Match>
                ))}
            </Fragment>
        );
    }
}

export const mapDispatchToProps = {setPage};

export const PagesRouterConnected = connect(
    null,
    mapDispatchToProps,
)(PagesRouter);
