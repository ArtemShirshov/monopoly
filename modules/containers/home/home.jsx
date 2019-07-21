// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from '@reach/router';

// import type {VoidFunctionType, ApplicationStoreType} from 'constants/flow/flowTypes';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class Home extends PureComponent<PropsType> {
    /**
     * Render jsx to html
     * @returns {Node} Rendered react component
     */
    render(): Node {
        return (
            <Fragment>
                <div>Игроки</div>
                <Link to="/create-user">Создать</Link>
                <Link to="/simple-play">Упрощенный режим</Link>
                <Link to="/card">Список карт</Link>
            </Fragment>
        );
    }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
    // cmsPopup: store.cmsPopup,
});

export const mapDispatchToProps = {
    // closePopup: () => setCmsPopupVisibility(false, null),
    // getCustomer,
};

export const HomeConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
