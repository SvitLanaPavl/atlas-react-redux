import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, clearBoard } from '../slices/listsSlice';

const Footer: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addList(title));
      setTitle('');
    }
  };

  return (
    <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={((e) => setTitle(e.target.value))}
          type="text"
          placeholder="List title"
          name="title"
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button type="submit" className="rounded bg-teal px-6 py-4 mr-3 text-xl font-semibold text-off-white-light">
          Save
        </button>
        <button
          onClick={() => dispatch(clearBoard())}
          type="button"
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
};

export default Footer;
