// @flow
import React, {PureComponent, type Node} from 'react';
import {Link} from '@reach/router';

import s from './home.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class Home extends PureComponent<PropsType> {
    /**
     * Render jsx to html
     * @returns {Node} Rendered react component
     */
    render(): Node {
        return (
            <div className={s.wrapper}>
                <Link to="/create-user">Создать</Link>
                <Link to="/simple-play">Упрощенный режим</Link>
                <Link to="/card">Список карт</Link>
            </div>
        );
    }
}
