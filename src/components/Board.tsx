import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import { RootState } from '../store';

const Board: React.FC = () => {
  // fetches lists from Redux store using useSelector
  const lists = useSelector((state: RootState) => state.lists.lists);
  const cards = useSelector((state: RootState) => state.lists.cards);

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map((list) => (
          <List 
            key={list.id} 
            id={list.id} 
            title={list.title} 
            cards={list.cardIds
              .map((cardId) => {
                const card = cards.find(card => card.id === cardId);
                return card ? { id: card.id, title: card.title, description: card.description } : null ;
              })
            .filter((card): card is { id: string; title: string; description: string } => card !== null)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
