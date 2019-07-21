// @flow
import React, {type Node} from 'react';
import classNames from 'classnames';

import s from './Label.scss';

/**
 * UI button component
 * @returns {Node} - rendered Brands gallery component
 */
export const Label = ({children, type}): Node => (
    <div className={classNames(s.label, s[type])}>{children}</div>
);
