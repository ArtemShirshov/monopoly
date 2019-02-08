// @flow
import React, {PureComponent, type Node, Fragment} from 'react';

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
        return (
            <div className={s.wrap}>
                <PlayerListConnected />
                <PlacePurchaseConnected />
                <SharesConnected />
            </div>
        );
    }
}
