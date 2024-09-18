import React from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';
import DeleteListButton from './DeleteListButton';

interface ListProps {
  id: string;
  title: string;
  cards: { id: string; title: string; description: string }[];
}

const List: React.FC<ListProps> = ({ id, title, cards }) => {
  return (
    <div className="group/list h-full min-w-96 p-4 flex-1">
      <DeleteListButton />
      <h3>{title}</h3>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
      <NewCardForm listId={id} />
    </div>
  );
};

export default List;
