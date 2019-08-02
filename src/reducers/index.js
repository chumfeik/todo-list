import { createStore } from 'redux';

const todo = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case 'DELETE_TASK':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(todo);

export default store;
