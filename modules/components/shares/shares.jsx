// @flow
import React, {type Node} from 'react';

import {PurchaseSharesConnected} from './PurchaseShares/PurchaseShares';
import {SharesPriceConnected} from './SharesPrice/SharesPrice';
import s from './shares.scss';

/**
 * Component for shares purchase and change price
 * @return {Node} - Element
 */
export const Shares = () => (
    <div className={s.wrap}>
        <PurchaseSharesConnected />
        <SharesPriceConnected />
    </div>
);
