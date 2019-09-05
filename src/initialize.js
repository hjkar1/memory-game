// Shuffle the cards with the Durstenfeld shuffle.
const shuffleCards = cards => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

// Generate a board of cards for a new game.
export const initializeCards = images => {
  const shuffledImages = shuffleCards(images);
  return shuffledImages.map((image, index) => {
    return { image, match: false, clicked: false, id: index };
  });
};
