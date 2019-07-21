// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from '@reach/router';

import type {ApplicationStoreType} from 'constants/flow/flowTypes';

import {Button, Label} from 'components/@UI';
import {startCreateUserSaga} from 'reducers/players';

type PropsType = {};

/**
 * Main container for create users and users list
 * @return {Node} - Element
 */
export class CreateUser extends PureComponent<PropsType> {
    state = {
        name: '',
        error: true,
        errorText: '',
        label: '',
    };

    handlerChange = event => {
        const {value} = event.currentTarget;

        this.setState({name: value, error: false});
    };

    createUser = () => {
        if (this.state.name === '') {
            this.setState({error: true, errorText: 'Имя игрока пустое', label: ''});
            return false;
        }

        this.props.startCreateUserSaga(this.state.name);
        this.setState({
            name: '',
            error: true,
            errorText: '',
            label: 'Игрок успешно создан.',
        });
    };

    /**
     * Render jsx to html
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {name, label, error} = this.state;
        const {players} = this.props;

        return (
            <Fragment>
                <h1>Создание игрока</h1>
                <input type="text" onChange={this.handlerChange} value={name} />
                <Button onClick={this.createUser} disable={error}>
                    Создать
                </Button>
                {label !== '' && (
                    <Fragment>
                        <Label type="success">{label}</Label>
                        <Link to="/simple-play">Пошли играть!</Link>
                    </Fragment>
                )}

                {players.map(player => (
                    <div key={player.id}>
                        {player.id}. {player.name}
                    </div>
                ))}
            </Fragment>
        );
    }
}

export const mapStateToProps = (state: ApplicationStoreType) => ({
    players: state.players,
});
export const mapDispatchToProps = {
    startCreateUserSaga,
};

export const CreateUserConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateUser);
