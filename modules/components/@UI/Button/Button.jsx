// @flow
import React, {type Node} from 'react';

import s from './Button.scss';

/**
 * UI button component
 * @example <Button onClick={this.createUser} disable={error}>Создать</Button>
 * @returns {Node} - rendered Brands gallery component
 */
export const Button = ({children, onClick, disable}): Node => (
    <button className={s.button} onClick={onClick} disabled={disable}>
        {children}
    </button>
);
