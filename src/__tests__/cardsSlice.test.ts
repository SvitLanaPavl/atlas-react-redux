import { describe, it, expect } from 'vitest';
import listsReducer, { addCard, deleteCard, clearBoard } from '../slices/listsSlice';

describe('Card Actions', () => {
  it('Should add a card to a list', () => {
    const initialStateWithLists = {
      lists: [{ id: '1', title: 'List 1', cardIds: [] }],
      cards: [],
    };

    const state = listsReducer(
      initialStateWithLists,
      addCard({ listId: '1', title: 'New Card', description: 'Test' })
    );

    expect(state.cards.length).toBe(1);
    expect(state.cards[0].title).toBe('New Card');
    expect(state.cards[0].description).toBe('Test');
    expect(state.lists[0].cardIds.length).toBe(1);
  });

  it('Should delete a card from the list', () => {
    const initialStateWithCard = {
      lists: [{ id: '1', title: 'List 1', cardIds: ['1'] }],
      cards: [{ id: '1', title: 'Card 1', description: 'Test' }],
    };

    const state = listsReducer(initialStateWithCard, deleteCard('1'));

    expect(state.cards.length).toBe(0);
    expect(state.lists[0].cardIds.length).toBe(0);
  });

  it('Should clear the board (cards and lists)', () => {
    const initialStateWithCardsAndLists = {
      lists: [{ id: '1', title: 'List 1', cardIds: ['1'] }],
      cards: [{ id: '1', title: 'Card 1', description: 'Test Card' }],
    };

    const state = listsReducer(initialStateWithCardsAndLists, clearBoard());

    expect(state.lists.length).toBe(0);
    expect(state.cards.length).toBe(0);
  });
});
