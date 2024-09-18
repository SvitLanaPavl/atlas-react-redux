import React from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';
import DeleteListButton from './DeleteListButton';
import { useDroppable } from '@dnd-kit/core';

interface ListProps {
  id: string;
  title: string;
  cards: { id: string; title: string; description: string }[];
}

const List: React.FC<ListProps> = ({ id, title, cards }) => {
  const { setNodeRef } = useDroppable( {id} );

  return (
    <div ref={setNodeRef} className="group/list h-full min-w-96 max-w-96 p-4 flex-shrink-0 flex-grow">
      <DeleteListButton listId={id} />
      <h3>{title}</h3>
      {cards.map((card) => (
        <Card key={card.id} id={card.id} title={card.title} description={card.description} listId={id} />
      ))}
      <NewCardForm listId={id} />
    </div>
  );
};

export default List;
