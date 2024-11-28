/** @format */

import { useState, useEffect, useCallback } from 'react';

export const useGameModel = (maxNumber: number) => {
  const [cards, setCards] = useState<number[]>([]); // Array of shuffled cards
  const [selectedCards, setSelectedCards] = useState<number[]>([]); // Array of selected cards indices
  const [matchedCards, setMatchedCards] = useState<Set<number>>(new Set()); // To track matched cards
  const [turns, setTurns] = useState<number>(0); // Count the number of turns
  const [gameOver, setGameOver] = useState<boolean>(false); // Game over flag

  // Generate card pairs and shuffle them
  const generateCards = useCallback(() => {
    const cardPairs = [];
    for (let i = 1; i <= maxNumber; i++) {
      cardPairs.push(i, i); // Add pairs of numbers
    }
    // Shuffle cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setSelectedCards([]); // Reset selected cards
    setMatchedCards(new Set()); // Reset matched cards
    setTurns(0); // Reset turns
    setGameOver(false); // Reset game over flag
  }, [maxNumber]);

  // Select a card
  const selectCard = (index: number) => {
    // Prevent selection if game is over or two cards are already selected
    if (
      gameOver ||
      selectedCards.length === 2 ||
      selectedCards.includes(index) ||
      matchedCards.has(index)
    ) {
      return;
    }

    setSelectedCards((prev) => [...prev, index]);

    // If 2 cards are selected, check for match
    if (selectedCards.length === 1) {
      setTurns((prev) => prev + 1);

      const [firstIndex] = selectedCards;
      const secondIndex = index;

      if (cards[firstIndex] === cards[secondIndex]) {
        // If cards match, mark them as matched
        setMatchedCards((prev) =>
          new Set(prev).add(firstIndex).add(secondIndex)
        );

        // Check if all cards are matched
        if (matchedCards.size + 2 === cards.length) {
          setGameOver(true); // Game is over
        }

        // Clear selected cards after match
        setSelectedCards([]);
      } else {
        // If cards don't match, flip them back after delay
        setTimeout(() => setSelectedCards([]), 1000);
      }
    }
  };

  // Reset the game
  const resetGame = () => {
    generateCards(); // Regenerate shuffled cards
  };

  // Initialize cards when component mounts or maxNumber changes
  useEffect(() => {
    generateCards();
  }, [generateCards]);

  return {
    cards,
    selectedCards,
    turns,
    matchedCards,
    gameOver,
    selectCard,
    resetGame,
  };
};
