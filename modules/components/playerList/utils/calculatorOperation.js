export const circularTax = (player, cards) => {
    const currentCard = player.property.card;
    const centralTax = [0,10,40,80,100];
    const currentCentralTax = centralTax[player.property.centralCard.length];
    const sharesTax = player.property.shares * 10;
    let tax = 0;

    currentCard.forEach(cardPlace => {
        tax += cards.find(card => card.place === cardPlace).taxPrice;
    });

    return (tax * 2) + currentCentralTax + sharesTax;
};

export const circularIncome = (player, shares) => {
    const sharesTax = (player.property.shares * shares) * 0.2;

    return 200 + sharesTax;
};
