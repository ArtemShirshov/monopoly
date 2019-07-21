// @flow
import {createSelector} from 'reselect';

import type {ApplicationStoreType} from 'constants/flow/flowTypes';

/**
 * Get currency symbol
 * @param {ApplicationStoreType} state - Application state
 * @returns {string} - currency symbol
 */
export const getCards = (state: ApplicationStoreType): string => state.cards;

/**
 * Is show prescription block
 * @param {ApplicationStoreType} state - Application state
 * @return {boolean} - Is show prescription block
 */
export const getFreeCards = createSelector(
    getCards,
    (cards: WizardUsageType): boolean => {
        const freeCard = [];

        cards.forEach(card => {
            if (!card.sold) freeCard.push(card);
        });

        return freeCard;
    },
);
