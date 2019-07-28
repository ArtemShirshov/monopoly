// @flow
import React, {PureComponent, type Node} from 'react';
import {connect} from 'react-redux';

import {setShares} from 'reducers/shares';
import {Button, Input, Title} from 'components/@UI';
import type {ApplicationStoreType} from 'constants/flow/flowTypes';

import s from './SharesPrice.scss';

type PropsType = {};

/**
 * Component for shares purchase and change price
 * @return {Node} - Element
 */
export class SharesPrice extends PureComponent<PropsType> {
    state = {
        sharesPrice: this.props.shares,
    };

    setSharesPrice = event => {
        this.props.setShares(this.state.sharesPrice);
        event.preventDefault();
    };

    handleChangeSharesPrice = event => {
        this.setState({sharesPrice: event.target.value});
    };

    /**
     * Render jsx to html
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {shares} = this.props;
        const {sharesPrice} = this.state;

        return (
            <div className={s.wrap}>
                <Title>Акции</Title>
                <div className={s.priceShares}>Цена акции: {shares}₽</div>
                <form className={s.wrap}>
                    <input
                        type="number"
                        value={sharesPrice}
                        onChange={this.handleChangeSharesPrice}
                        className={s.input}
                    />
                    <Button onClick={this.setSharesPrice}>Изменить</Button>
                </form>
            </div>
        );
    }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
    shares: store.shares,
});

export const mapDispatchToProps = {
    setShares,
};

export const SharesPriceConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SharesPrice);
