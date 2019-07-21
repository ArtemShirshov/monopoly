// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';

import {setShares} from 'reducers/shares';
import {startPurchaseSharesSaga} from 'reducers/players';
import {Title} from 'components/@UI';
import type {ApplicationStoreType} from 'constants/flow/flowTypes';

import s from './shares.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class Shares extends PureComponent<PropsType> {
    state = {
        sharesPrice: this.props.shares,
        selectedPlayer: null,
        sharesNumber: '',
    };

    /**
     * Handle change player
     * @param selectedPlayer
     */
    handleChangePlayer = selectedPlayer => {
        this.setState({selectedPlayer});
    };

    setSharesPrice = event => {
        this.props.setShares(this.state.sharesPrice);
        event.preventDefault();
    };

    handlePurchaseShares = event => {
        event.preventDefault();

        const {
            selectedPlayer: {value: selectedPlayer},
            sharesNumber,
        } = this.state;
        this.props.startPurchaseSharesSaga(selectedPlayer, Number(sharesNumber));

        this.setState({selectedPlayer: null, sharesNumber: ''});
    };

    handleChangeSharesPrice = event => {
        this.setState({sharesPrice: event.target.value});
    };

    handleChangeSharesNumber = event => {
        this.setState({sharesNumber: event.target.value});
    };

    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {shares, players} = this.props;
        const {sharesPrice, selectedPlayer, sharesNumber} = this.state;

        const optionsUsers = players.map(user => ({
            value: user.id,
            label: user.name,
        }));

        return (
            <div className={s.wrap}>
                <Title>Акции</Title>
                <div className={s.priceShares}>Цена акции: {shares}₽</div>
                <form className={s.wrapForm}>
                    <input
                        type="number"
                        value={sharesPrice}
                        onChange={this.handleChangeSharesPrice}
                        className={s.input}
                    />
                    <button onClick={this.setSharesPrice} className={s.btn}>
                        Изменить
                    </button>
                </form>
                <Title>Купить акции</Title>
                <form className={s.wrapForm}>
                    <Select
                        value={selectedPlayer}
                        onChange={this.handleChangePlayer}
                        options={optionsUsers}
                        placeholder="Игрок"
                    />
                    <div className={s.wrapForm}>
                        <input
                            type="number"
                            value={sharesNumber}
                            onChange={this.handleChangeSharesNumber}
                            className={s.input}
                        />
                        <button onClick={this.handlePurchaseShares} className={s.btn}>
                            Купить
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
    shares: store.shares,
    players: store.players,
});

export const mapDispatchToProps = {
    setShares: sharesPrice => setShares(sharesPrice),
    startPurchaseSharesSaga: (player, number) => startPurchaseSharesSaga({player, number}),
};

export const SharesConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Shares);
