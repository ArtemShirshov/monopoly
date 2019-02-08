// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';

import {startPurchaseSaga} from 'reducers/cards';
import {getFreeCards} from 'selectors/cards/cards';
import {Title} from 'components/title/title';

// import type {VoidFunctionType, ApplicationStoreType} from 'constants/flow/flowTypes';

import s from './placePurchase.scss'

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class PlacePurchase extends PureComponent<PropsType> {
    state = {
        selectedPlayer: null,
        selectedCard: null,
    };

    /**
     * Handle change player
     * @param selectedPlayer
     */
    handleChangePlayer = selectedPlayer => {
        this.setState({selectedPlayer});
    };

    /**
     * Handle change card
     * @param selectedCard
     */
    handleChangeCard = selectedCard => {
        this.setState({selectedCard});
    };

    /**
     * Purchase card
     */
    purchase = () => {
        const {selectedPlayer, selectedCard} = this.state;
        const {cardsFree} = this.props;

        if (selectedPlayer && selectedCard) {
            this.props.startPurchaseSaga({
                selectedPlayer: selectedPlayer.value,
                selectedCard: cardsFree[selectedCard.value],
            });
        }
        this.setState({selectedPlayer: null, selectedCard: null});
    };
    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {players, cardsFree} = this.props;
        const {selectedPlayer, selectedCard} = this.state;

        const optionsUsers = players.map(user => ({
            value: user.id,
            label: user.name,
        }));

        const optionsCard = cardsFree.map((card, id) => ({
            value: id,
            label: card.name,
        }));

        return (
            <Fragment>
                <Title>Покупка имущества</Title>

                <div className={s.wrapSelect}>
                    <Select
                        value={selectedPlayer}
                        onChange={this.handleChangePlayer}
                        options={optionsUsers}
                        placeholder="Игрок"
                    />
                </div>
                <div className={s.wrapSelect}>
                    <Select
                        value={selectedCard}
                        onChange={this.handleChangeCard}
                        options={optionsCard}
                        placeholder="Карты"
                    />
                </div>
                <button className={s.btn} onClick={this.purchase}>Купить</button>
            </Fragment>
        );
    }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
    players: store.players,
    cardsFree: getFreeCards(store),
});

export const mapDispatchToProps = {
    startPurchaseSaga: (player, card) => startPurchaseSaga(player, card),
};

export const PlacePurchaseConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlacePurchase);
