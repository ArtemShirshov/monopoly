// @flow
import React, {type Node} from 'react';

import s from './Input.scss';

/**
 * UI input component
 * @returns {Node} - rendered Brands gallery component
 */
export const Input = ({type, value, onChange}): Node => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        className={s.input}
    />
);

Input.defaultProps = {
    type: 'text',
};
