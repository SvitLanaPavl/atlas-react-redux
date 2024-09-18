import React from 'react';
import DeleteCardButton from './DeleteCardButton';
import { useDraggable } from '@dnd-kit/core';

interface CardProps {
  id: string;
  title: string;
  description: string;
  listId: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, listId }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { listId },
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>{title}</span>
        <DeleteCardButton cardId={id} />
      </h5>
      <p className="mt-0 text-left">{description}</p>
    </div>
  );
};

export default Card;
