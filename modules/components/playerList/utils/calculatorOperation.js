// @flow

/**
 *
 * @param player
 * @param cards
 * @return {number}
 */
export const circularTax = (player, cards) => {
    const {card, centralCard, shares} = player.property;
    const centralTax = [0, 10, 40, 80, 100];
    const currentCentralTax = centralTax[centralCard.length];
    const sharesTax = shares * 10;

    let tax = 0;

    card.forEach(cardPlace => {
        tax += cards.find(card => card.place === cardPlace).taxPrice;
    });

    return tax * 2 + currentCentralTax + sharesTax;
};

export const circularIncome = (player, shares) => {
    const sharesTax = player.property.shares * shares * 0.2;

    return 200 + sharesTax;
};
