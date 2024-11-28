/** @format */

import { useGameModel } from '@/hooks/useGameModel';
import { useState } from 'react';

const GameBoard = () => {
  const [maxNumber, setMaxNumber] = useState<number>(6); // Default max number
  const {
    cards,
    selectedCards,
    turns,
    matchedCards,
    gameOver,
    selectCard,
    resetGame,
  } = useGameModel(maxNumber);

  // Handle maxNumber change and reset the game automatically
  const handleMaxNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMaxNumber(value);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white'>
      <h1 className='text-3xl font-bold mb-4 text-black'>
        Dynamic Number Matching Game
      </h1>

      {/* Input to set max number */}
      <input
        type='number'
        value={maxNumber}
        onChange={handleMaxNumberChange}
        className='p-2 border rounded mb-4 text-black'
        min={2} // Ensure at least 2 for valid pairs
      />

      {/* Game Board */}
      <div className='grid grid-cols-4 gap-4 mb-4'>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => selectCard(index)}
            className={`w-20 h-20 flex items-center shadow-md text-black justify-center bg-blue-500 rounded cursor-pointer 
                        ${
                          selectedCards.includes(index) ||
                          matchedCards.has(index) ||
                          gameOver
                            ? 'bg-white'
                            : 'bg-gray-400 rotate-180'
                        }`}>
            {selectedCards.includes(index) ||
            matchedCards.has(index) ||
            gameOver
              ? card
              : '?'}
          </div>
        ))}
      </div>

      {/* Score and Turns */}
      <div className='text-xl mb-4'>Turns: {turns}</div>

      {/* Game Over Message */}
      {gameOver && (
        <div className='text-2xl text-green-500 mb-4'>
          Congratulations! You won!
        </div>
      )}

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className='bg-blue-500 text-white py-2 px-4 rounded mt-4'>
        Reset Game
      </button>
    </div>
  );
};

export default GameBoard;
