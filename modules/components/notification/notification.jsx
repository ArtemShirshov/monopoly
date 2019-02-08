// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import s from './notification.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class Notification extends PureComponent<PropsType> {
    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {notification} = this.props;

        return (
            <div className={classNames(s.wrap, {[s.show]: !notification.isShow})}>
                <div className={s.text}>{notification.text}</div>
            </div>
        );
    }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
    notification: store.notification,
    // cards: store.cards,
    // shares: store.shares,
});

export const mapDispatchToProps = {
    // startPurchaseSaga: (player, card) => startPurchaseSaga(player, card),
};

export const NotificationConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notification);
