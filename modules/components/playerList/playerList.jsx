// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';

import {circularTax, circularIncome} from 'components/playerList/utils/calculatorOperation';
import {Title} from 'components/title/title';

// import type {VoidFunctionType, ApplicationStoreType} from 'constants/flow/flowTypes';

import s from './playerList.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class PlayerList extends PureComponent<PropsType> {
    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {players, cards, shares} = this.props;

        return (
            <div className={s.wrap}>
                <Title>Игроки</Title>

                <div className={s.wrapPlayers}>
                    {players.map(player => (
                        <div className={s.playerItem} key={player.id}>
                            <div className={s.playerName}>{player.name}</div>
                            <div>Налог: {circularTax(player, cards)}₽</div>
                            <div>Доход: {circularIncome(player, shares)}₽</div>
                            <div>Карты: {player.property.card.length} шт.</div>
                            <div>Центральные: {player.property.centralCard.length} шт.</div>
                            <div>Страховка: {player.property.insurancePolicy} шт.</div>
                            <div>Акции: {player.property.shares} шт.</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
    players: store.players,
    cards: store.cards,
    shares: store.shares,
});

export const mapDispatchToProps = {
    // startPurchaseSaga: (player, card) => startPurchaseSaga(player, card),
};

export const PlayerListConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlayerList);
