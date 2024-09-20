import React from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import { RootState } from '../store';
import { moveCard } from '../slices/listsSlice';

const Board: React.FC = () => {
  // fetches lists from Redux store using useSelector
  const lists = useSelector((state: RootState) => state.lists.lists);
  const cards = useSelector((state: RootState) => state.lists.cards);
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      }
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over) {
      const cardId = active.id;
      const sourceListId = active.data.current.listId;
      const destinationListId = over.id;

      if (sourceListId !== destinationListId) {
        dispatch(moveCard({ cardId, sourceListId, destinationListId }));
      }
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
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
    </DndContext>
  );
};

export default Board;
