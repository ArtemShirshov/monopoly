/**
 * Search for a player by id
 * @param {Array} players - Players list
 * @param {number} currentPlayerId - ID of the player
 * @return {Array} - Player found
 */
export const findPlayer = (players, currentPlayerId) =>
    players.find(player => player.id === currentPlayerId);
