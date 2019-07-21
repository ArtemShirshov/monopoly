/**
 * Set active usage glasses
 * @param {WizardUsageType} usage - Usage wizard
 * @param {string} sku - Sku usage
 * @return {WizardUsageType} - Active usage glasses
 */
export const setCard = (cards: WizardUsageType, place: string): WizardUsageType => {
    const freeCard = [];

    cards.forEach(card => {
        if (card.place === place) {
            freeCard.push({...card, sold: card.place === place});
        } else {
            freeCard.push(card);
        }
    });

    return freeCard;
};

export const setCardPlayer = (players, currentPlayerId, selectedCard) => {
    const result = [];

    players.forEach(player => {
        if (player.id === currentPlayerId) {
            player.property.card.push(selectedCard.place);
        }
        result.push(player);
    });

    return result;
};

export const setSharesPlayer = (players, currentPlayerId, sharesNumber) => {
    const result = [];

    players.forEach(player => {
        if (player.id === currentPlayerId) {
            player.property.shares += sharesNumber;
        }
        result.push(player);
    });

    return result;
};
