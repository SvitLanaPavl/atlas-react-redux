// Manages: adding a list, deleting a list,
// adding a card to a list and clearing the board
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defining Initial State

interface Card {
  id: string;
  title: string;
  description: string;
}

interface List {
  id: string;
  title: string;
  cardIds: string[];
}

interface BoardState {
  lists: List[];
  cards: Card[];
}

const initialState: BoardState = {
  lists: [],
  cards: [],
}

// Defining Reducers: adding a list, deleting a list
// adding a card, clearing the board

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      const newList: List = {
        id: new Date().toISOString(),
        title: action.payload,
        cardIds: [],
      };
      state.lists.push(newList);
    },
    deleteList: (state, action: PayloadAction<string>) => {
      const listId = action.payload;
      const listToDelete = state.lists.find(list => list.id === listId);
      if (listToDelete) {
        state.lists = state.lists.filter(list => list.id !== listId);
        state.cards = state.cards.filter(card => !listToDelete.cardIds.includes(card.id));
      }
    },
    addCard: (
      state,
      action: PayloadAction<{ listId: string; title: string; description: string }>
    ) => {
      const { listId, title, description } = action.payload;
      const newCard: Card = {
        id: new Date().toISOString(),
        title,
        description,
      };
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.cardIds.push(newCard.id);
        state.cards.push(newCard);
      }
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      state.cards = state.cards.filter(card => card.id !== cardId);
      state.lists.forEach(list => {
        list.cardIds = list.cardIds.filter(id => id !== cardId);
      });
    },
    clearBoard: state => {
      state.lists = [];
      state.cards = [];
    },
  },
});

export const { addList, deleteList, addCard, deleteCard, clearBoard } = listsSlice.actions;
export default listsSlice.reducer;