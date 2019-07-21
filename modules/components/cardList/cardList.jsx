// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {circularTax, circularIncome} from 'components/playerList/utils/calculatorOperation';
import {Title} from 'components/title/title';

import s from './cardList.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class CardList extends PureComponent<PropsType> {
    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {cards} = this.props;

        return (
            <div className={s.wrap}>
                <Title>Список карт</Title>

                <div className={s.wrapCards}>
                    {cards.map(card => (
                        <div className={s.cardItem}>
                            <div className={s.cardWrap}>
                                <div className={classNames(s.cardHeader, s[card.color])}>
                                    <div>{card.level}</div>
                                    <div>{card.name}</div>
                                </div>
                                <div className={s.cardBody}>
                                    <div>{card.price}</div>
                                    <div>АРЕНДА {card.rentPrice}</div>
                                    <div>НАЛОГ {card.taxPrice}</div>
                                    <div>{card.expansionPrice}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
    cards: store.cards,
});

export const CardListConnected = connect(mapStateToProps)(CardList);
