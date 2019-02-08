// @flow
import React, {type Node} from 'react';
import {Link} from '@reach/router';

import s from './header.scss'

/**
 * Brands gallery component
 * @returns {Node} - rendered Brands gallery component
 */
export const Header = (): Node => (
    <div className={s.header}>
        <Link to='/' className={s.logo}>Монополия</Link>
    </div>
);
