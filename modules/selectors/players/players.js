// @flow
import type {ApplicationStoreType} from 'constants/flow/flowTypes';

/**
 * Get currency symbol
 * @param {ApplicationStoreType} state - Application state
 * @returns {string} - currency symbol
 */
export const getPlayers = (state: ApplicationStoreType): string => state.players;
