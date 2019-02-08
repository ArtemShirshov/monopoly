// @flow
import React, {type Node} from 'react';

import s from './title.scss';

/**
 * Brands gallery component
 * @returns {Node} - rendered Brands gallery component
 */
export const Title = ({children}): Node => <div className={s.title}>{children}</div>;
