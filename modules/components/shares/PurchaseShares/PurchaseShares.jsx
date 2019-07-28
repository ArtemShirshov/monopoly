// @flow
import React, {PureComponent, type Node} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';

import {startPurchaseSharesSaga} from 'reducers/players';
import {Title, Button, Input} from 'components/@UI';
import type {ApplicationStoreType} from 'constants/flow/flowTypes';

import s from './PurchaseShares.scss';

type PropsType = {};

/**
 * Purchase of shares component
 * @return {Node} - Element
 */
export class PurchaseShares extends PureComponent<PropsType> {
    state = {
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

    handlePurchaseShares = event => {
        event.preventDefault();

        const {
            selectedPlayer: {value: selectedPlayer},
            sharesNumber,
        } = this.state;
        this.props.startPurchaseSharesSaga(selectedPlayer, Number(sharesNumber));

        this.setState({selectedPlayer: null, sharesNumber: ''});
    };

    handleChangeSharesNumber = event => {
        this.setState({sharesNumber: Number(event.target.value)});
    };

    /**
     * Render jsx to html
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {players} = this.props;
        const {selectedPlayer, sharesNumber} = this.state;

        const optionsUsers = players.map(user => ({
            value: user.id,
            label: user.name,
        }));

        return (
            <div className={s.wrap}>
                <Title>Купить акции</Title>
                <form className={s.wrap}>
                    <Select
                        value={selectedPlayer}
                        onChange={this.handleChangePlayer}
                        options={optionsUsers}
                        placeholder="Игрок"
                    />
                    <div className={s.wrap}>
                        <Input
                            type="number"
                            value={sharesNumber}
                            onChange={this.handleChangeSharesNumber}
                        />
                        <Button onClick={this.handlePurchaseShares}>Купить</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
    players: store.players,
});

export const mapDispatchToProps = {
    startPurchaseSharesSaga: (player, number) => startPurchaseSharesSaga({player, number}),
};

export const PurchaseSharesConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PurchaseShares);
