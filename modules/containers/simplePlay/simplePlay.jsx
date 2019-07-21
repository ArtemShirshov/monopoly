// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from '@reach/router';

import type {ApplicationStoreType} from 'constants/flow/flowTypes';
import {PlacePurchaseConnected} from 'components/placePurchase/placePurchase';
import {PlayerListConnected} from 'components/playerList/playerList';
import {SharesConnected} from 'components/shares/shares';

import s from './simplePlay.scss';

/**
 * Main container for simple page
 *
 * @return {Node} - Element
 */
export class SimplePlay extends PureComponent<> {
    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {players} = this.props;

        return (
            <div className={s.wrap}>
                {players.length > 0 ? (
                    <Fragment>
                        <PlayerListConnected />
                        <PlacePurchaseConnected />
                        <SharesConnected />
                    </Fragment>
                ) : (
                    <Link to="/create-user">Создайте игроков</Link>
                )}
            </div>
        );
    }
}

export const mapStateToProps = (state: ApplicationStoreType) => ({
    players: state.players,
});

export const SimplePlayConnected = connect(mapStateToProps)(SimplePlay);
