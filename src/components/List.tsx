import React from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';
import DeleteListButton from './DeleteListButton';

interface ListProps {
  title: string;
  cards: { title: string; description: string }[];
}

const List: React.FC<ListProps> = ({ title, cards }) => {
  return (
    <div className="group/list h-full min-w-96 p-4 flex-1">
      <DeleteListButton />
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
      <NewCardForm />
    </div>
  );
};

export default List;
