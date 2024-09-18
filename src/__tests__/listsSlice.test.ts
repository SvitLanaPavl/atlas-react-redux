import { describe, it, expect } from 'vitest';
import listsReducer, { addList, deleteList, addCard, clearBoard } from '../slices/listsSlice';

describe('Lists Slice', () => {
  it('Should add a list', () => {
    // Mock initial state
    const initialState = {
      lists: [],
      cards: [],
    };
    const state = listsReducer(initialState, addList('New List'));

    expect(state.lists.length).toBe(1);
    expect(state.lists[0].title).toBe('New List');
  });

  it('Should delete a list', () => {
    const initialStateWithLists = {
      lists:[{id: '1', title: 'List 1', cardIds: []}],
      cards: [],
    };
    const state = listsReducer(initialStateWithLists, deleteList('1'));
    expect(state.lists.length).toBe(0);
  });

  it('Should add a card to a list', () => {
    const initialStateWithLists = {
      lists:[{id: '1', title: 'List 1', cardIds: []}],
      cards: [],
    };
    const state = listsReducer(
      initialStateWithLists,
      addCard({ listId: '1', title: 'New Card', description: 'Test' })
    );
    expect(state.cards.length).toBe(1);
    expect(state.cards[0].title).toBe('New Card');
    expect(state.lists[0].cardIds.length).toBe(1);
  });

  it('Should clear a board', () => {
    const initialStateWithData = {
      lists: [{ id: '1', title: 'List 1', cardIds: ['1'] }],
      cards: [{ id: '1', title: 'Card 1', description: 'Test Card' }],
    };
  
    const state = listsReducer(initialStateWithData, clearBoard());
    expect(state.lists.length).toBe(0);
    expect(state.cards.length).toBe(0);
  });
});