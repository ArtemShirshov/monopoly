// @flow
import React, {PureComponent, type Node, Fragment} from 'react';

import {CardListConnected} from 'components/cardList/cardList';

import s from './card.scss';

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class Card extends PureComponent<> {
    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        return (
            <div className={s.wrap}>
                <CardListConnected />
            </div>
        );
    }
}
