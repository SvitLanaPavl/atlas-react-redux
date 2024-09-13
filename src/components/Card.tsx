import React from 'react';
import DeleteCardButton from './DeleteCardButton';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>{title}</span>
        <DeleteCardButton />
      </h5>
      <p className="mt-0 text-left">{description}</p>
    </div>
  );
};

export default Card;
